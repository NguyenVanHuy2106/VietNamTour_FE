import React, { useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";

/* ==========================================
   VIET NAM TOUR - ITINERARY + TABS
   Giữ nguyên thiết kế cũ
========================================== */

var DAY_REGEX = /^ngày\s+(?:thứ\s+)?0*(\d{1,2})(?:\s*[:.\-–—|]\s*|\s+)?(.*)$/i;

/* ==========================================
   HTML SANITIZATION
========================================== */

var SANITIZE_OPTIONS = {
  USE_PROFILES: {
    html: true,
  },

  FORBID_TAGS: [
    "style",
    "script",
    "iframe",
    "object",
    "embed",
    "form",
    "input",
    "button",
    "svg",
    "math",
  ],

  FORBID_ATTR: [
    "style",
    "class",
    "id",
    "face",
    "size",
    "color",
    "align",
    "srcset",
    "sizes",
  ],
};

function sanitizeHTML(html) {
  return DOMPurify.sanitize(String(html || ""), SANITIZE_OPTIONS);
}

/* ==========================================
   NORMALIZE TEXT
========================================== */

function normalizeText(value) {
  return String(value || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeHeading(value) {
  return normalizeText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[\s:：.\-–—|]+$/g, "")
    .trim();
}

/* ==========================================
   CHECK HEADING
========================================== */

function isHeadingCandidate(element) {
  if (!element || !element.tagName) {
    return false;
  }

  var tag = element.tagName.toUpperCase();

  var allowedTags = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "DIV"];

  if (allowedTags.indexOf(tag) === -1) {
    return false;
  }

  if (element.querySelector("img, table, ul, ol, video")) {
    return false;
  }

  if (
    tag === "DIV" &&
    element.querySelector("p, div, h1, h2, h3, h4, h5, h6")
  ) {
    return false;
  }

  return true;
}

/* ==========================================
   DETECT DAY HEADER
========================================== */

function detectDayHeader(element) {
  if (!isHeadingCandidate(element)) {
    return null;
  }

  var tag = element.tagName.toUpperCase();

  var text = normalizeText(element.textContent);

  if (!text || text.length > 135) {
    return null;
  }

  var match = text.match(DAY_REGEX);

  if (!match) {
    return null;
  }

  var number = Number(match[1]);

  if (!isFinite(number) || number < 1 || number > 99) {
    return null;
  }

  if (tag === "P" && text.length > 100 && !element.querySelector("strong, b")) {
    return null;
  }

  return {
    number: number,
    title: normalizeText(match[2]).replace(/^[:.\-–—|\s]+/, ""),
  };
}

/* ==========================================
   DETECT SERVICE HEADERS
========================================== */

function detectSectionHeader(element) {
  if (!isHeadingCandidate(element)) {
    return null;
  }

  var heading = normalizeHeading(element.textContent);

  if (!heading || heading.length > 90) {
    return null;
  }

  var titles = {
    /* DỊCH VỤ KHÔNG BAO GỒM */

    excluded: [
      "dich vu khong bao gom",
      "cac dich vu khong bao gom",
      "gia tour khong bao gom",
      "gia khong bao gom",
      "gia tour chua bao gom",
      "gia chua bao gom",
      "chi phi khong bao gom",
      "dich vu chua bao gom",
    ],

    /* DỊCH VỤ BAO GỒM */

    included: [
      "dich vu bao gom",
      "cac dich vu bao gom",
      "gia tour bao gom",
      "gia bao gom",
      "gia tour da bao gom",
      "gia da bao gom",
      "gia tour tron goi bao gom",
      "dich vu da bao gom",
    ],

    /* CHÍNH SÁCH TRẺ EM */

    children: [
      "chinh sach tre em",
      "chinh sach gia tre em",
      "gia tour tre em",
      "quy dinh tre em",
      "gia tre em",
      "quy dinh gia tre em",
    ],

    /* LƯU Ý / ĐIỀU KHOẢN */

    notes: [
      "luu y",
      "nhung luu y",
      "luu y va dieu khoan",
      "dieu khoan",
      "dieu khoan tour",
      "dieu kien tour",
      "dieu kien huy tour",
      "chinh sach huy tour",
      "chinh sach huy doi tour",
      "quy dinh chung",
      "thong tin can luu y",
      "quy dinh va luu y",
    ],
  };

  var keys = ["excluded", "included", "children", "notes"];

  for (var i = 0; i < keys.length; i++) {
    if (titles[keys[i]].indexOf(heading) !== -1) {
      return keys[i];
    }
  }

  return null;
}

/* ==========================================
   FLATTEN HTML WRAPPERS
========================================== */

function flattenNodes(nodes) {
  var output = [];

  nodes.forEach(function(node) {
    if (!node || !node.tagName) {
      return;
    }

    var tag = node.tagName.toUpperCase();

    var isWrapper =
      tag === "DIV" && node.attributes.length === 0 && node.children.length > 0;

    var hasDirectText = Array.from(node.childNodes).some(function(child) {
      return child.nodeType === 3 && Boolean(normalizeText(child.textContent));
    });

    if (
      isWrapper &&
      !hasDirectText &&
      !detectDayHeader(node) &&
      !detectSectionHeader(node)
    ) {
      var children = flattenNodes(Array.from(node.children));

      output = output.concat(children);
    } else {
      output.push(node);
    }
  });

  return output;
}

/* ==========================================
   PARSE CONTENT INTO TABS
========================================== */

export function parseTourTabs(html) {
  var cleanHTML = sanitizeHTML(html);

  var empty = {
    itinerary: cleanHTML,
    included: "",
    children: "",
    excluded: "",
    notes: "",
  };

  if (!cleanHTML || typeof DOMParser === "undefined") {
    return empty;
  }

  var doc = new DOMParser().parseFromString(cleanHTML, "text/html");

  var nodes = flattenNodes(Array.from(doc.body.children));

  var sections = {
    itinerary: [],
    included: [],
    children: [],
    excluded: [],
    notes: [],
  };

  var current = "itinerary";

  nodes.forEach(function(node) {
    var section = detectSectionHeader(node);

    /* GẶP TIÊU ĐỀ DỊCH VỤ */

    if (section) {
      current = section;
      return;
    }

    /* GẶP TIÊU ĐỀ NGÀY */

    if (detectDayHeader(node)) {
      current = "itinerary";
    }

    /* THÊM NỘI DUNG VÀO TAB */

    sections[current].push(node.outerHTML);
  });

  return {
    itinerary: sections.itinerary.join(""),
    included: sections.included.join(""),
    children: sections.children.join(""),
    excluded: sections.excluded.join(""),
    notes: sections.notes.join(""),
  };
}

/* ==========================================
   PARSE ITINERARY BY DAY
   GIỮ NGUYÊN LOGIC CŨ
========================================== */

export function parseTourItinerary(html) {
  var cleanHTML = sanitizeHTML(html);

  if (!cleanHTML) {
    return {
      intro: "",
      days: [],
    };
  }

  if (typeof DOMParser === "undefined") {
    return {
      intro: cleanHTML,
      days: [],
    };
  }

  var parser = new DOMParser();

  var documentHTML = parser.parseFromString(cleanHTML, "text/html");

  var nodes = flattenNodes(Array.from(documentHTML.body.children));

  var intro = [];
  var days = [];

  var currentDay = null;

  nodes.forEach(function(node) {
    var day = detectDayHeader(node);

    if (day) {
      currentDay = {
        number: day.number,
        title: day.title,
        blocks: [],
      };

      days.push(currentDay);
    } else if (currentDay) {
      currentDay.blocks.push(node.outerHTML);
    } else {
      intro.push(node.outerHTML);
    }
  });

  return {
    intro: intro.join(""),

    days: days.map(function(day, index) {
      return {
        id: String(day.number) + "-" + index,
        number: day.number,
        title: day.title,
        html: day.blocks.join(""),
      };
    }),
  };
}

/* ==========================================
   DAY CARD
   GIỮ NGUYÊN GIAO DIỆN
========================================== */

function TourDayCard(props) {
  var day = props.day || {};

  var openState = useState(Boolean(props.initiallyOpen));

  var open = openState[0];
  var setOpen = openState[1];

  var contentId = "tour-day-content-" + day.id;

  var dayNumber = String(day.number || 1).padStart(2, "0");

  function toggleDay() {
    setOpen(function(previous) {
      return !previous;
    });
  }

  return (
    <article className={"tour-day-card" + (open ? " is-open" : "")}>
      <h3 className="tour-day-title">
        <button
          type="button"
          className="tour-day-header"
          onClick={toggleDay}
          aria-expanded={open}
          aria-controls={contentId}
        >
          <span className="tour-day-number">NGÀY {dayNumber}</span>

          <span className="tour-day-heading">
            {day.title || "Lịch trình ngày " + day.number}
          </span>

          <FaChevronDown className="tour-day-chevron" aria-hidden="true" />
        </button>
      </h3>

      <div id={contentId} className="tour-day-body" hidden={!open}>
        <div
          className="tour-article-content"
          dangerouslySetInnerHTML={{
            __html: day.html || "",
          }}
        />
      </div>
    </article>
  );
}

/* ==========================================
   ITINERARY BODY
   GIỮ NGUYÊN FONT / SIZE / STYLE
========================================== */

function ItineraryBody(props) {
  var content = props.content || "";

  var parsed = useMemo(
    function() {
      return parseTourItinerary(content);
    },
    [content],
  );

  var intro = parsed.intro || "";
  var days = parsed.days || [];

  return (
    <section className="tour-itinerary" aria-labelledby="tour-itinerary-title">
      {/* HEADER CŨ */}

      <div className="tour-itinerary-heading">
        <span className="tour-itinerary-icon" aria-hidden="true">
          <FaCalendarAlt />
        </span>

        <div>
          <h2 id="tour-itinerary-title">Hành trình chi tiết</h2>

          <p>Khám phá lịch trình và các hoạt động trong chuyến đi</p>
        </div>
      </div>

      {/* INTRO CONTENT */}

      {Boolean(intro) && (
        <div
          className={"tour-article-content " + "tour-intro-content"}
          dangerouslySetInnerHTML={{
            __html: intro,
          }}
        />
      )}

      {/* DANH SÁCH NGÀY */}

      {days.length > 0 && (
        <div className="tour-day-list">
          {days.map(function(day, index) {
            return (
              <TourDayCard key={day.id} day={day} initiallyOpen={index === 0} />
            );
          })}
        </div>
      )}

      {/* CHƯA CÓ NỘI DUNG */}

      {!intro && days.length === 0 && (
        <p className="tour-empty-description">
          Lịch trình chi tiết đang được cập nhật.
        </p>
      )}
    </section>
  );
}

/* ==========================================
   TAB DEFINITIONS
========================================== */

var TAB_DEFINITIONS = [
  {
    id: "itinerary",
    label: "Hành trình chi tiết",
  },
  {
    id: "included",
    label: "Dịch vụ bao gồm",
  },
  {
    id: "children",
    label: "Chính sách trẻ em",
  },
  {
    id: "excluded",
    label: "Dịch vụ không bao gồm",
  },
  {
    id: "notes",
    label: "Lưu ý & điều khoản",
  },
];

/* ==========================================
   MAIN COMPONENT
========================================== */

function TourItinerary(props) {
  var content = props.content || "";

  var sections = useMemo(
    function() {
      return parseTourTabs(content);
    },
    [content],
  );

  var tabState = useState("itinerary");
  var activeTab = tabState[0];
  var setActiveTab = tabState[1];

  /* CHỈ HIỆN TAB CÓ NỘI DUNG */

  var available = TAB_DEFINITIONS.filter(function(tab) {
    if (tab.id === "itinerary") {
      return true;
    }

    var html = sections[tab.id] || "";

    var text = html.replace(/<[^>]*>/g, " ").trim();

    return Boolean(text) || /<img\b|<table\b/i.test(html);
  });

  /* HỖ TRỢ ĐIỀU HƯỚNG BẰNG BÀN PHÍM */

  function onTabKeys(event, index) {
    var next = index;

    if (event.key === "ArrowRight") {
      next = (index + 1) % available.length;
    } else if (event.key === "ArrowLeft") {
      next = (index - 1 + available.length) % available.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = available.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    setActiveTab(available[next].id);

    var target = document.getElementById("vnt-tour-tab-" + available[next].id);

    if (target) {
      target.focus();
    }
  }

  return (
    <div className="vnt-tour-content-tabs">
      {/* TAB NAVIGATION */}

      {available.length > 1 && (
        <div
          className="vnt-tour-tabs-nav"
          role="tablist"
          aria-label="Nội dung chương trình tour"
        >
          {available.map(function(tab, index) {
            var selected = activeTab === tab.id;

            return (
              <button
                type="button"
                role="tab"
                key={tab.id}
                id={"vnt-tour-tab-" + tab.id}
                aria-controls={"vnt-tour-panel-" + tab.id}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                className={
                  "vnt-tour-tab-button" + (selected ? " is-active" : "")
                }
                onClick={function() {
                  setActiveTab(tab.id);
                }}
                onKeyDown={function(event) {
                  onTabKeys(event, index);
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      {/* TAB CONTENT */}

      <div className="vnt-tour-tabs-content">
        {available.map(function(tab) {
          var selected = activeTab === tab.id;

          return (
            <div
              key={tab.id}
              id={"vnt-tour-panel-" + tab.id}
              role={available.length > 1 ? "tabpanel" : undefined}
              aria-labelledby={
                available.length > 1 ? "vnt-tour-tab-" + tab.id : undefined
              }
              className="vnt-tour-tab-panel"
              hidden={!selected}
            >
              {tab.id === "itinerary" ? (
                <ItineraryBody content={sections.itinerary} />
              ) : (
                <section
                  className="vnt-tour-service-section"
                  aria-label={tab.label}
                >
                  {/* TIÊU ĐỀ GIỐNG PHONG CÁCH LỊCH TRÌNH */}

                  <h2 className="vnt-tour-service-title">{tab.label}</h2>

                  {/* KHUNG NỘI DUNG - KHÔNG COLLAPSE */}

                  <div className="vnt-tour-service-card">
                    <div
                      className="tour-article-content"
                      dangerouslySetInnerHTML={{
                        __html: sections[tab.id],
                      }}
                    />
                  </div>
                </section>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TourItinerary;

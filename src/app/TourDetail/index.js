import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import API from "../../config/APINoToken";

import {
  FaRegClock,
  FaBus,
  FaRegBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTicketAlt,
  FaFire,
} from "react-icons/fa";

import TourItinerary from "./TourItinerary";
import TourQuoteModal from "./TourQuoteModal";
import "./index.css";

/* ==========================================
   VIET NAM TOUR - TOUR DETAIL
   Compatible with older React / Babel
========================================== */

var SITE_URL = "https://myvietnamtour.vn";
var COMPANY_NAME = "Việt Nam Tour";

// Kiểm tra đường dẫn liên hệ thực tế
var CONTACT_PATH = "/lien-he";

/* ==========================================
   HELPERS
========================================== */

function getPriceNumber(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  var number = Number(value);

  if (!isFinite(number) || number <= 0) {
    return null;
  }

  return number;
}

function formatPrice(value) {
  var number = getPriceNumber(value);

  if (number === null) {
    return "Liên hệ";
  }

  return number.toLocaleString("vi-VN") + " ₫";
}

function stripHTML(html) {
  var value = String(html || "");

  if (typeof document !== "undefined" && document.createElement) {
    var element = document.createElement("div");

    element.innerHTML = value;

    value = element.textContent || element.innerText || "";
  } else {
    value = value
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'");
  }

  return value
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function safeJSON(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function getImageURL(image) {
  if (image && typeof image.imageurl === "string") {
    return image.imageurl;
  }

  return "";
}

function getMainImage(images) {
  if (!Array.isArray(images) || images.length === 0) {
    return "";
  }

  var mainImage = images.find(function(item) {
    return Number(item.imagetype) === 0;
  });

  return getImageURL(mainImage || images[0]);
}

function getRelatedPrice(rel) {
  if (rel && rel.price) {
    return formatPrice(rel.price.adultprice);
  }

  return "Liên hệ";
}

/* ==========================================
   TOUR HEADER
   KEEP ORIGINAL DESIGN
========================================== */

function TourHeader(props) {
  var tour = props.tour || {};
  var highlights = props.highlights || [];

  var validHighlights = highlights
    .filter(function(item) {
      return (
        item && item.highlight_value && String(item.highlight_value).trim()
      );
    })
    .slice(0, 4);

  return (
    <header className="vnt-tour-top-header">
      {/* TOUR TITLE */}

      <h1 className="vnt-tour-top-title">{tour.tourname}</h1>

      {/* ORIGINAL GREEN HIGHLIGHTS */}

      {validHighlights.length > 0 && (
        <div
          className="vnt-tour-top-highlights"
          aria-label="Điểm nổi bật của tour"
        >
          {validHighlights.map(function(item, index) {
            return (
              <div key={index} className="vnt-tour-top-highlight-item">
                <FaCheckCircle
                  className="vnt-highlight-check"
                  aria-hidden="true"
                />

                <span>{item.highlight_value}</span>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}

/* ==========================================
   TOUR INTRODUCTION
   BELOW IMAGE GALLERY
========================================== */

function TourDescription(props) {
  var description = stripHTML(props.description || "");

  if (!description) {
    return null;
  }

  return (
    <section
      className="vnt-tour-description"
      aria-labelledby="vnt-tour-description-title"
    >
      <h2
        id="vnt-tour-description-title"
        className="vnt-tour-description-title"
      >
        Giới thiệu chương trình
      </h2>

      <p className="vnt-tour-description-text">{description}</p>
    </section>
  );
}

/* ==========================================
   TOUR SPECS
========================================== */

function TourSpecs(props) {
  var fullData = props.fullData || {};

  var specs = [
    {
      icon: <FaRegClock />,
      label: "Thời gian",
      value: fullData.timetype_name,
      color: "pulse-blue",
    },
    {
      icon: <FaBus />,
      label: "Phương tiện",
      value: fullData.vehicletype_name,
      color: "pulse-orange",
    },
    {
      icon: <FaRegBuilding />,
      label: "Lưu trú",
      value: fullData.hoteltypename,
      color: "pulse-green",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Khởi hành",
      value: fullData.departure_name,
      color: "pulse-red",
    },
  ];

  return (
    <div className="specs-card-v4">
      {specs.map(function(spec, index) {
        return (
          <div className="spec-line-item" key={index}>
            <span className={"icon-v4-box " + spec.color} aria-hidden="true">
              {spec.icon}
            </span>

            <div className="text-v4-box">
              <span className="label-neon">{spec.label}</span>

              <strong className="text-neon">
                {spec.value || "Đang cập nhật"}
              </strong>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ==========================================
   BOOKING CARD
========================================== */

/* ==========================================
   BOOKING CARD
   GIỮ NGUYÊN LAYOUT - MỞ POPUP BÁO GIÁ
========================================== */

function BookingCard(props) {
  var price = props.price || {};
  var onQuoteClick = props.onQuoteClick;

  return (
    <div className="booking-card-v3">
      <div className="price-label">Giá trọn gói từ:</div>

      <div className="price-val-v3">{formatPrice(price.adultprice)}</div>

      <button type="button" className="btn-book-v3" onClick={onQuoteClick}>
        <FaTicketAlt aria-hidden="true" />
        <span>YÊU CẦU BÁO GIÁ</span>
      </button>
    </div>
  );
}

/* ==========================================
   IMAGE GALLERY
========================================== */

function TourGallery(props) {
  var images = props.images || [];
  var activeImg = props.activeImg;
  var setActiveImg = props.setActiveImg;
  var tourName = props.tourName || "Tour Việt Nam Tour";
  var viewerCount = props.viewerCount;

  var heroImg = getMainImage(images);

  if (!heroImg) {
    return null;
  }

  var validImages = images.filter(function(img) {
    return Boolean(getImageURL(img));
  });

  return (
    <section className="gallery-box-v3" aria-label="Hình ảnh chương trình tour">
      {/* MAIN IMAGE */}

      <div className="big-frame">
        <img
          src={activeImg || heroImg}
          className="img-main"
          alt={tourName}
          width="900"
          height="560"
        />

        {/* Chỉ hiện lượt xem nếu API có dữ liệu thật */}

        {Number(viewerCount) > 0 && (
          <div className="view-count">
            <FaFire aria-hidden="true" />

            <span>Đang có {viewerCount} người xem tour này</span>
          </div>
        )}
      </div>

      {/* THUMBNAILS */}

      {validImages.length > 1 && (
        <div className="thumb-row" role="group" aria-label="Chọn hình ảnh tour">
          {validImages.map(function(img, index) {
            var imageUrl = getImageURL(img);
            var selected = activeImg === imageUrl;

            return (
              <button
                type="button"
                key={index}
                className={"thumb-box-v3" + (selected ? " active" : "")}
                onClick={function() {
                  setActiveImg(imageUrl);
                }}
                aria-label={"Xem hình ảnh số " + (index + 1)}
                aria-pressed={selected}
              >
                <img
                  src={imageUrl}
                  alt={tourName + " - hình ảnh " + (index + 1)}
                  loading="lazy"
                  width="110"
                  height="75"
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

/* ==========================================
   RELATED TOURS
========================================== */

function RelatedTours(props) {
  var relations = props.relations || [];

  var validRelations = relations
    .filter(function(rel) {
      return rel && rel.slug;
    })
    .slice(0, 4);

  if (!validRelations.length) {
    return null;
  }

  return (
    <section
      className="related-sidebar-v4 mt-4"
      aria-labelledby="related-tour-title"
    >
      <div className="related-header-v4">
        <div>
          <span className="related-eyebrow-v4">GỢI Ý THÊM</span>

          <h2 id="related-tour-title" className="related-title-v4">
            Tour bạn có thể quan tâm
          </h2>
        </div>

        <span className="related-count-v4">{validRelations.length}</span>
      </div>

      <div className="related-list-v4">
        {validRelations.map(function(rel, index) {
          var imageUrl = "";

          if (rel.images && rel.images.length > 0) {
            imageUrl = getImageURL(rel.images[0]);
          }

          return (
            <Link
              key={rel.tourid || rel.slug || index}
              className="related-card-v4"
              to={"/tour/" + encodeURIComponent(rel.slug)}
            >
              <span className="related-image-v4">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={rel.tourname || "Tour du lịch liên quan"}
                    loading="lazy"
                    width="92"
                    height="68"
                  />
                ) : (
                  <span className="related-image-empty-v4">VIỆT NAM TOUR</span>
                )}
              </span>

              <span className="related-content-v4">
                <span className="related-card-name">{rel.tourname}</span>

                <span className="related-bottom-v4">
                  <span className="related-price-v4">
                    <span>Giá từ</span>

                    <strong>{getRelatedPrice(rel)}</strong>
                  </span>

                  <span className="related-arrow-v4" aria-hidden="true">
                    →
                  </span>
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

function TourDetail() {
  var params = useParams();
  var Slug = params.Slug;

  var dataState = useState({
    tour: {},
    detail: {},
    price: {},
    highlights: [],
    images: [],
    relations: [],
    fullData: {},
  });

  var data = dataState[0];
  var setData = dataState[1];

  var loadingState = useState(true);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  var errorState = useState(false);
  var error = errorState[0];
  var setError = errorState[1];

  var imageState = useState("");
  var activeImg = imageState[0];
  var setActiveImg = imageState[1];

  /* ==========================================
   QUOTE MODAL STATE
========================================== */

  var quoteModalState = useState(false);
  var quoteModalOpen = quoteModalState[0];
  var setQuoteModalOpen = quoteModalState[1];

  function openQuoteModal() {
    setQuoteModalOpen(true);
  }

  var closeQuoteModal = useCallback(function() {
    setQuoteModalOpen(false);
  }, []);

  /* ========================================
     FETCH DATA
  ======================================== */

  useEffect(
    function() {
      var mounted = true;

      window.scrollTo(0, 0);

      setLoading(true);
      setError(false);
      setActiveImg("");

      setData({
        tour: {},
        detail: {},
        price: {},
        highlights: [],
        images: [],
        relations: [],
        fullData: {},
      });

      if (!Slug) {
        setError(true);
        setLoading(false);

        return function() {
          mounted = false;
        };
      }

      async function loadTour() {
        try {
          var response = await API.get(
            "/tour/slug/" + encodeURIComponent(Slug),
          );

          var result = null;

          if (response && response.data && response.data.data) {
            result = response.data.data;
          }

          if (!mounted) {
            return;
          }

          if (!result || !result.tour) {
            setError(true);
            return;
          }

          var tourImages = Array.isArray(result.images) ? result.images : [];

          setData({
            tour: result.tour || {},
            detail: result.detail || {},
            price: result.price || {},

            highlights: Array.isArray(result.highlights)
              ? result.highlights
              : [],

            images: tourImages,
            fullData: result,
            relations: [],
          });

          setActiveImg(getMainImage(tourImages));

          /* FETCH RELATED TOURS */

          try {
            var relatedResponse = await API.post("/tour/relation", {
              tourid: result.tour.tourid,
              destination: result.tour.destination || "",
            });

            var relatedData = [];

            if (
              relatedResponse &&
              relatedResponse.data &&
              relatedResponse.data.data
            ) {
              relatedData = relatedResponse.data.data;
            }

            if (mounted) {
              setData(function(prev) {
                return Object.assign({}, prev, {
                  relations: Array.isArray(relatedData) ? relatedData : [],
                });
              });
            }
          } catch (relatedError) {
            console.error("Related tour error:", relatedError);
          }
        } catch (loadError) {
          console.error("Tour detail error:", loadError);

          if (mounted) {
            setError(true);
          }
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      }

      loadTour();

      return function() {
        mounted = false;
      };
    },
    [Slug],
  );

  /* ========================================
     DATA
  ======================================== */

  var tour = data.tour || {};
  var detail = data.detail || {};
  var price = data.price || {};
  var fullData = data.fullData || {};

  var images = Array.isArray(data.images) ? data.images : [];

  var highlights = Array.isArray(data.highlights) ? data.highlights : [];

  var relations = Array.isArray(data.relations) ? data.relations : [];

  /* ========================================
     SEO
  ======================================== */

  var canonical = SITE_URL + "/tour/" + encodeURIComponent(Slug || "");

  var seoTitle = tour.tourname
    ? tour.tourname + " | " + COMPANY_NAME
    : "Tour du lịch | " + COMPANY_NAME;

  var seoDescription = stripHTML(tour.description || "");

  if (!seoDescription) {
    seoDescription =
      "Khám phá chương trình " +
      (tour.tourname || "du lịch") +
      " cùng Việt Nam Tour. " +
      "Thông tin lịch trình, dịch vụ " +
      "và tư vấn tour trọn gói.";
  }

  seoDescription = seoDescription.slice(0, 160);

  var heroImg = getMainImage(images);

  /* ========================================
     STRUCTURED DATA
  ======================================== */

  var structuredData = [];

  if (tour.tourname) {
    var breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: SITE_URL + "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: tour.tourname,
          item: canonical,
        },
      ],
    };

    var tripSchema = {
      "@context": "https://schema.org",
      "@type": "TouristTrip",

      "@id": canonical + "#tour",

      name: tour.tourname,
      description: seoDescription,
      url: canonical,
      inLanguage: "vi-VN",

      provider: {
        "@type": "Organization",
        name: COMPANY_NAME,
        url: SITE_URL + "/",
      },
    };

    var schemaImages = images
      .map(function(img) {
        return getImageURL(img);
      })
      .filter(function(url) {
        return Boolean(url);
      });

    if (schemaImages.length > 0) {
      tripSchema.image = schemaImages;
    }

    var adultPrice = getPriceNumber(price.adultprice);

    if (adultPrice !== null) {
      tripSchema.offers = {
        "@type": "Offer",
        url: canonical,
        price: adultPrice,
        priceCurrency: "VND",
        seller: {
          "@type": "Organization",
          name: COMPANY_NAME,
        },
      };
    }

    structuredData = [breadcrumbSchema, tripSchema];
  }

  /* ========================================
     LOADING
  ======================================== */

  if (loading) {
    return (
      <div className="loading-global" role="status">
        Đang tải chương trình tour...
      </div>
    );
  }

  /* ========================================
     NOT FOUND
  ======================================== */

  if (error || !tour || !tour.tourname) {
    return (
      <main className="container tour-not-found">
        <Helmet>
          <title>Không tìm thấy tour | Việt Nam Tour</title>

          <meta name="robots" content="noindex,follow" />
        </Helmet>

        <h1>Không tìm thấy chương trình tour</h1>

        <p>Chương trình có thể đã được thay đổi hoặc ngừng hiển thị.</p>

        <Link to="/">Về trang chủ</Link>
      </main>
    );
  }

  /* ========================================
     RENDER
  ======================================== */

  return (
    <main className="tour-pro-v3">
      {/* SEO HEAD */}

      <Helmet>
        <html lang="vi" />

        <title>{seoTitle}</title>

        <meta name="description" content={seoDescription} />

        <meta name="robots" content="index,follow,max-image-preview:large" />

        <link rel="canonical" href={canonical} />

        {/* OPEN GRAPH */}

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="vi_VN" />

        <meta property="og:site_name" content={COMPANY_NAME} />

        <meta property="og:title" content={seoTitle} />

        <meta property="og:description" content={seoDescription} />

        <meta property="og:url" content={canonical} />

        {heroImg && <meta property="og:image" content={heroImg} />}

        {/* TWITTER */}

        <meta
          name="twitter:card"
          content={heroImg ? "summary_large_image" : "summary"}
        />

        <meta name="twitter:title" content={seoTitle} />

        <meta name="twitter:description" content={seoDescription} />

        {heroImg && <meta name="twitter:image" content={heroImg} />}

        {/* JSON-LD */}

        <script type="application/ld+json">{safeJSON(structuredData)}</script>
      </Helmet>

      <div className="container">
        {/* HEADER - ORIGINAL DESIGN */}

        <TourHeader tour={tour} highlights={highlights} />

        {/* MAIN LAYOUT */}

        <div className="row vnt-tour-layout-row">
          {/* LEFT COLUMN */}

          <div className="col-lg-8 vnt-tour-left-column">
            {/* GALLERY */}

            <TourGallery
              images={images}
              activeImg={activeImg}
              setActiveImg={setActiveImg}
              tourName={tour.tourname}
              viewerCount={fullData.activeViewerCount}
            />

            {/* MOBILE INFO */}

            <div className="d-block d-lg-none mt-4">
              <TourSpecs fullData={fullData} />

              <BookingCard price={price} onQuoteClick={openQuoteModal} />
            </div>

            {/* DESCRIPTION + ITINERARY */}

            <div className="vnt-tour-article-layout">
              {/* INTRODUCTION */}

              <TourDescription description={tour.description || ""} />

              {/* DAY-BY-DAY ITINERARY */}

              <div className="content-detail-v3">
                <TourItinerary content={detail.content || ""} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <aside
            className="col-lg-4 vnt-tour-right-column"
            aria-label="Thông tin tour"
          >
            <div className="sidebar-v3">
              {/* DESKTOP INFO */}

              <div className="d-none d-lg-block">
                <TourSpecs fullData={fullData} />

                <BookingCard price={price} onQuoteClick={openQuoteModal} />
              </div>

              {/* RELATED TOURS */}

              <RelatedTours relations={relations} />
            </div>
          </aside>
        </div>
      </div>
      {/* TOUR QUOTE REQUEST MODAL */}

      <TourQuoteModal
        isOpen={quoteModalOpen}
        onClose={closeQuoteModal}
        tour={tour}
      />
    </main>
  );
}
export default TourDetail;

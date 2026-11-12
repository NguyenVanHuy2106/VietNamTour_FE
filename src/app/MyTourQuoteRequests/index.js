import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  FaClipboardList,
  FaSearch,
  FaSyncAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight,
  FaSuitcaseRolling,
  FaRegClock,
  FaFileAlt,
  FaPhoneAlt,
  FaEdit,
  FaTimes,
  FaInbox,
  FaInfoCircle,
} from "react-icons/fa";

import API from "../../config/APINoToken";

import "./index.css";

/* ==========================================
   VIET NAM TOUR
   MY TOUR QUOTE REQUESTS

   API:
   POST /tour-quote-requests/my-list

   LOCAL STORAGE:
   vnt_customer_phone
========================================== */

const CUSTOMER_PHONE_KEY = "vnt_customer_phone";

const QUOTE_LOOKUP_API = "/tour-quote-requests/my-list";

/* ==========================================
   PHONE HELPERS
========================================== */

function normalizePhone(value) {
  let phone = String(value || "")
    .trim()
    .replace(/[\s().-]/g, "");

  if (/^\+84\d{9}$/.test(phone)) {
    phone = "0" + phone.slice(3);
  }

  if (/^84\d{9}$/.test(phone)) {
    phone = "0" + phone.slice(2);
  }

  return phone;
}

function isValidPhone(value) {
  return /^0\d{9}$/.test(value);
}

/* ==========================================
   LOCAL STORAGE HELPERS
========================================== */

function getStoredPhone() {
  try {
    const value = window.localStorage.getItem(CUSTOMER_PHONE_KEY);

    const phone = normalizePhone(value);

    return isValidPhone(phone) ? phone : "";
  } catch (error) {
    return "";
  }
}

function saveStoredPhone(phone) {
  try {
    window.localStorage.setItem(CUSTOMER_PHONE_KEY, phone);

    return true;
  } catch (error) {
    return false;
  }
}

/* ==========================================
   FORMAT DATE
========================================== */

function formatDate(value) {
  if (!value) {
    return "Chưa cập nhật";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Chưa cập nhật";
  }

  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatDateTime(value) {
  if (!value) {
    return "Chưa cập nhật";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Chưa cập nhật";
  }

  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

/* ==========================================
   SEARCH HELPER
========================================== */

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

/* ==========================================
   STATUS HELPER
========================================== */

function getStatusInfo(value) {
  const status = String(value || "").toUpperCase();

  switch (status) {
    case "NEW":
      return {
        label: "Đã tiếp nhận",
        className: "is-new",
        description: "Việt Nam Tour đã ghi nhận yêu cầu báo giá của bạn.",
      };

    case "ASSIGNED":
      return {
        label: "Đã phân công",
        className: "is-processing",
        description: "Yêu cầu đang được chuyển đến nhân viên phụ trách.",
      };

    case "CONTACTING":
      return {
        label: "Đang tư vấn",
        className: "is-processing",
        description: "Yêu cầu đang trong quá trình tư vấn.",
      };

    case "QUOTING":
      return {
        label: "Đang lập báo giá",
        className: "is-processing",
        description: "Việt Nam Tour đang chuẩn bị phương án báo giá.",
      };

    case "QUOTED":
      return {
        label: "Đã gửi báo giá",
        className: "is-success",
        description: "Báo giá đã được ghi nhận là đã gửi.",
      };

    case "NEGOTIATING":
      return {
        label: "Đang trao đổi",
        className: "is-processing",
        description: "Hai bên đang trao đổi về yêu cầu báo giá.",
      };

    case "WON":
      return {
        label: "Thành công",
        className: "is-success",
        description: "Yêu cầu báo giá đã được ghi nhận thành công.",
      };

    case "LOST":
      return {
        label: "Không thành công",
        className: "is-closed",
        description: "Yêu cầu đã được ghi nhận là không thành công.",
      };

    case "CANCELLED":
      return {
        label: "Đã hủy",
        className: "is-closed",
        description: "Yêu cầu báo giá đã được ghi nhận là đã hủy.",
      };

    default:
      return {
        label: "Đang cập nhật",
        className: "is-default",
        description: "Trạng thái yêu cầu đang được cập nhật.",
      };
  }
}

/* ==========================================
   STATUS COMPONENT
========================================== */

function QuoteStatus({ status }) {
  const info = getStatusInfo(status);

  return (
    <span className={"vnt-my-quote-status " + info.className}>
      <span className="vnt-my-quote-status-dot" />

      {info.label}
    </span>
  );
}

/* ==========================================
   REQUEST CARD
========================================== */

function QuoteRequestCard({ item }) {
  const info = getStatusInfo(item.status);

  return (
    <article className="vnt-my-quote-card">
      {/* CARD HEADER */}

      <div className="vnt-my-quote-card-header">
        <div className="vnt-my-quote-code-group">
          <div className="vnt-my-quote-code-icon">
            <FaFileAlt aria-hidden="true" />
          </div>

          <div className="vnt-my-quote-code-content">
            <span className="vnt-my-quote-caption">MÃ YÊU CẦU</span>

            <strong className="vnt-my-quote-code">
              {item.request_code || "---"}
            </strong>
          </div>
        </div>

        <QuoteStatus status={item.status} />
      </div>

      {/* TOUR CONTENT */}

      <div className="vnt-my-quote-card-body">
        <div className="vnt-my-quote-tour-row">
          <div className="vnt-my-quote-tour-icon">
            <FaSuitcaseRolling aria-hidden="true" />
          </div>

          <div className="vnt-my-quote-tour-content">
            <span className="vnt-my-quote-caption">CHƯƠNG TRÌNH DU LỊCH</span>

            <h3>{item.tour_name || "Chương trình du lịch"}</h3>
          </div>
        </div>

        {/* INFORMATION */}

        <div className="vnt-my-quote-info-grid">
          <div className="vnt-my-quote-info-item">
            <span className="vnt-my-quote-info-icon">
              <FaCalendarAlt aria-hidden="true" />
            </span>

            <div>
              <span>Ngày gửi yêu cầu</span>

              <strong>{formatDate(item.created_at)}</strong>
            </div>
          </div>

          <div className="vnt-my-quote-info-item">
            <span className="vnt-my-quote-info-icon">
              <FaRegClock aria-hidden="true" />
            </span>

            <div>
              <span>Thời gian gửi</span>

              <strong>{formatDateTime(item.created_at)}</strong>
            </div>
          </div>
        </div>

        {/* STATUS DESCRIPTION */}

        <div className="vnt-my-quote-status-description">
          <FaInfoCircle aria-hidden="true" />

          <span>{info.description}</span>
        </div>
      </div>

      {/* CARD FOOTER */}

      <div className="vnt-my-quote-card-footer">
        <span>
          <FaCheckCircle aria-hidden="true" />
          Yêu cầu đã được lưu trên hệ thống
        </span>

        <span className="vnt-my-quote-footer-code">{item.request_code}</span>
      </div>
    </article>
  );
}

/* ==========================================
   PHONE LOOKUP FORM
========================================== */

function PhoneLookupForm({ initialPhone, onSubmit, onCancel, canCancel }) {
  const [phone, setPhone] = useState(initialPhone || "");

  const [error, setError] = useState("");

  useEffect(() => {
    setPhone(initialPhone || "");
    setError("");
  }, [initialPhone]);

  function handleSubmit(event) {
    event.preventDefault();

    const normalizedPhone = normalizePhone(phone);

    if (!isValidPhone(normalizedPhone)) {
      setError("Vui lòng nhập số điện thoại hợp lệ gồm 10 chữ số.");
      return;
    }

    setError("");

    onSubmit(normalizedPhone);
  }

  return (
    <div className="vnt-my-quotes-phone-panel">
      <div className="vnt-my-quotes-phone-icon">
        <FaPhoneAlt aria-hidden="true" />
      </div>

      <h2>Tra cứu theo số điện thoại</h2>

      <p>
        Nhập số điện thoại bạn đã sử dụng khi gửi yêu cầu báo giá đến Việt Nam
        Tour.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="vnt-my-quotes-phone">
          Số điện thoại
          <span> *</span>
        </label>

        <div className="vnt-my-quotes-phone-input">
          <FaPhoneAlt aria-hidden="true" />

          <input
            id="vnt-my-quotes-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Ví dụ: 0901234567"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
              setError("");
            }}
            maxLength={20}
            aria-invalid={Boolean(error)}
          />
        </div>

        {error && (
          <p className="vnt-my-quotes-phone-error" role="alert">
            <FaExclamationCircle aria-hidden="true" />

            {error}
          </p>
        )}

        <button type="submit" className="vnt-my-quotes-submit">
          <FaSearch aria-hidden="true" />
          Tra cứu báo giá
          <FaArrowRight aria-hidden="true" />
        </button>

        {canCancel && (
          <button
            type="button"
            className="vnt-my-quotes-cancel"
            onClick={onCancel}
          >
            Hủy thay đổi
          </button>
        )}
      </form>

      <p className="vnt-my-quotes-phone-note">
        Số điện thoại sẽ được ghi nhớ trên trình duyệt để tiện tra cứu lần sau.
      </p>
    </div>
  );
}

/* ==========================================
   EMPTY STATE
========================================== */

function EmptyState({ isFiltered, onClearFilters }) {
  return (
    <div className="vnt-my-quotes-empty">
      <div className="vnt-my-quotes-empty-icon">
        {isFiltered ? (
          <FaSearch aria-hidden="true" />
        ) : (
          <FaInbox aria-hidden="true" />
        )}
      </div>

      <h3>
        {isFiltered
          ? "Không tìm thấy kết quả phù hợp"
          : "Chưa có yêu cầu báo giá"}
      </h3>

      <p>
        {isFiltered
          ? "Hãy thử tìm kiếm bằng từ khóa khác hoặc xóa bộ lọc."
          : "Chưa tìm thấy yêu cầu báo giá tương ứng với số điện thoại này."}
      </p>

      {isFiltered ? (
        <button
          type="button"
          className="vnt-my-quotes-primary-btn"
          onClick={onClearFilters}
        >
          Xóa bộ lọc
        </button>
      ) : (
        <Link
          to="/dich-vu/du-lich-trong-nuoc"
          className="vnt-my-quotes-primary-btn"
        >
          Khám phá chương trình tour
          <FaArrowRight aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

const MyTourQuoteRequests = () => {
  /* ======================================
     STATES
  ====================================== */

  const [customerPhone, setCustomerPhone] = useState(getStoredPhone);

  const [showPhoneForm, setShowPhoneForm] = useState(!getStoredPhone());

  const [requests, setRequests] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("ALL");

  const [refreshCount, setRefreshCount] = useState(0);

  /* ======================================
     LOAD REQUESTS

     API BE:
     POST /api/tour-quote-requests/my-list

     BODY:
     {
       customer_phone: "0901234567"
     }
  ====================================== */

  useEffect(() => {
    if (!isValidPhone(customerPhone) || showPhoneForm) {
      setLoading(false);
      return undefined;
    }

    let cancelled = false;

    const fetchRequests = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await API.post(QUOTE_LOOKUP_API, {
          customer_phone: customerPhone,
        });

        const result = response.data;

        if (!result || result.success !== true || !Array.isArray(result.data)) {
          throw new Error(
            (result && result.message) || "Dữ liệu phản hồi không hợp lệ.",
          );
        }

        if (!cancelled) {
          setRequests(result.data);
        }
      } catch (requestError) {
        if (cancelled) {
          return;
        }

        setRequests([]);

        const apiMessage =
          requestError.response &&
          requestError.response.data &&
          requestError.response.data.message;

        setError(
          apiMessage || "Không thể tải danh sách yêu cầu. Vui lòng thử lại.",
        );

        console.error("Get my quote requests error:", requestError.message);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchRequests();

    return () => {
      cancelled = true;
    };
  }, [customerPhone, showPhoneForm, refreshCount]);

  /* ======================================
     RELOAD
  ====================================== */

  const handleRefresh = useCallback(() => {
    setRefreshCount((prev) => prev + 1);
  }, []);

  /* ======================================
     SUBMIT PHONE
  ====================================== */

  const handlePhoneSubmit = (phone) => {
    const saved = saveStoredPhone(phone);

    if (!saved) {
      setError("Không thể lưu số điện thoại vào trình duyệt.");
      return;
    }

    setCustomerPhone(phone);
    setRequests([]);
    setSearch("");
    setStatusFilter("ALL");
    setError("");
    setShowPhoneForm(false);
  };

  /* ======================================
     CHANGE PHONE
  ====================================== */

  const handleChangePhone = () => {
    setShowPhoneForm(true);
    setError("");
  };

  const handleCancelPhone = () => {
    if (isValidPhone(customerPhone)) {
      setShowPhoneForm(false);
    }
  };

  /* ======================================
     FILTERED REQUESTS
  ====================================== */

  const filteredRequests = useMemo(() => {
    const keyword = normalizeSearch(search);

    return requests.filter((item) => {
      const haystack = normalizeSearch(
        [item.request_code, item.tour_name].join(" "),
      );

      const matchesSearch = !keyword || haystack.includes(keyword);

      const matchesStatus =
        statusFilter === "ALL" ||
        String(item.status || "").toUpperCase() === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [requests, search, statusFilter]);

  /* ======================================
     STATISTICS
  ====================================== */

  const stats = useMemo(() => {
    const total = requests.length;

    const received = requests.filter(
      (item) => String(item.status || "").toUpperCase() === "NEW",
    ).length;

    const processingStatuses = [
      "ASSIGNED",
      "CONTACTING",
      "QUOTING",
      "QUOTED",
      "NEGOTIATING",
    ];

    const processing = requests.filter((item) =>
      processingStatuses.includes(String(item.status || "").toUpperCase()),
    ).length;

    return {
      total,
      received,
      processing,
    };
  }, [requests]);

  const hasActiveFilters = Boolean(search.trim()) || statusFilter !== "ALL";

  const statusOptions = useMemo(() => {
    const statuses = new Set(
      requests.map((item) => String(item.status || "").toUpperCase()),
    );

    return Array.from(statuses)
      .filter(Boolean)
      .sort();
  }, [requests]);

  /* ======================================
     RENDER
  ====================================== */

  return (
    <main className="vnt-my-quotes-page">
      <Helmet>
        <title>Tra cứu yêu cầu báo giá | Việt Nam Tour</title>

        <meta name="robots" content="noindex,follow" />
      </Helmet>

      <div className="vnt-my-quotes-container">
        {/* ==================================
            PAGE HEADING

            DÙNG DIV THAY HEADER ĐỂ TRÁNH
            CSS HEADER CHUNG BỊ XUNG ĐỘT
        ================================== */}

        <div className="vnt-my-quotes-heading">
          <div className="vnt-my-quotes-heading-info">
            <span className="vnt-my-quotes-eyebrow">
              <FaClipboardList aria-hidden="true" />
              VIỆT NAM TOUR
            </span>

            <h1>Tra cứu yêu cầu báo giá</h1>

            <p>
              Xem lại các yêu cầu tư vấn và báo giá bạn đã gửi đến Việt Nam
              Tour.
            </p>
          </div>

          <Link to="/danh-sach-tour" className="vnt-my-quotes-explore">
            <FaSuitcaseRolling aria-hidden="true" />
            Khám phá thêm tour
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        {/* ==================================
            PHONE FORM
        ================================== */}

        {showPhoneForm ? (
          <PhoneLookupForm
            initialPhone={customerPhone}
            onSubmit={handlePhoneSubmit}
            onCancel={handleCancelPhone}
            canCancel={isValidPhone(customerPhone)}
          />
        ) : (
          <>
            {/* ==================================
                CUSTOMER PHONE BAR
            ================================== */}

            <div className="vnt-my-quotes-customer-bar">
              <div className="vnt-my-quotes-customer-left">
                <div className="vnt-my-quotes-customer-icon">
                  <FaPhoneAlt aria-hidden="true" />
                </div>

                <div>
                  <span>Đang tra cứu theo số điện thoại</span>

                  <strong>{customerPhone}</strong>
                </div>
              </div>

              <button
                type="button"
                className="vnt-my-quotes-change-phone"
                onClick={handleChangePhone}
              >
                <FaEdit aria-hidden="true" />
                Đổi số điện thoại
              </button>
            </div>

            {/* ==================================
                SUMMARY CARDS
            ================================== */}

            <div className="vnt-my-quotes-summary">
              {/* TOTAL */}

              <div className="vnt-my-quotes-stat">
                <div className="vnt-my-quotes-stat-icon is-blue">
                  <FaClipboardList aria-hidden="true" />
                </div>

                <div>
                  <strong>{loading ? "—" : stats.total}</strong>

                  <span>Tổng yêu cầu</span>
                </div>
              </div>

              {/* RECEIVED */}

              <div className="vnt-my-quotes-stat">
                <div className="vnt-my-quotes-stat-icon is-green">
                  <FaCheckCircle aria-hidden="true" />
                </div>

                <div>
                  <strong>{loading ? "—" : stats.received}</strong>

                  <span>Đã tiếp nhận</span>
                </div>
              </div>

              {/* PROCESSING */}

              <div className="vnt-my-quotes-stat">
                <div className="vnt-my-quotes-stat-icon is-orange">
                  <FaRegClock aria-hidden="true" />
                </div>

                <div>
                  <strong>{loading ? "—" : stats.processing}</strong>

                  <span>Đang xử lý</span>
                </div>
              </div>
            </div>

            {/* ==================================
                REQUEST LIST SECTION
            ================================== */}

            <section className="vnt-my-quotes-section">
              <div className="vnt-my-quotes-section-heading">
                <div>
                  <h2>Danh sách yêu cầu</h2>

                  <p>
                    Các yêu cầu báo giá tương ứng với số điện thoại đã nhập.
                  </p>
                </div>

                <button
                  type="button"
                  className="vnt-my-quotes-refresh"
                  onClick={handleRefresh}
                  disabled={loading}
                >
                  <FaSyncAlt
                    className={loading ? "is-spinning" : ""}
                    aria-hidden="true"
                  />
                  Làm mới
                </button>
              </div>

              {/* FILTERS */}

              {!loading && !error && requests.length > 0 && (
                <div className="vnt-my-quotes-filters">
                  <div className="vnt-my-quotes-search">
                    <FaSearch aria-hidden="true" />

                    <input
                      type="search"
                      value={search}
                      placeholder="Tìm mã yêu cầu, tên tour..."
                      onChange={(event) => setSearch(event.target.value)}
                      aria-label="Tìm kiếm yêu cầu"
                    />

                    {search && (
                      <button
                        type="button"
                        onClick={() => setSearch("")}
                        aria-label="Xóa từ khóa"
                      >
                        <FaTimes aria-hidden="true" />
                      </button>
                    )}
                  </div>

                  <div className="vnt-my-quotes-select-wrap">
                    <select
                      value={statusFilter}
                      onChange={(event) => setStatusFilter(event.target.value)}
                      aria-label="Lọc trạng thái"
                    >
                      <option value="ALL">Tất cả trạng thái</option>

                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {getStatusInfo(status).label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* RESULT COUNT */}

              {!loading && !error && requests.length > 0 && (
                <p className="vnt-my-quotes-result-count">
                  Hiển thị <strong>{filteredRequests.length}</strong>
                  {" / "}
                  <strong>{requests.length}</strong>
                  {" yêu cầu"}
                </p>
              )}

              {/* LOADING */}

              {loading && (
                <div className="vnt-my-quotes-loading" role="status">
                  <div className="vnt-my-quotes-spinner" />

                  <strong>Đang tải yêu cầu báo giá...</strong>

                  <p>Hệ thống đang kiểm tra dữ liệu.</p>
                </div>
              )}

              {/* ERROR */}

              {!loading && error && (
                <div className="vnt-my-quotes-error" role="alert">
                  <FaExclamationCircle aria-hidden="true" />

                  <h3>Không thể tải danh sách</h3>

                  <p>{error}</p>

                  <button type="button" onClick={handleRefresh}>
                    Thử lại
                  </button>
                </div>
              )}

              {/* EMPTY */}

              {!loading && !error && filteredRequests.length === 0 && (
                <EmptyState
                  isFiltered={requests.length > 0 && hasActiveFilters}
                  onClearFilters={() => {
                    setSearch("");
                    setStatusFilter("ALL");
                  }}
                />
              )}

              {/* REQUEST CARDS */}

              {!loading && !error && filteredRequests.length > 0 && (
                <div className="vnt-my-quotes-list">
                  {filteredRequests.map((item, index) => (
                    <QuoteRequestCard
                      key={item.request_code || index}
                      item={item}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {/* ==================================
            INFORMATION NOTE
        ================================== */}

        <div className="vnt-my-quotes-note">
          <FaInfoCircle aria-hidden="true" />

          <p>
            <strong>Lưu ý:</strong> Số điện thoại được ghi nhớ trên trình duyệt
            để thuận tiện cho lần tra cứu sau. Bạn có thể thay đổi số điện thoại
            bất cứ lúc nào.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MyTourQuoteRequests;

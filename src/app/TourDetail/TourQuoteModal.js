import React, { useEffect, useRef, useState } from "react";
import {
  FaTimes,
  FaCheckCircle,
  FaPaperPlane,
  FaSpinner,
  FaInfoCircle,
} from "react-icons/fa";

import API from "../../config/APINoToken";

/* ==========================================
   VIET NAM TOUR
   TOUR QUOTE REQUEST MODAL
========================================== */

function createSubmissionKey() {
  if (
    typeof window !== "undefined" &&
    window.crypto &&
    typeof window.crypto.randomUUID === "function"
  ) {
    return window.crypto.randomUUID();
  }

  if (
    typeof window !== "undefined" &&
    window.crypto &&
    typeof window.crypto.getRandomValues === "function"
  ) {
    var bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);

    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;

    var hex = Array.from(bytes)
      .map(function(byte) {
        return byte.toString(16).padStart(2, "0");
      })
      .join("");

    return (
      hex.slice(0, 8) +
      "-" +
      hex.slice(8, 12) +
      "-" +
      hex.slice(12, 16) +
      "-" +
      hex.slice(16, 20) +
      "-" +
      hex.slice(20)
    );
  }

  return null;
}

function getLocalToday() {
  var now = new Date();

  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, "0");
  var day = String(now.getDate()).padStart(2, "0");

  return year + "-" + month + "-" + day;
}

function initialForm() {
  return {
    customer_type: "B2B",
    customer_name: "",
    customer_phone: "",
    company_name: "",
    guest_count: "",
    departure_date: "",
    note: "",
  };
}

function normalizePhone(value) {
  return String(value || "")
    .trim()
    .replace(/[\s().-]/g, "");
}

function getErrorMessage(error) {
  var response = error && error.response;

  if (response && response.data && response.data.message) {
    return response.data.message;
  }

  if (error && error.message === "Network Error") {
    return (
      "Không thể kết nối đến máy chủ. " + "Vui lòng kiểm tra mạng và thử lại."
    );
  }

  return "Chưa thể gửi yêu cầu báo giá. " + "Vui lòng thử lại.";
}

/* ==========================================
   MAIN MODAL
========================================== */

function TourQuoteModal(props) {
  var isOpen = Boolean(props.isOpen);
  var onClose = props.onClose;
  var tour = props.tour || {};

  var formState = useState(initialForm);
  var form = formState[0];
  var setForm = formState[1];

  var loadingState = useState(false);
  var submitting = loadingState[0];
  var setSubmitting = loadingState[1];

  var errorState = useState("");
  var error = errorState[0];
  var setError = errorState[1];

  var successState = useState(null);
  var successData = successState[0];
  var setSuccessData = successState[1];

  var submissionKeyRef = useRef(null);
  var nameInputRef = useRef(null);
  var closeButtonRef = useRef(null);
  var previousFocusRef = useRef(null);
  var dialogRef = useRef(null);

  var submittingRef = useRef(false);
  submittingRef.current = submitting;

  var tourId = tour.tourid;
  var tourName = tour.tourname || "Chương trình du lịch";

  /* ========================================
     OPEN / CLOSE BEHAVIOR
  ======================================== */

  useEffect(
    function() {
      if (!isOpen) {
        return;
      }

      submissionKeyRef.current = createSubmissionKey();

      setForm(initialForm());
      setError("");
      setSuccessData(null);
      setSubmitting(false);

      previousFocusRef.current = document.activeElement;

      var oldOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      function handleKeyDown(event) {
        if (event.key === "Escape") {
          event.preventDefault();

          if (!submittingRef.current && onClose) {
            onClose();
          }

          return;
        }

        if (event.key !== "Tab" || !dialogRef.current) {
          return;
        }

        var focusable = Array.from(
          dialogRef.current.querySelectorAll(
            "button:not([disabled]), " +
              "input:not([disabled]), " +
              "textarea:not([disabled]), " +
              "select:not([disabled]), " +
              "a[href]",
          ),
        ).filter(function(element) {
          return element.getClientRects().length > 0;
        });

        if (!focusable.length) {
          return;
        }

        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }

      document.addEventListener("keydown", handleKeyDown);

      if (nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }

      return function() {
        document.body.style.overflow = oldOverflow;
        document.removeEventListener("keydown", handleKeyDown);

        if (
          previousFocusRef.current &&
          typeof previousFocusRef.current.focus === "function"
        ) {
          previousFocusRef.current.focus();
        }
      };
    },
    [isOpen, onClose],
  );

  /* ========================================
     FORM FIELD UPDATE
  ======================================== */

  function updateField(event) {
    var name = event.target.name;
    var value = event.target.value;

    setForm(function(previous) {
      return Object.assign({}, previous, {
        [name]: value,
      });
    });

    if (error) {
      setError("");
    }
  }

  /* ========================================
     FORM SUBMIT
  ======================================== */

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setError("");

    var customerName = String(form.customer_name || "").trim();

    var customerPhone = normalizePhone(form.customer_phone);

    if (customerName.length < 2) {
      setError("Vui lòng nhập họ tên từ 2 ký tự.");
      return;
    }

    if (
      !/^0[0-9]{9}$/.test(customerPhone) &&
      !/^\+84[0-9]{9}$/.test(customerPhone)
    ) {
      setError("Vui lòng nhập số điện thoại hợp lệ, ví dụ 0901234567.");
      return;
    }

    if (!tourId) {
      setError(
        "Không xác định được chương trình tour. " + "Vui lòng tải lại trang.",
      );
      return;
    }

    if (
      form.guest_count !== "" &&
      (!Number.isSafeInteger(Number(form.guest_count)) ||
        Number(form.guest_count) < 1)
    ) {
      setError("Số lượng khách phải lớn hơn 0.");
      return;
    }

    if (form.departure_date && form.departure_date < getLocalToday()) {
      setError("Ngày khởi hành không được ở trong quá khứ.");
      return;
    }

    if (form.note.length > 5000) {
      setError("Yêu cầu thêm tối đa 5000 ký tự.");
      return;
    }

    var payload = {
      tour_id: tourId,
      customer_type: form.customer_type,
      customer_name: customerName,
      customer_phone: customerPhone,

      company_name:
        form.customer_type === "B2B" ? form.company_name.trim() || null : null,

      guest_count: form.guest_count === "" ? null : Number(form.guest_count),

      departure_date: form.departure_date || null,

      note: form.note.trim() || null,
    };

    if (submissionKeyRef.current) {
      payload.submission_key = submissionKeyRef.current;
    }

    setSubmitting(true);

    try {
      /* APINoToken baseURL đã có /api */

      var response = await API.post("/tour-quote-requests", payload);

      var result = response && response.data;

      if (
        !result ||
        result.success !== true ||
        !result.data ||
        !result.data.request_code
      ) {
        setError(
          "Máy chủ chưa xác nhận yêu cầu thành công. " +
            "Vui lòng kiểm tra và thử lại.",
        );
        return;
      }

      setSuccessData(result.data);
    } catch (requestError) {
      console.error("Tour quote request error:", requestError);

      setError(getErrorMessage(requestError));
    } finally {
      setSubmitting(false);
    }
  }

  /* ========================================
     CLOSE
  ======================================== */

  function handleClose() {
    if (submitting) {
      return;
    }

    if (onClose) {
      onClose();
    }
  }

  if (!isOpen) {
    return null;
  }

  /* ========================================
     RENDER
  ======================================== */

  return (
    <div
      className="vnt-quote-overlay"
      onMouseDown={function(event) {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="vnt-quote-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vnt-quote-modal-title"
      >
        {/* HEADER */}

        <div className="vnt-quote-modal-header">
          <div className="vnt-quote-modal-header-info">
            <span className="vnt-quote-eyebrow">VIỆT NAM TOUR</span>

            <h2 id="vnt-quote-modal-title">
              {successData
                ? "Gửi yêu cầu thành công"
                : "Yêu cầu tư vấn & báo giá"}
            </h2>

            {!successData && (
              <p>
                Để lại thông tin để Việt Nam Tour tư vấn chương trình phù hợp.
              </p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="vnt-quote-close"
            onClick={handleClose}
            disabled={submitting}
            aria-label="Đóng cửa sổ"
          >
            <FaTimes />
          </button>
        </div>

        {/* SUCCESS SCREEN */}

        {successData ? (
          <div className="vnt-quote-success">
            <div className="vnt-quote-success-icon">
              <FaCheckCircle />
            </div>

            <h3>Việt Nam Tour đã tiếp nhận yêu cầu!</h3>

            <p>
              Cảm ơn quý khách đã quan tâm đến chương trình du lịch của Việt Nam
              Tour.
            </p>

            <div className="vnt-quote-result">
              <span>MÃ YÊU CẦU BÁO GIÁ</span>

              <strong>{successData.request_code}</strong>
            </div>

            <p className="vnt-quote-success-note">
              Quý khách vui lòng lưu lại mã yêu cầu để thuận tiện khi liên hệ tư
              vấn.
            </p>

            <button
              type="button"
              className="vnt-quote-submit"
              onClick={handleClose}
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <form className="vnt-quote-form" onSubmit={handleSubmit} noValidate>
            {/* TOUR INFORMATION */}

            <div className="vnt-quote-tour-info">
              <span>CHƯƠNG TRÌNH QUAN TÂM</span>

              <strong>{tourName}</strong>
            </div>

            {/* CUSTOMER TYPE */}

            <div className="vnt-quote-field">
              <label>Đối tượng khách hàng</label>

              <div className="vnt-quote-type-options">
                <label className="vnt-quote-type-option">
                  <input
                    type="radio"
                    name="customer_type"
                    value="B2B"
                    checked={form.customer_type === "B2B"}
                    onChange={updateField}
                  />

                  <span>Doanh nghiệp / Tổ chức</span>
                </label>

                <label className="vnt-quote-type-option">
                  <input
                    type="radio"
                    name="customer_type"
                    value="B2C"
                    checked={form.customer_type === "B2C"}
                    onChange={updateField}
                  />

                  <span>Cá nhân / Gia đình</span>
                </label>
              </div>
            </div>

            {/* CUSTOMER NAME */}

            {/* ==========================================
    CUSTOMER NAME + PHONE - 2 COLUMNS
========================================== */}

            <div className="vnt-quote-form-row vnt-quote-contact-row">
              {/* HỌ VÀ TÊN */}

              <div className="vnt-quote-field">
                <label htmlFor="vnt-quote-name">
                  Họ và tên
                  <span className="vnt-quote-required">*</span>
                </label>

                <input
                  ref={nameInputRef}
                  id="vnt-quote-name"
                  name="customer_name"
                  type="text"
                  value={form.customer_name}
                  onChange={updateField}
                  placeholder="Nhập họ và tên"
                  autoComplete="name"
                  maxLength={150}
                  required
                />
              </div>

              {/* SỐ ĐIỆN THOẠI */}

              <div className="vnt-quote-field">
                <label htmlFor="vnt-quote-phone">
                  Số điện thoại
                  <span className="vnt-quote-required">*</span>
                </label>

                <input
                  id="vnt-quote-phone"
                  name="customer_phone"
                  type="tel"
                  value={form.customer_phone}
                  onChange={updateField}
                  placeholder="09xxxxxxxx"
                  autoComplete="tel"
                  maxLength={20}
                  required
                />
              </div>
            </div>

            {/* PHONE */}

            {/* COMPANY */}

            {form.customer_type === "B2B" && (
              <div className="vnt-quote-field">
                <label htmlFor="vnt-quote-company">Tên công ty / Đơn vị</label>

                <input
                  id="vnt-quote-company"
                  name="company_name"
                  type="text"
                  value={form.company_name}
                  onChange={updateField}
                  placeholder="Không bắt buộc"
                  maxLength={255}
                />
              </div>
            )}

            {/* GUESTS + DATE */}

            <div className="vnt-quote-form-row">
              <div className="vnt-quote-field">
                <label htmlFor="vnt-quote-guests">Số lượng khách dự kiến</label>

                <input
                  id="vnt-quote-guests"
                  name="guest_count"
                  type="number"
                  min="1"
                  step="1"
                  value={form.guest_count}
                  onChange={updateField}
                  placeholder="Ví dụ: 30"
                />
              </div>

              <div className="vnt-quote-field">
                <label htmlFor="vnt-quote-date">Ngày khởi hành</label>

                <input
                  id="vnt-quote-date"
                  name="departure_date"
                  type="date"
                  min={getLocalToday()}
                  value={form.departure_date}
                  onChange={updateField}
                />
              </div>
            </div>

            {/* NOTE */}

            <div className="vnt-quote-field">
              <label htmlFor="vnt-quote-note">Yêu cầu thêm</label>

              <textarea
                id="vnt-quote-note"
                name="note"
                rows={3}
                maxLength={5000}
                value={form.note}
                onChange={updateField}
                placeholder={
                  "Ví dụ: Cần team building, gala dinner, " +
                  "khách sạn 4 sao..."
                }
              />
            </div>

            {/* ERROR */}

            {error && (
              <div className="vnt-quote-error" role="alert">
                <FaInfoCircle />
                <span>{error}</span>
              </div>
            )}

            {/* FOOTER */}

            <div className="vnt-quote-form-footer">
              <p>
                Thông tin được sử dụng để tiếp nhận và tư vấn theo yêu cầu của
                quý khách.
              </p>

              <button
                className="vnt-quote-submit"
                type="submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <FaSpinner className="vnt-quote-spin" />
                    Đang gửi yêu cầu...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    GỬI YÊU CẦU BÁO GIÁ
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default TourQuoteModal;

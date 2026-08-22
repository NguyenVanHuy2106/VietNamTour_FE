import React, { useEffect, useMemo, useState } from "react";
import API from "../../config/APINoToken";
import "./index.css";

export default function Customer() {
  const [dataCustomer, setDataCustomer] = useState([]);

  const getData = async () => {
    try {
      const response = await API.get("customer/get");

      setDataCustomer(response.data.data || []);
    } catch (error) {
      console.error("Lỗi lấy danh sách đối tác:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  /*
   * Chỉ hiển thị một số đối tác tiêu biểu.
   * Có thể đổi 18 thành 15, 20, 24... tùy ý.
   */
  const displayCustomers = useMemo(() => {
    return dataCustomer.slice(0, 25);
  }, [dataCustomer]);

  return (
    <section className="partner-showcase-section">
      <div className="partner-showcase-container">
        {/* =========================================
            LEFT - THÔNG TIN
        ========================================= */}
        <div className="partner-showcase-intro">
          <span className="partner-showcase-eyebrow">ĐỐI TÁC TIÊU BIỂU</span>

          <h2 className="partner-showcase-title">
            Đồng hành cùng những thương hiệu hàng đầu
          </h2>

          <p className="partner-showcase-desc">
            Một số đối tác tiêu biểu đã tin tưởng đồng hành cùng Việt Nam Tour.
            Bên cạnh đó, chúng tôi còn vinh dự phục vụ nhiều doanh nghiệp, bệnh
            viện, ngân hàng và tổ chức trên toàn quốc.
          </p>

          {/* THỐNG KÊ */}
          <div className="partner-showcase-stats">
            <div className="partner-stat">
              <strong>1,000+</strong>

              <span>
                Khách hàng
                <br />
                tin tưởng
              </span>
            </div>

            <div className="partner-stat-divider" />

            <div className="partner-stat">
              <strong>100+</strong>

              <span>
                Đối tác
                <br />
                doanh nghiệp
              </span>
            </div>
          </div>

          {/* GHI CHÚ */}
          <div className="partner-more-note">
            Và nhiều đối tác khác đã đồng hành cùng Việt Nam Tour
          </div>
        </div>

        {/* =========================================
            RIGHT - LOGO ĐỐI TÁC
        ========================================= */}
        <div className="partner-logo-area">
          <div className="partner-logo-grid">
            {displayCustomers.map((item, index) => (
              <div
                className="partner-logo-card"
                key={`${item.customerid ||
                  item.customer_id ||
                  "customer"}-${index}`}
                title={item.customername}
              >
                <img
                  src={item.customerlogo}
                  alt={item.customername || "Đối tác Việt Nam Tour"}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

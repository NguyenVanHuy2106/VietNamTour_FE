import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import "./index.css";

export default function Customer() {
  const [dataCustomer, setDataCustomer] = useState([]);

  const getData = async () => {
    try {
      const response = await API.get("customer/get");
      // Nhân đôi mảng để tạo hiệu ứng chạy vô tận mượt mà
      setDataCustomer([...response.data.data, ...response.data.data]);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="premium-customer-section">
      <div className="container-fluid py-5">
        <div className="text-center mb-5">
          <span className="customer-badge">ĐỐI TÁC TIN CẬY</span>
          <h2 className="customer-main-title">ĐỒNG HÀNH CÙNG THÀNH CÔNG</h2>
          <div className="title-line"></div>
        </div>

        {/* TRACK 1: CHẠY SANG TRÁI */}
        <div className="logo-slider">
          <div className="logo-track">
            {dataCustomer.map((item, index) => (
              <div className="logo-card" key={`track1-${index}`}>
                <img
                  src={item.customerlogo}
                  alt={item.customername}
                  title={item.customername}
                />
              </div>
            ))}
          </div>
        </div>

        {/* TRACK 2: CHẠY SANG PHẢI (Tạo sự chuyển động ngược chiều phá cách) */}
        <div className="logo-slider mt-4">
          <div className="logo-track track-reverse">
            {dataCustomer.map((item, index) => (
              <div className="logo-card" key={`track2-${index}`}>
                <img
                  src={item.customerlogo}
                  alt={item.customername}
                  title={item.customername}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

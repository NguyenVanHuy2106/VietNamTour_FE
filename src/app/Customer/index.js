import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import "./index.css";
export default function Customer() {
  const [dataCustomer, setDataCustomer] = useState([]);
  let [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const response = await API.get("customer/get");
      setDataCustomer(response.data.data);
    } catch (error) {
      console.error(
        "Lỗi khi lấy danh sách khách hàng",
        error.response || error
      );
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      className="bg-gray-100 p-4 d-flex justify-content-center flex-column align-items-center"
      style={{
        backgroundColor: "#eeeeee",
        paddingTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1250px",
        }}
      >
        <div className="CustomerTitle">KHÁCH HÀNG CỦA CHÚNG TÔI</div>
        <div
          className="d-flex flex-wrap justify-content-center gap-2"
          style={{}}
        >
          {dataCustomer.map((item) => (
            <img
              key={item.customerid}
              src={item.customerlogo}
              alt={item.customername}
              className="object-cover"
              style={{
                height: 80,
                width: 150,
                margin: 1,
                backgroundColor: "#ffffff",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

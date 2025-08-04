import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import "./index.css";

const Collections = ({ collectionsData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataCollection, setDataCollection] = useState([]);
  let [loading, setLoading] = useState(false);

  const openImage = (url) => {
    setSelectedImage(url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  const getData = async () => {
    try {
      const response = await API.get("collection/get");
      setDataCollection(response.data.data);
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
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: "100%",
          maxWidth: "1210px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        // className="d-flex justify-content-center flex-column align-items-center"
      >
        <div className="collections-wrapper d-flex justify-content-center">
          <div className="CollectionTitle">BỘ SƯU TẬP</div>
        </div>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{
            marginBottom: "40px",
          }}
        >
          {dataCollection.map((item) => (
            <div
              key={item.collectionid}
              className="card-parent"
              style={{
                height: 140,
                width: 227,
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
              onClick={() => openImage(item.collectionurl)}
            >
              <img
                key={item.collectionid}
                src={item.collectionurl}
                alt={`Customer ${item.id}`}
                className="card-child"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="image-modal"
          onClick={closeImage}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <img
            src={selectedImage}
            alt="Large view"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "8px",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Collections;

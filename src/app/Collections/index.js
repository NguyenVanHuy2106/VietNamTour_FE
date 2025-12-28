import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { Maximize2, X } from "lucide-react";
import "./index.css";

const Collections = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataCollection, setDataCollection] = useState([]);

  const openImage = (url) => setSelectedImage(url);
  const closeImage = () => setSelectedImage(null);

  const getData = async () => {
    try {
      const response = await API.get("collection/get");
      setDataCollection(response.data.data);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="coll-v4-section">
      <div className="coll-v4-container">
        {/* Tiêu đề tối giản, sang trọng */}
        <div className="coll-v4-header">
          <h2 className="coll-v4-title">BỘ SƯU TẬP HÀNH TRÌNH</h2>
          <div className="coll-v4-line"></div>
          <p className="coll-v4-subtitle">
            Những khoảnh khắc chân thực từ khách hàng của chúng tôi
          </p>
        </div>

        {/* Layout Masonry Columns */}
        <div className="coll-v4-masonry">
          {dataCollection.map((item) => (
            <div
              key={item.collectionid}
              className="coll-v4-item"
              onClick={() => openImage(item.collectionurl)}
            >
              <img src={item.collectionurl} alt="Gallery" />
              <div className="coll-v4-overlay">
                <Maximize2 size={28} color="white" />
                <span>Phóng to</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal phóng to */}
      {selectedImage && (
        <div className="coll-v4-modal" onClick={closeImage}>
          <div className="coll-v4-modal-close">
            <X size={30} />
          </div>
          <img
            src={selectedImage}
            alt="Large View"
            className="coll-v4-zoom-img"
          />
        </div>
      )}
    </div>
  );
};

export default Collections;

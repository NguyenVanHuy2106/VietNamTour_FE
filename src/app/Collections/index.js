import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { Maximize2, X, Images } from "lucide-react";
import "./index.css";

const Collections = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataCollection, setDataCollection] = useState([]);

  const openImage = (url) => {
    setSelectedImage(url);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const getData = async () => {
    try {
      const response = await API.get("collection/get");
      setDataCollection(response.data.data || []);
    } catch (error) {
      console.error("Lỗi lấy bộ sưu tập:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeImage();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [selectedImage]);

  const getItemClass = (index) => {
    const position = index % 10;

    if (position === 0 || position === 7) {
      return "coll-v4-item coll-v4-item-large";
    }

    if (position === 3 || position === 8) {
      return "coll-v4-item coll-v4-item-wide";
    }

    return "coll-v4-item coll-v4-item-normal";
  };

  return (
    <section className="coll-v4-section">
      <div className="coll-v4-container">
        {/* HEADER */}
        <div className="coll-v4-header">
          <div className="coll-v4-eyebrow">
            <Images size={14} />
            <span>DẤU ẤN NHỮNG HÀNH TRÌNH</span>
          </div>

          <h2 className="coll-v4-title">Khoảnh khắc cùng Việt Nam Tour</h2>

          <p className="coll-v4-subtitle">
            Những khoảnh khắc chân thực được lưu lại từ các hành trình, sự kiện
            và chương trình mà chúng tôi đã đồng hành cùng khách hàng.
          </p>
        </div>

        {/* GALLERY */}
        <div className="coll-v4-gallery">
          {dataCollection.map((item, index) => (
            <article
              key={item.collectionid || index}
              className={getItemClass(index)}
              onClick={() => openImage(item.collectionurl)}
            >
              <img
                src={item.collectionurl}
                alt={`Khoảnh khắc Việt Nam Tour ${index + 1}`}
                loading="lazy"
              />

              <div className="coll-v4-overlay">
                <div className="coll-v4-view">
                  <Maximize2 size={16} />
                  <span>Xem ảnh</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="coll-v4-modal"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="coll-v4-modal-close"
            onClick={closeImage}
            aria-label="Đóng ảnh"
          >
            <X size={22} />
          </button>

          <div
            className="coll-v4-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Khoảnh khắc Việt Nam Tour"
              className="coll-v4-zoom-img"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Collections;

import React, { useState, useEffect } from "react";
import "./index.css";
import { useLocation } from "react-router-dom";
import API from "../../config/APINoToken";
import {
  FaExpandAlt,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ImageList = () => {
  const [previewImg, setPreviewImg] = useState(null);
  const location = useLocation();
  const album = (location.state && location.state.data) || {
    id: null,
    title: "Thư viện",
  };

  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  const getDataImage = async () => {
    if (!album.id) return;
    try {
      setLoading(true);
      const response = await API.post("/image/getByCat", {
        category_id: album.id,
      });
      if (response && response.data && response.data.data) {
        setImageList(response.data.data);
      }
    } catch (error) {
      console.error("Lỗi lấy ảnh:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataImage();
    window.scrollTo(0, 0);
  }, [album.id]);

  // Logic phân trang
  const totalPages = Math.ceil(imageList.length / imagesPerPage);
  const currentImages = imageList.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage,
  );

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  };

  // --- HÀM TẠO DÃY SỐ TRANG CÓ DẤU ... ---
  const getPaginationItems = () => {
    const pages = [];
    const delta = 2; // Số trang hiển thị xung quanh trang hiện tại

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Luôn hiện trang đầu
        i === totalPages || // Luôn hiện trang cuối
        (i >= currentPage - delta && i <= currentPage + delta) // Hiện xung quanh trang hiện tại
      ) {
        pages.push(i);
      } else if (
        i === currentPage - delta - 1 ||
        i === currentPage + delta + 1
      ) {
        pages.push("...");
      }
    }
    // Loại bỏ các dấu ... bị lặp
    return pages.filter((item, index) => pages.indexOf(item) === index);
  };

  return (
    <div className="travel-gallery-page">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">
            {album.title || "Thư Viện Hình Ảnh"}
          </h2>

          <div className="title-underline"></div>

          <p className="section-subtitle">
            Hành trình của những nụ cười và sự kết nối qua từng ống kính
          </p>
        </div>

        {loading ? (
          <div className="gallery-loader">Đang tải...</div>
        ) : (
          <>
            <div className="gallery-grid">
              {currentImages.map((img, index) => (
                <div
                  className="gallery-item"
                  key={index}
                  onClick={() => setPreviewImg(img.img_url)}
                >
                  <img src={img.img_url} alt="Gallery" loading="lazy" />
                  <div className="gallery-overlay">
                    <FaExpandAlt />
                  </div>
                </div>
              ))}
            </div>

            {/* PHÂN TRANG GỌN GÀNG */}
            {totalPages > 1 && (
              <div className="pagination-container">
                <button
                  className="page-btn"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft />
                </button>

                {getPaginationItems().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === "number" && paginate(page)}
                    className={`page-number ${
                      currentPage === page ? "active" : ""
                    } ${typeof page !== "number" ? "dots" : ""}`}
                    disabled={typeof page !== "number"}
                  >
                    {page}
                  </button>
                ))}

                <button
                  className="page-btn"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox giữ nguyên */}
      {previewImg && (
        <div className="lightbox-overlay" onClick={() => setPreviewImg(null)}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={previewImg} alt="Preview" />
            <button
              className="close-lightbox"
              onClick={() => setPreviewImg(null)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageList;

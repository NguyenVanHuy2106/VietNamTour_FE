import React, { useState, useEffect, useMemo } from "react";
import "./index.css";
import API from "../../config/APINoToken";
import { useNavigate } from "react-router-dom";

const ImageGallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null); // Lưu object album đang chọn
  const [previewImg, setPreviewImg] = useState(null); // Lưu url ảnh để phóng to
  const [ALBUM_CATEGORY, setALBUM_CATEGORY] = useState([]);
  const navigate = useNavigate();

  const getDataCat = async () => {
    try {
      const response = await API.get("/imgCat/get");
      if (response && response.data && response.data.data) {
        setALBUM_CATEGORY(response.data.data); // Chỉ lấy 1 bài tiêu điểm
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Logic lọc hình ảnh: Chỉ lấy những ảnh có albumId trùng với ID của album đang chọn

  useEffect(() => {
    getDataCat();
  }, []);

  const gotoImageList = (album) => {
    navigate("/hinh-anh/danh-sach-hinh-anh", { state: { data: album } });
  };

  return (
    <div className="travel-gallery">
      <div className="container">
        {/* TIÊU ĐỀ TRANG */}
        <h2 className="section-title">Thư Viện Hình Ảnh</h2>
        <p className="section-subtitle">
          Hành trình của những nụ cười và sự kết nối
        </p>

        <div className="album-grid">
          {ALBUM_CATEGORY.map((album) => (
            <div
              key={album.id}
              className="album-card"
              onClick={() => gotoImageList(album)}
            >
              <div className="album-image">
                <img src={album.thumnail_url} alt={album.name} />
                {/* Đếm số lượng ảnh dựa trên mảng ALL_PHOTOS */}
                <div className="photo-count">{album.total_images + " Ảnh"}</div>
              </div>
              <div className="album-info">
                <h3>{album.name}</h3>
                <p>{album.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

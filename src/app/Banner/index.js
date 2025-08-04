import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import Slider from "react-slick";

const Banner = ({ collectionsData }) => {
  const [dataBanner, setDataBanner] = useState([]);
  let [loading, setLoading] = useState(false);
  const settings = {
    dots: true, // Hiện chấm tròn dưới slide
    infinite: true, // Lặp vô hạn
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Tự động lướt
    autoplaySpeed: 3000, // 3 giây lướt 1 lần
    swipe: true, // Vuốt được trên mobile
    draggable: true, // Kéo chuột được trên desktop
  };
  const getData = async () => {
    try {
      const response = await API.get("banner/get");
      setDataBanner(response.data.data);
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
    <div>
      <Slider {...settings}>
        {dataBanner.map((image) => (
          <div key={image.bannerid}>
            <img
              src={image.bannerurl}
              alt={image.bannername}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "550px",
                // minHeight: "200px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Banner;

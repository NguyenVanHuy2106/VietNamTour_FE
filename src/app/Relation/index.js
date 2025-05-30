import React from "react";
import "./index.css";
import { Carousel } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Relation() {
  const settings = {
    dots: true, // có chấm tròn ở dưới
    infinite: true, // lặp vô hạn
    autoplay: true, // tự động chạy
    autoplaySpeed: 3000, // mỗi 3 giây
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#eeeeee",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          marginTop: "20px",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "40px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <div className="d-flex flex-column flex-lg-row">
          <div
            style={{
              marginRight: "10px ",
            }}
          >
            <div className="RelationTitle">KHÁCH ĐOÀN</div>
            <div className="SliderContainer">
              <Slider {...settings}>
                {CustomerList.map((image) => (
                  <div key={image.id} className="d-flex">
                    <img
                      src={image.imageUrl}
                      alt={`Slide ${image.id}`}
                      className="slide-image"
                    />
                    <div>
                      <div className="RelationTitleTour">{image.title}</div>
                      <div className="RelationContentTour">
                        {image.description}
                      </div>
                      <div
                        style={{
                          textAlign: "right",
                          paddingRight: "10px",
                          paddingTop: "10px",
                          color: "#0000FF",
                          fontStyle: "italic",
                        }}
                      >
                        Xem thêm
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div
            style={{
              marginLeft: "10px",
            }}
          >
            <div className="RelationTitle">CẨM NANG DU LỊCH</div>
            <div className="d-flex flex-column" style={{ marginTop: "15px" }}>
              {BlogList.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center BlogItem"
                  onClick={() => {}}
                >
                  <img
                    key={item.id}
                    src={item.imageUrl}
                    alt={`Customer ${item.id}`}
                    className="object-cover"
                    style={{
                      height: 100,
                      width: 130,
                      backgroundColor: "#ffffff",
                      marginTop: 8,
                    }}
                  />
                  <div className="RelationBlogItem">{item.title}</div>
                </div>
              ))}
              <div
                style={{
                  color: "#0000ff",
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    border: "1px solid #0000ff",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Xem thêm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomerList = [
  {
    id: 1,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F1.png?alt=media&token=6aebb33f-45ae-4fb0-b043-572911c635c2",
    title:
      "MWG - Hành trình khám phá Vũng Tàu thành phố biển Vũng Tàu thành phố biển đẹp nè ",
    description:
      "Mango Beach là tổ hợp giải trí ven biển nổi bật tại Phan Thiết, kết hợp giữa không gian thư giãn và các hoạt động vui chơi đa dạng. Với bãi biển cát trắng mịn, làn nước trong xanh và nhiều góc check-in rực rỡ, nơi đây thu hút du khách yêu thích chụp ảnh. Điểm nhấn bao gồm khu vườn thú nhỏ với các loài động vật như lạc đà, thỏ, rùa, cùng quầy bar và nhà hàng ven biển. Vào cuối tuần, Mango Beach tổ chức các buổi biểu diễn DJ sôi động, tạo nên không khí náo nhiệt và hấp dẫn.",
  },
  {
    id: 2,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F10.png?alt=media&token=eedce5e3-1cae-4e81-b47d-a83c45f0eede",
    title: "MWG - Hành trình khám phá Vũng Tàu thành phố biển ",
    description:
      "Mango Beach là tổ hợp giải trí ven biển nổi bật tại Phan Thiết, kết hợp giữa không gian thư giãn và các hoạt động vui chơi đa dạng. Với bãi biển cát trắng mịn, làn nước trong xanh và nhiều góc check-in rực rỡ, nơi đây thu hút du khách yêu thích chụp ảnh. Điểm nhấn bao gồm khu vườn thú nhỏ với các loài động vật như lạc đà, thỏ, rùa, cùng quầy bar và nhà hàng ven biển. Vào cuối tuần, Mango Beach tổ chức các buổi biểu diễn DJ sôi động, tạo nên không khí náo nhiệt và hấp dẫn.",
  },
  {
    id: 3,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/image%2F11.png?alt=media&token=fee5a9d9-1f4b-4a9a-9f2b-63c06d174eb6",
    title: "MWG - Hành trình khám phá Vũng Tàu thành phố biển ",
    description:
      "Mango Beach là tổ hợp giải trí ven biển nổi bật tại Phan Thiết, kết hợp giữa không gian thư giãn và các hoạt động vui chơi đa dạng. Với bãi biển cát trắng mịn, làn nước trong xanh và nhiều góc check-in rực rỡ, nơi đây thu hút du khách yêu thích chụp ảnh. Điểm nhấn bao gồm khu vườn thú nhỏ với các loài động vật như lạc đà, thỏ, rùa, cùng quầy bar và nhà hàng ven biển. Vào cuối tuần, Mango Beach tổ chức các buổi biểu diễn DJ sôi động, tạo nên không khí náo nhiệt và hấp dẫn.",
  },
];

const BlogList = [
  {
    id: 1,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FCBBANK.png?alt=media&token=3a39bb0b-11fe-458f-a0f2-6396ff4b3f6d",
    title: "MWG - Hành trình khám phá Vũng Tàu thành phố biển MWG  ",
  },
  {
    id: 2,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FCHICUCTHUE.png?alt=media&token=7220de94-1f1a-47af-8560-c6d9a44abe6a",
    title:
      "MWG - Hành trình khám phá Vũng Tàu thành phố biển MWG - Hành trình khám phá Vũng",
  },
  {
    id: 3,
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/core-pilates-e0144.firebasestorage.app/o/customer%2FDAIHOCMO.png?alt=media&token=b4f7d6a9-37fd-479b-a273-b63b7f88746f",
    title:
      "MWG - Hành trình khám phá Vũng Tàu thành phố biển MWG - Hành trình khám ",
  },
];

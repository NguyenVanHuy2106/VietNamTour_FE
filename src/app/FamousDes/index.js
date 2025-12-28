import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const FamousDes = () => {
  const navigate = useNavigate();

  return (
    <section className="micro-bento-section">
      <div className="micro-container">
        <div className="micro-header">
          <h2 className="micro-title">ĐIỂM ĐẾN NỔI TIẾNG</h2>
          <div className="micro-line"></div>
        </div>

        <div className="micro-grid-wrapper">
          {FamousData.map((item, index) => {
            // Tạo một chu kỳ lặp lại cho các ô lớn nhỏ
            let sizeClass = "s-small";
            if (index === 0) sizeClass = "s-hero";
            // Ô đầu tiên siêu to
            else if (index === 5 || index === 12 || index === 25)
              sizeClass = "s-medium"; // Một vài ô vừa

            return (
              <div
                className={`micro-item ${sizeClass}`}
                key={item.id}
                onClick={() =>
                  navigate("/danh-sach-tour", {
                    state: { destinationid: item.value },
                  })
                }
              >
                <div className="micro-card">
                  <img src={item.url} alt={item.city} className="micro-img" />
                  <div className="micro-overlay">
                    <span className="micro-city-name">{item.city}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// export default FamousDes;

// ... FamousData giữ nguyên như bạn đã cung cấp ...

const FamousData = [
  {
    id: 1,
    type: "southeast",
    value: 1,
    city: "Tp Hồ Chí Minh",
    url:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSw8aKdHx4e4q9zweMCcRHJF3sEy2G2nGtWMfeDmPBvVsnVwI7OL9IolJiARGs3iCEUUkilb-Rq1_lL2nKlajiqA_e-ddSpDixG9IgBdA",
  },
  {
    id: 2,
    type: "southeast",
    value: 3,
    city: "Vũng Tàu",
    url:
      "https://vcdn1-dulich.vnecdn.net/2022/06/17/bienvungtau-1655459711-1655459-7127-3875-1655460215.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=L5M0wBngxjuv0TV6lsu-4Q",
  },
  {
    id: 3,
    type: "southeast",
    value: 39,
    city: "Long Hải",
    url: "https://ik.imagekit.io/tvlk/blog/2022/08/bien-long-hai-1.jpg",
  },
  {
    id: 4,
    type: "southeast",
    value: 37,
    city: "Hồ Tràm",
    url:
      "https://vcdn1-dulich.vnecdn.net/2024/09/19/cau-Ho-Tram-5872-1726743933.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=ga2oqi-VuSpZfMneC_YG6Q",
  },
  {
    id: 5,
    type: "southeast",
    value: 39,
    city: "Phước Hải",
    url:
      "https://ik.imagekit.io/tvlk/blog/2023/03/kinh-nghiem-du-lich-phuoc-hai-4.jpg",
  },

  {
    id: 8,
    type: "southeast",
    value: 2,
    city: "Tây Ninh",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2025/01/22/du-xuan-tay-ninh-2025-top-7-dia-diem-du-xuan-hap-dan-khong-the-bo-lo-1-1136.jpg",
  },

  {
    id: 9,
    type: "central",
    value: 17,
    city: "Tp Nha Trang",
    url:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/30/1028994/60C22F67-553E-4470-9.jpeg",
  },
  {
    id: 10,
    type: "central",
    value: 38,
    city: "Ninh Chữ - Vĩnh Hy",
    url:
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2023/05/26/226-9-30-50.jpg",
  },
  {
    id: 11,
    type: "central",
    value: 23,
    city: "Phan Thiết - Mũi Né",
    url:
      "https://vcdn1-dulich.vnecdn.net/2022/04/03/MuiNeVNExpress3075891542181990-8691-6492-1648974014.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=E-1Y-hG3RxXRjUXHFvKQ6Q",
  },
  {
    id: 12,
    type: "central",
    value: 10,
    city: "Đà Nẵng",
    url:
      "https://toquoc.mediacdn.vn/280518851207290880/2024/1/7/dsdgtdy-1704616308047440689926.jpg",
  },
  {
    id: 13,
    type: "central",
    value: 12,
    city: "Hội An",
    url:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSw8aKdHx4e4q9zweMCcRHJF3sEy2G2nGtWMfeDmPBvVsnVwI7OL9IolJiARGs3iCEUUkilb-Rq1_lL2nKlajiqA_e-ddSpDixG9IgBdA",
  },
  {
    id: 14,
    type: "central",
    value: 11,
    city: "Huế",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/03/du-lich-hoi-an-1-1542.jpg",
  },

  {
    id: 16,
    type: "central",
    value: 15,
    city: "Quy Nhơn",
    url:
      "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1709046159210-3500x1877-FIT_AND_TRIM-275ad0f4554f0bfcad9c458d5ca8f221.jpeg?_src=imagekit&tr=c-at_max,h-500,q-100,w-740",
  },

  {
    id: 19,
    type: "southwest",
    value: 4,
    city: "Cần Thơ",
    url:
      "https://www.homecredit.vn/upload/2_cuoi_nam_la_thoi_diem_ly_tuong_de_kham_pha_ve_dep_cua_can_tho_91915554d9.jpg",
  },
  {
    id: 20,
    type: "southwest",
    value: 6,
    city: "Phú Quốc",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2025/03/28/ai-phat-hien-ra-dao-phu-quoc-1-1357.jpg",
  },
  {
    id: 21,
    type: "southwest",
    value: 8,
    city: "Nam Du",
    url: "https://annhientravels.com.vn/upload/news/nam-du-4365.jpg",
  },
  {
    id: 22,
    type: "southwest",
    value: 9,
    city: "Côn Đảo",
    url: "https://s3.centours.vn/centours/file-gallery/condao-3centours.jpg",
  },
  {
    id: 25,
    type: "centralHigh",
    value: 27,
    city: "Đà Lạt",
    url: "https://www.dalattrip.com/dulich/media/2017/12/thanh-pho-da-lat.jpg",
  },
  {
    id: 34,
    type: "north",
    value: 30,
    city: "Hạ Long",
    url: "https://www.paradisevietnam.com/public/backend/uploads/1.jpeg",
  },
];

export default FamousDes;

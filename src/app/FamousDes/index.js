import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Tabs,
  Tab,
  Toast,
  Spinner,
} from "react-bootstrap";
import { FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa"; // Import icon Home
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Import file CSS

const FamousDes = () => {
  const [key, setKey] = useState("southeast");
  const filteredData = FamousData.filter((item) => item.type === key);
  return (
    <div className="FamousContainer">
      <div className="FamousDesTitle">ĐIỂM ĐẾN NỔI TIẾNG</div>
      <Tabs
        id="tour-add-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 custom-tabs"
      >
        <Tab eventKey="southeast" title="Đông Nam Bộ" />
        <Tab eventKey="central" title="Miền Trung" />
        <Tab eventKey="southwest" title="Tây Nam Bộ" />
        <Tab eventKey="centralHigh" title="Tây Nguyên" />
        <Tab eventKey="north" title="Miền Bắc" />
      </Tabs>

      <div className="FamousGrid">
        {filteredData.map((item) => (
          <div className="FamousItem" key={item.id}>
            <img className="FamousImg" src={item.url} alt={item.city} />
            <div className="FamousName">{item.city}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
const FamousData = [
  {
    id: 1,
    type: "southeast",

    city: "Tp Hồ Chí Minh",
    url:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSw8aKdHx4e4q9zweMCcRHJF3sEy2G2nGtWMfeDmPBvVsnVwI7OL9IolJiARGs3iCEUUkilb-Rq1_lL2nKlajiqA_e-ddSpDixG9IgBdA",
  },
  {
    id: 2,
    type: "southeast",

    city: "Vũng Tàu",
    url:
      "https://vcdn1-dulich.vnecdn.net/2022/06/17/bienvungtau-1655459711-1655459-7127-3875-1655460215.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=L5M0wBngxjuv0TV6lsu-4Q",
  },
  {
    id: 3,
    type: "southeast",

    city: "Long Hải",
    url: "https://ik.imagekit.io/tvlk/blog/2022/08/bien-long-hai-1.jpg",
  },
  {
    id: 4,
    type: "southeast",

    city: "Hồ Tràm",
    url:
      "https://vcdn1-dulich.vnecdn.net/2024/09/19/cau-Ho-Tram-5872-1726743933.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=ga2oqi-VuSpZfMneC_YG6Q",
  },
  {
    id: 5,
    type: "southeast",

    city: "Phước Hải",
    url:
      "https://ik.imagekit.io/tvlk/blog/2023/03/kinh-nghiem-du-lich-phuoc-hai-4.jpg",
  },
  {
    id: 6,
    type: "southeast",

    city: "Côn Đảo",
    url:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/24/1096833/Hon-Bay-Canh---Yeudu.jpg",
  },
  {
    id: 7,
    type: "southeast",

    city: "Bình Châu",
    url:
      "https://tommyresorts.com/wp-content/uploads/2024/03/187540730_352417579559176_1631634959072335771_n_800x533.jpg",
  },
  {
    id: 8,
    type: "southeast",
    city: "Tây Ninh",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2025/01/22/du-xuan-tay-ninh-2025-top-7-dia-diem-du-xuan-hap-dan-khong-the-bo-lo-1-1136.jpg",
  },

  {
    id: 9,
    type: "central",
    city: "Tp Nha Trang",
    url:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/3/30/1028994/60C22F67-553E-4470-9.jpeg",
  },
  {
    id: 10,
    type: "central",
    city: "Ninh Chữ - Vĩnh Hy",
    url:
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2023/05/26/226-9-30-50.jpg",
  },
  {
    id: 11,
    type: "central",
    city: "Phan Thiết - Mũi Né",
    url:
      "https://vcdn1-dulich.vnecdn.net/2022/04/03/MuiNeVNExpress3075891542181990-8691-6492-1648974014.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=E-1Y-hG3RxXRjUXHFvKQ6Q",
  },
  {
    id: 12,
    type: "central",
    city: "Đà Nẵng",
    url:
      "https://toquoc.mediacdn.vn/280518851207290880/2024/1/7/dsdgtdy-1704616308047440689926.jpg",
  },
  {
    id: 13,
    type: "central",
    city: "Hội An",
    url:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSw8aKdHx4e4q9zweMCcRHJF3sEy2G2nGtWMfeDmPBvVsnVwI7OL9IolJiARGs3iCEUUkilb-Rq1_lL2nKlajiqA_e-ddSpDixG9IgBdA",
  },
  {
    id: 14,
    type: "central",
    city: "Huế",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/03/du-lich-hoi-an-1-1542.jpg",
  },
  {
    id: 15,
    type: "central",
    city: "Quảng Bình",
    url:
      "https://sacotravel.com/wp-content/uploads/2023/07/Dong-Phong-Nha2.jpg",
  },
  {
    id: 16,
    type: "central",
    city: "Quy Nhơn",
    url:
      "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1709046159210-3500x1877-FIT_AND_TRIM-275ad0f4554f0bfcad9c458d5ca8f221.jpeg?_src=imagekit&tr=c-at_max,h-500,q-100,w-740",
  },

  {
    id: 17,
    type: "southwest",
    city: "Cà Mau",
    url: "https://halophuot.com/static/uploads/blog/1737958354_muicamau-.jpg",
  },
  {
    id: 18,
    type: "southwest",
    city: "Trà Vinh",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2025/03/09/bien-ba-dong-3-0006.jpg",
  },

  {
    id: 19,
    type: "southwest",
    city: "Cần Thơ",
    url:
      "https://www.homecredit.vn/upload/2_cuoi_nam_la_thoi_diem_ly_tuong_de_kham_pha_ve_dep_cua_can_tho_91915554d9.jpg",
  },
  {
    id: 20,
    type: "southwest",
    city: "Phú Quốc",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2025/03/28/ai-phat-hien-ra-dao-phu-quoc-1-1357.jpg",
  },
  {
    id: 21,
    type: "southwest",
    city: "Nam Du",
    url: "https://annhientravels.com.vn/upload/news/nam-du-4365.jpg",
  },
  {
    id: 22,
    type: "southwest",
    city: "Côn Đảo",
    url: "https://s3.centours.vn/centours/file-gallery/condao-3centours.jpg",
  },
  {
    id: 23,
    type: "southwest",
    city: "Hà Tiên",
    url:
      "https://cafefcdn.com/thumb_w/640/203337114487263232/2021/4/19/photo1618804498712-16188044988341417433829.jpg",
  },
  {
    id: 24,
    type: "southwest",
    city: "Châu Đốc",
    url:
      "https://bizweb.dktcdn.net/100/539/761/files/kham-pha-chua-ba-chau-doc-1.jpg?v=1741142164850",
  },

  {
    id: 25,
    type: "centralHigh",
    city: "Đà Lạt",
    url: "https://www.dalattrip.com/dulich/media/2017/12/thanh-pho-da-lat.jpg",
  },
  {
    id: 26,
    type: "centralHigh",
    city: "Buôn Mê Thuộc",
    url:
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/19/du-lich-buon-ma-thuot-1-1128.jpg",
  },
  {
    id: 27,
    type: "centralHigh",
    city: "Pleiku",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/M%E1%BB%99t_g%C3%B3c_TP._Pleiku.jpg",
  },
  {
    id: 28,
    type: "centralHigh",
    city: "Kon Tum",
    url:
      "https://kontumcityadmin.kontum.gov.vn//Upload/Images/Normal/2022/11/502fbbd9992b100d99683403079ef6a4-154105Hinh-6.jpg",
  },
  {
    id: 29,
    type: "centralHigh",
    city: "Măng Đen",
    url:
      "https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2024/10/19/4627861794303610934120396046174152052052020n-17293271185571377064352-0-145-1150-1985-crop-1729327403042708271912.jpg",
  },
  {
    id: 30,
    type: "centralHigh",
    city: "Tà Đùng",
    url:
      "https://www.homepaylater.vn/static/e3de87ca140d7bc0ecefa3fd99d88a4a/9d72c/1_ve_dep_hoang_so_cua_khu_du_lich_ta_dung_cdc0407440.jpg",
  },
  {
    id: 31,
    type: "centralHigh",
    city: "Đăk Nông",
    url:
      "https://congnghiepmoitruong.vn/stores/news_dataimages/2023/112023/16/09/in_article/gia-nghia-120231116091847.jpg?rt=20231116091849",
  },
  {
    id: 32,
    type: "centralHigh",
    city: "Bảo Lộc",
    url: "https://static.vinwonders.com/production/bao-loc-o-dau-1.jpg",
  },
  {
    id: 33,
    type: "north",
    city: "Hà Nội",
    url:
      "https://toursdulichninhbinh.com/wp-content/uploads/2017/11/lang-chu-tich-ho-chi-minh-54b8786a1d4b7.jpg",
  },
  {
    id: 34,
    type: "north",
    city: "Hạ Long",
    url: "https://www.paradisevietnam.com/public/backend/uploads/1.jpeg",
  },
  {
    id: 35,
    type: "north",
    city: "Hà Giang",
    url:
      "https://carpla.vn/blog/wp-content/uploads/2025/05/du-lich-ha-giang.jpg",
  },
  {
    id: 36,
    type: "north",
    city: "Sa Pa",
    url:
      "https://fansipanlegend.sunworld.vn/wp-content/uploads/2024/03/1-cam-nang-du-lich-sapa.png",
  },
  {
    id: 37,
    type: "north",
    city: "Ninh Bình",
    url:
      "https://thungnham.com/wp-content/uploads/2024/03/khu-du-lich-trang-an-2.webp",
  },
  {
    id: 38,
    type: "north",
    city: "Mộc Châu",
    url: "https://mic.mediacdn.vn/Upload_Moi/2023_02_vn/20232809-duy16.jpg",
  },
  {
    id: 39,
    type: "north",
    city: "Sơn La",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/S%E1%BB%91ng_l%C6%B0ng_kh%E1%BB%A7ng_long_T%C3%A0_X%C3%B9a.jpg",
  },
  {
    id: 40,
    type: "north",
    city: "Điện Biên",
    url:
      "https://ik.imagekit.io/tvlk/blog/2022/03/dia-diem-du-lich-dien-bien-cover.jpeg",
  },
];

export default FamousDes;

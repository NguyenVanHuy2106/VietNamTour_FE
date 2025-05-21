import React, { useEffect } from "react";
//import Header from "./Header";
import TopCities from "./TopCities";
import HeadoutPicks from "./Picks";
import Download from "./Download";
import Media from "./Media";
import Hotline from "../app/Hotline";

import "./Styles/main-home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../app/Header";
import Menu from "../app/Menu";
import Search from "../app/Search";
import NewTour from "../app/NewTour";
import Customer from "../app/Customer";
import Collections from "../app/Collections";
import Footer from "../app/Footer";
const MainHome = ({ history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App" style={{ margin: 0 }}>
      <Header />
      <Menu />
      <Carousel>
        {backgroundImagesData.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={image.url}
              alt={`Slide ${image.id}`}
              style={{
                height: "auto", // Tự động tính chiều cao theo tỷ lệ
                maxHeight: "550px",
                minHeight: "200px",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <Search />
      <NewTour />
      {/* <TopCities /> */}
      <Customer />
      {/* <HeadoutPicks pickedData={pickedData} headline={"Headout Picks"} /> */}
      <Collections />
      <Footer />
      <Hotline />
    </div>
  );
};

export default MainHome;

const backgroundImagesData = [
  {
    id: 1,
    url: "https://images.vietnamluxtour.com/uploads/1745928495710.png",
  },
  {
    id: 2,
    url: "https://images.vietnamluxtour.com/uploads/1745928511810.png",
  },
  {
    id: 3,
    url: "https://images.vietnamluxtour.com/uploads/1745928524944.png",
  },
];

// Header Navigation Data

const HeaderNavData = [
  {
    id: 1,
    name: "Team Building",
  },
  {
    id: 2,
    name: "Gala Dinner",
  },
  {
    id: 3,
    name: "Tổ chức Event",
  },
  {
    id: 4,
    name: "Cho thuê xe",
  },
  {
    id: 5,
    name: "Vé máy báy",
  },
  {
    id: 6,
    name: "Du lịch trải nghiệm học tập",
  },
  {
    id: 7,
    name: "Du lịch Mice",
  },
  {
    id: 8,
    name: "Tổ chức YEP, Tân niên",
  },
  {
    id: 9,
    name: "Hội nghị - Hội thảo",
  },
  {
    id: 10,
    name: "Booking dịch vụ: Khách sạn, nhà hàng",
  },
];

// Currently using this Data for Headout Top Picks

// Collection Data

const collectionsData = [
  {
    id: 1,
    description: "City Tours",
    url:
      "https://cdn-imgix.headout.com/category/349/image/49d50732-f94b-4027-9dfd-58891e960a96-hong-kong-city-tour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 2,
    description: "Abu Dhabi City Tours",
    url:
      "https://cdn-imgix.headout.com/category/152/abu-dhabi/image/daytour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 3,
    description: "Amsterdam Attractions",
    url:
      "https://cdn-imgix.headout.com/category/177/amsterdam/image/Amsterdam-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 4,
    description: "Burj Khalifa",
    url:
      "https://cdn-imgix.headout.com/category/158/dubai/image/Dubai-Khalifa.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 5,
    description: "Museums & Art Galleries",
    url:
      "https://cdn-imgix.headout.com/category/510/image/a2c6da57-3994-4910-97ad-abe2b9b31a65-uffizi-gallery-hallway.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 6,
    description: "Alhambra",
    url:
      "https://cdn-imgix.headout.com/category/1449/image/f1b8a5ab-ffa6-47a4-a50e-e96bd92b64a5-willian-justen-de-vasconcellos-499722-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 7,
    description: "Hong Kong Attractions",
    url:
      "https://cdn-imgix.headout.com/category/348/image/7a5e9926-9f14-45aa-b915-23c5bc9e1a17-hong-kong-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 8,
    description: "Entrainment Shows",
    url:
      "https://cdn-imgix.headout.com/category/49/image/9bf7c5aa-9012-4687-9ada-ecf7ba26048a-49-las-vegas-aerial-01.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 9,
    description: "London Attractions",
    url:
      "https://cdn-imgix.headout.com/category/168/london/image/london-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 10,
    description: "Madrid Attractions",
    url:
      "https://cdn-imgix.headout.com/category/201/madrid/image/Madrid-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 11,
    description: "Last Supper",
    url:
      "https://cdn-imgix.headout.com/category/1178/image/61c6d18d-36c0-4537-863f-efc8a0a1b24c-the-last-supper.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 12,
    description: "Neuschwanstein",
    url:
      "https://cdn-imgix.headout.com/category/1520/image/206de694-146f-4bc9-8fa1-d77074da8b7e-nikita-semerenko-776957-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 13,
    description: "Pompeii",
    url:
      "https://cdn-imgix.headout.com/category/1223/image/3f77a082-970d-43df-bc5d-7e6e301925c6-pompeii.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 14,
    description: "Broadway Show Tickets",
    url:
      "https://cdn-imgix.headout.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 15,
    description: "Weekend in Prague",
    url:
      "https://cdn-imgix.headout.com/category/1219/image/a49bbc22-258b-48c0-93fe-c7fdf9a8c65a-city.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
  {
    id: 16,
    description: "Vatican",
    url:
      "https://cdn-imgix.headout.com/category/189/image/e16239ea-0531-4a95-9c18-ced64eb08d54-nicolas-hoizey-408661-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min",
  },
];

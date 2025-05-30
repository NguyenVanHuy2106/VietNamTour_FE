import React from "react";
import { Container, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa"; // Import icon Home
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsClock,
  BsCalendar3,
  BsCarFront,
  BsBuilding,
  BsCaretRightFill,
} from "react-icons/bs";
import "./index.css"; // Import file CSS

const NewTour = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "85%",
          maxWidth: "85%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="" style={{ marginBottom: "30px" }}>
          <div className="NewTourTitleNT">TOUR MỚI NHẤT</div>
          <div className="card-container d-flex flex-wrap justify-content-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            {pickedData.map((item) => (
              <div key={item.id}>
                <div className="exp-card">
                  <>
                    <div
                      className="exp-card-img"
                      style={{ backgroundImage: `url(${item.url})` }}
                    >
                      {item.cashback && (
                        <div className="cashback">
                          <p>{`${item.cashback}% CASHBACK`}</p>
                        </div>
                      )}
                      {item.highlight && (
                        <div className="cashback">
                          <p>{item.highlight}</p>
                        </div>
                      )}
                    </div>
                    <div className="exp-content-wrapNT">
                      <div className="exp-info-wrapNT">
                        {item.city ? (
                          <>
                            <p id="exp-city">{item.city}</p>
                            <p id="exp-description">{item.description}</p>
                          </>
                        ) : (
                          <>
                            <p id="exp-about">{item.about}</p>
                            <p id="exp-description">{item.description}</p>
                          </>
                        )}
                      </div>
                      <div className="tourInfo">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsClock />
                          <p className="m-0">
                            {item.time ? item.time : "Không có dữ liệu"}
                          </p>
                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsCalendar3 />
                          <p className="m-0">
                            {item.date ? item.date : "Không có dữ liệu"}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsCarFront />
                          <p className="m-0">
                            {item.vehicle ? item.vehicle : "Không có dữ liệu"}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsBuilding />
                          <p className="m-0">
                            {item.hotel ? item.hotel : "Không có dữ liệu"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="price-section">
                          <div className="div">
                            {item.discount ? (
                              <div className="discount">
                                <p>
                                  <span>
                                    <i className="fas fa-gift" />
                                  </span>
                                  {`upto ${item.discount}% off`}
                                </p>
                              </div>
                            ) : (
                              <div className="discount" />
                            )}
                          </div>
                          <div className="price">
                            {/* <p id="price">{`${item.currency}${1000000}`}</p> */}
                            <p>VNĐ</p>
                            <p
                              style={{
                                fontSize: 20,
                                color: "#ff0000",
                              }}
                            >
                              {Number(1000000).toLocaleString("de-DE")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTour;

const pickedData = [
  {
    id: 1,
    currentPrice: 29,
    currency: "VNĐ",
    stars: 4.6,
    city: "TP. HỒ CHÍ MINH",
    description: "The Phantom of the Opera",
    url:
      "https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 2,
    currentPrice: 57.5,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 10,
    city: "TP. HỒ CHÍ MINH",
    description: "Aladdin",
    url:
      "https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 3,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: "VNĐ",
    city: "TP. HỒ CHÍ MINH",
    description: "King Kong - Broadway Week Discount",
    url:
      "https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 4,
    currentPrice: 141,
    lastPrice: 146,
    currency: "VNĐ",
    stars: 4.6,

    cashback: 5,
    city: "TP. HỒ CHÍ MINH",
    description: "Burj Khalifa: At the Top (Level 124 & 125)",
    url:
      "https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 5,
    currentPrice: 196,
    lastPrice: 206,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 5,
    city: "TP. HỒ CHÍ MINH",
    description: "Dubai Acquarium & Underwater Zoo + Burj Khalifa Combo",
    url:
      "https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 6,
    currentPrice: 20,
    currency: "VNĐ",
    stars: 4.6,
    city: "TP. HỒ CHÍ MINH",
    description:
      "Palace of Versailles All Access Passport Entry with Audioguide",
    url:
      "https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 7,
    currentPrice: 31,
    lastPrice: 45,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 10,
    city: "TP. HỒ CHÍ MINH",
    description: "Skip The Line: Eiffel Tower Tickets with Host",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
  {
    id: 8,
    currentPrice: 31,
    lastPrice: 45,
    currency: "VNĐ",
    stars: 4.6,
    cashback: 10,
    city: "TP. HỒ CHÍ MINH",
    description: "Skip The Line: Eiffel Tower Tickets with Host",
    url:
      "https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min",
    time: "3 ngày 3 đêm",
    date: "20/11/2025",
    vehicle: "Xe 45 chỗ",
    hotel: "Resort 4 sao",
  },
];

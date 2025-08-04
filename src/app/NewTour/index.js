import React, { useState, useEffect } from "react";
import APIToken from "../../config/APIToken";
import API from "../../config/APINoToken";
import { Container, Nav } from "react-bootstrap";
import { FaHome } from "react-icons/fa"; // Import icon Home
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [data8NewTour, setData8NewTour] = useState([]);
  const getData = async () => {
    try {
      const response = await API.get("/tour/get8new");
      setData8NewTour(response.data.data || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách Tour mới:", error.response || error);
    }
  };
  const handleGoToDetail = (tourid) => {
    navigate("/tour-detail", { state: { tourId: tourid } });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1210px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="" style={{ marginBottom: "30px" }}>
          <div
            className="NewTourTitleNT"
            onClick={() => navigate("/tour-list", { state: { tourtype: "" } })}
          >
            TOUR MỚI NHẤT
          </div>
          <div className="card-container d-flex flex-wrap justify-content-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            {data8NewTour.map((item) => (
              <div key={item.tourid}>
                <div
                  className="exp-card"
                  onClick={() => handleGoToDetail(item.tourid)}
                >
                  <>
                    <div
                      className="exp-card-img"
                      style={{
                        backgroundImage: `url(${item.images[0].imageurl})`,
                      }}
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
                        {item.destination_name && (
                          <>
                            <p id="exp-city">{item.destination_name}</p>
                            <p
                              id="exp-description"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontWeight: "bold",
                              }}
                            >
                              {item.tourname}
                            </p>
                          </>
                        )}
                      </div>
                      <div className="tourInfo">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsClock />
                          <p className="m-0">
                            {item.timetype_name
                              ? item.timetype_name
                              : "Không có dữ liệu"}
                          </p>
                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsCalendar3 />
                          <p className="m-0">
                            {item.startdate
                              ? item.startdate
                              : "Không có dữ liệu"}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsCarFront />
                          <p className="m-0">
                            {item.vehicletype_name
                              ? item.vehicletype_name
                              : "Không có dữ liệu"}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <BsBuilding />
                          <p className="m-0">
                            {item.hoteltypename
                              ? item.hoteltypename
                              : "Không có dữ liệu"}
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
                            <p>VNĐ</p>
                            <p
                              style={{
                                fontSize: 20,
                                color: "#ff0000",
                              }}
                            >
                              {item.price &&
                                Number(item.price.adultprice).toLocaleString(
                                  "de-DE"
                                )}
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

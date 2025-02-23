import React, { useState } from "react";

const ExperienceCard = ({
  url,
  discount,
  cashback,
  currency,
  lastPrice,
  ratings,
  stars,
  city,
  about,
  showMore,
  highlight,
  description,
  price,
}) => {
  const [listed, setListed] = useState(false);

  const addToWishlist = () => setListed((prev) => !prev);

  const style = {
    color: listed ? "#f43361" : "white",
    fontSize: "20px",
    position: "absolute",
    right: "10px",
    top: "15px",
    fontWeight: listed ? "700" : "400",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="exp-card">
      {showMore ? (
        <div className="show-more">
          <p>View All</p>
        </div>
      ) : (
        <>
          <div
            className="exp-card-img"
            style={{ backgroundImage: `url(${url})` }}
          >
            {cashback && (
              <div className="cashback">
                <p>{`${cashback}% CASHBACK`}</p>
              </div>
            )}
            {highlight && (
              <div className="cashback">
                <p>{highlight}</p>
              </div>
            )}
            <div className="exp-heart">
              <i
                className="far fa-heart"
                role="button"
                onClick={addToWishlist}
                style={style}
              />
            </div>
          </div>
          <div className="exp-content-wrap">
            <div className="exp-info-wrap">
              {city ? (
                <>
                  <p id="exp-city">{city}</p>
                  <p id="exp-description">{description}</p>
                </>
              ) : (
                <>
                  <p id="exp-about">{about}</p>
                  <p id="exp-description">{description}</p>
                </>
              )}
            </div>
            <div>
              <div className="price-section">
                <div className="div">
                  {discount ? (
                    <div className="discount">
                      <p>
                        <span>
                          <i className="fas fa-gift" />
                        </span>
                        {`upto ${discount}% off`}
                      </p>
                    </div>
                  ) : (
                    <div className="discount" />
                  )}
                  <div className="ratings-section">
                    {stars ? (
                      <div className="stars">
                        <p id="stars-p">
                          {parseFloat(Math.round(stars * 100) / 100).toFixed(1)}
                          <span id="star"> &#9733;</span>
                        </p>
                      </div>
                    ) : (
                      <div
                        style={{
                          width: "25px",
                          height: "20px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(340deg, #ffbb58, #f5c684)",
                          paddingTop: "3px",
                        }}
                      >
                        <p id="stars-p">
                          <span> &#9733;</span>
                        </p>
                      </div>
                    )}
                    {ratings ? (
                      <p id="ratings">{`(${ratings} Rating${
                        ratings > 1 ? "s" : ""
                      })`}</p>
                    ) : (
                      <p id="ratings">Newly Arrived</p>
                    )}
                  </div>
                </div>
                <div className="price">
                  <p>from</p>
                  {lastPrice && (
                    <p id="last-price">{`${currency}${
                      city === "DUBAI" ? ` ${lastPrice}` : lastPrice
                    }`}</p>
                  )}
                  <p id="price">{`${currency}${
                    city === "DUBAI" ? ` ${price}` : price
                  }`}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;

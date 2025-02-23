import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import Background from "./Background";
import Logo from "../Images/headout.png";
import MobileApp from "../Images/mobile-app.gif";
import "../Styles/Header.css";

const Header = ({ backgroundImagesData, navigationData, selectedCity }) => {
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderNav
        changeExperience={setExperience}
        experience={experience}
        selectedCity={selectedCity}
        navigationData={navigationData}
      />
      <Background backgroundImagesData={backgroundImagesData} />
      <div className="search-bar-div">
        <div className="select-city-large">
          <i className="fas fa-map-marker" />
          <Searchbar
            style={customStyles}
            navigate={navigate}
            selectedCity={selectedCity}
          />
        </div>
        <div className="select-experience-large">
          <input
            type="text"
            placeholder="Search for experiences"
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
          />
          <i className="fas fa-search" />
        </div>
        <button id="go">Let's Go</button>
      </div>
    </>
  );
};

const HeaderNav = ({ changeExperience, experience, navigationData = [] }) => {
  return (
    <div className="header-wrap">
      <div className="header-wrapper navbar-fixed-top">
        <div className="header-left">
          <div className="nav">
            <div className="first-line">
              <Link to="/">
                <img id="logo" src={Logo} alt="Headout" />
              </Link>
              <div className="select-experience">
                <input
                  type="text"
                  placeholder="Search for experiences"
                  onChange={(e) => changeExperience(e.target.value)}
                  value={experience}
                />
                <i className="fas fa-search" />
              </div>
            </div>
            <div className="second-line">
              <div className="best-picked">
                {navigationData.map(({ id, name }) => (
                  <p key={id}>{name}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="header-right">
            <Link to="/app">
              <div className="download-app">
                <img src={MobileApp} id="mobile-app" alt="Download our App" />
                <p style={{ color: "#24a1b2" }}>Download App</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Searchbar = ({ style, navigate, selectedCity }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    navigate(`/cities/${selectedOption.value}`);
  };

  return (
    <Select
      styles={style}
      placeholder={selectedCity || "Select City"}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      className="city-select-dropdown"
    />
  );
};

const options = [
  { value: "new-york", label: "New York" },
  { value: "las-vegas", label: "Las Vegas" },
  { value: "rome", label: "Rome" },
  { value: "paris", label: "Paris" },
  { value: "london", label: "London" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "red" : "#727272",
    padding: 10,
    cursor: "pointer",
  }),
  control: () => ({
    width: 150,
    display: "flex",
    fontSize: "14px",
    paddingLeft: "5px",
  }),
};

export default Header;

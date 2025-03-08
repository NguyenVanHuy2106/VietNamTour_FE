import React from "react";
import { BsGlobeAsiaAustralia, BsAirplane, BsPeople } from "react-icons/bs";
import "./index.css";

const CPSearch = ({ label, iconKey, onClick }) => {
  const icons = {
    inbound: <BsGlobeAsiaAustralia className="icon-style" />,
    outbound: <BsAirplane className="icon-style" />,
    group: <BsPeople className="icon-style" />,
  };

  return (
    <div className="search-button" onClick={onClick}>
      <div
        style={{
          backgroundColor: "#333300",
          padding: 10,
          borderRadius: "50%",
          color: "#ffffff",
        }}
      >
        {icons[iconKey] || icons.inbound}
      </div>
      <div className="search-label">{label}</div>
    </div>
  );
};

export default CPSearch;

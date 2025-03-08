import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CPSearch from "../../Components/CPSearch";

const Search = () => {
  return (
    <div
      className="d-flex align-items-center flex-column"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <div className="w-100 d-md-flex d-block justify-content-center gap-3">
        <CPSearch
          label="Tour trong nước"
          iconKey="inbound"
          onClick={() => alert("Bạn đã chọn Tour trong nước!")}
        />
        <CPSearch
          label="Tour nước ngoài"
          iconKey="outbound"
          onClick={() => alert("Bạn đã chọn Tour nước ngoài!")}
        />
        <CPSearch
          label="Tour khách đoàn"
          iconKey="group"
          onClick={() => alert("Bạn đã chọn Tour khách đoàn!")}
        />
      </div>
    </div>
  );
};

export default Search;

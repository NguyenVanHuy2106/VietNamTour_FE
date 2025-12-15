import React, { useState, useEffect } from "react";
import APIToken from "../../config/APIToken";
import API from "../../config/APINoToken";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryid, setCategoryid] = useState([]); // mặc định không chọn
  const navigate = useNavigate();
  // const getData = async () => {
  //   try {
  //     const response = await API.get("/post/get");
  //     setBlogPosts(response.data.data || []);
  //   } catch (error) {
  //     console.error("Lỗi khi lấy danh sách bài viết", error.response || error);
  //   }
  // };

  const getData = async (categoryid = []) => {
    console.log(categoryid);
    try {
      const payload = {};
      if (categoryid && categoryid.length > 0) {
        payload.category_id = categoryid;
      }

      const response = await API.post("/post/search", payload);
      setBlogPosts(response.data.data || []);
    } catch (error) {
      console.error("Lỗi khi lấy tour:", error.response || error);
    }
  };
  const getDataCategory = async () => {
    try {
      const response = await API.get("/categories/get");
      setDataCategory(response.data.data || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bài viết", error.response || error);
    }
  };
  const handleGoToDetail = (id, title) => {
    const slug = toSlug(title);
    navigate(`/blog/${slug}-${id}`);
  };

  const handleCatChange = (value) => {
    const newCategoryid = categoryid.includes(value)
      ? categoryid.filter((item) => item !== value)
      : [...categoryid, value];

    setCategoryid(newCategoryid);
    getData(newCategoryid);
  };

  useEffect(() => {
    getDataCategory();
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
          backgroundColor: "#ffffff",
        }}
      >
        <div className="" style={{ marginBottom: "30px" }}>
          <div className="titleBlog">DANH SÁCH BÀI VIẾT</div>
          {/* <div className="d-flex">
            <div className="col-3">Search</div>
            <div
              className="card-container col-9"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "flex-start",
                marginLeft: "10px",
                marginRight: "10px",
                marginTop: "20px",
              }}
            >
              {blogPosts.map((blog) => (
                <div
                  className="card"
                  key={blog.post_id}
                  onClick={() => handleGoToDetail(blog.post_id, blog.title)}
                >
                  <img
                    src={blog.thumbnail_url}
                    alt={blog.title}
                    className="card-img"
                  />
                  <div className="card-title">{blog.title}</div>

                  <div className="card-meta">
                    <div className="combo">
                      <FaCalendarAlt />
                      <span>{blog.created_at}</span>
                    </div>
                    <div className="combo">
                      <FaUser />
                      <span>{blog.creator.name}</span>
                    </div>
                  </div>

                  <div className="card-description">{blog.description}</div>
                </div>
              ))}
            </div>
          </div> */}
          <div className="container" style={{ paddingTop: "20px" }}>
            <div className="row">
              {/* Bộ lọc bên trái */}
              <div className="col-md-3">
                <div className="p-3 border rounded bg-white">
                  <h5>Tìm kiếm</h5>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Danh mục</label>
                    <div className="form-check">
                      {dataCategory.map((option, index) => (
                        <div key={index} className="option">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`time-${index}`}
                            // value={option.timetypeid}
                            // // onChange={handleChange} // Nếu bạn xử lý lọc theo thời gian
                            checked={categoryid.includes(option.category_id)}
                            onChange={() => handleCatChange(option.category_id)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`time-${index}`}
                          >
                            {option.category_name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Danh sách tour */}
              <div className="col-md-9">
                <div
                  className="card-container col-12"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px",
                    justifyContent: "flex-start",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  {blogPosts.map((blog) => (
                    <div
                      className="card"
                      key={blog.post_id}
                      onClick={() => handleGoToDetail(blog.post_id, blog.title)}
                    >
                      <img
                        src={blog.thumbnail_url}
                        alt={blog.title}
                        className="card-img"
                      />
                      <div className="card-title">{blog.title}</div>

                      <div className="card-meta">
                        <div className="combo">
                          <FaCalendarAlt />
                          <span>{blog.created_at}</span>
                        </div>
                        <div className="combo">
                          <FaUser />
                          <span>{blog.creator.name}</span>
                        </div>
                      </div>

                      <div className="card-description">{blog.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

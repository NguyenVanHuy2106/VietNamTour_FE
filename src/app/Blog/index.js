import React, { useState, useEffect } from "react";
import APIToken from "../../config/APIToken";
import API from "../../config/APINoToken";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await API.get("/post/get");
      setBlogPosts(response.data.data || []);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách bài viết", error.response || error);
    }
  };
  const handleGoToDetail = (postId) => {
    navigate("/blog-detail", { state: { postId: postId } });
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
          backgroundColor: "#ffffff",
        }}
      >
        <div className="" style={{ marginBottom: "30px" }}>
          <div className="titleBlog">DANH SÁCH BÀI VIẾT</div>
          <div
            className="card-container"
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
                onClick={() => handleGoToDetail(blog.post_id)}
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
  );
};

export default Blog;

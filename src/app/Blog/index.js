import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
import "./index.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryid, setCategoryid] = useState([]);
  const navigate = useNavigate();

  const getData = async (selectedCats = []) => {
    try {
      const payload =
        selectedCats.length > 0 ? { category_id: selectedCats } : {};
      const response = await API.post("/post/search", payload);
      setBlogPosts(response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataCategory = async () => {
    try {
      const response = await API.get("/categories/get");
      setDataCategory(response.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCatChange = (id) => {
    const updated = categoryid.includes(id)
      ? categoryid.filter((i) => i !== id)
      : [...categoryid, id];
    setCategoryid(updated);
    getData(updated);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getDataCategory();
    getData();
  }, []);

  return (
    <div className="asymmetric-blog-root">
      <div className="blog-container-wide">
        {/* --- PHẦN HERO SECTION MỚI --- */}
        <header className="simple-hero">
          <div className="hero-inner">
            <div className="hero-text-center">
              <span className="hero-date-tag">Cập nhật: Dec 2025</span>
              <h1 className="hero-title-simple">Góc Nhìn Hành Trình</h1>
              <p className="hero-desc-simple">
                Nơi lưu giữ những kỷ niệm và kinh nghiệm du lịch quý giá.
              </p>
              <div className="hero-line"></div>
            </div>
          </div>
        </header>

        {/* --- KẾT THÚC HERO SECTION --- */}
        <div className="main-layout">
          {/* Sidebar Trái - Line Style */}
          <aside className="sidebar-line">
            <div className="filter-group">
              <p className="filter-label">DANH MỤC —</p>
              {dataCategory.map((cat) => (
                <div
                  key={cat.category_id}
                  className={`cat-item-line ${
                    categoryid.includes(cat.category_id) ? "active" : ""
                  }`}
                  onClick={() => handleCatChange(cat.category_id)}
                >
                  <span className="cat-name">{cat.category_name}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Grid 4 Cột Phá Cách */}
          <section className="posts-asymmetric-grid">
            {blogPosts.map((blog, index) => (
              <div
                className="post-magazine-item"
                key={blog.post_id}
                onClick={() => navigate(`/blog/${blog.slug}`)}
              >
                <div className="image-wrapper">
                  <div className="index-sticker">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <img src={blog.thumbnail_url} alt={blog.title} />
                </div>

                <div className="post-content-overlay">
                  <div className="meta-top">
                    <span>{blog.created_at}</span>
                  </div>
                  <h3 className="title-bold">{blog.title}</h3>
                  <div className="author-line">By {blog.creator.name}</div>
                  <button className="view-btn">
                    Explore <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;

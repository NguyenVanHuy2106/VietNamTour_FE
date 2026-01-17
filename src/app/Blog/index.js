import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryid, setCategoryid] = useState([]);

  // --- STATE PHÂN TRANG ---
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const navigate = useNavigate();

  // Lấy dữ liệu bài viết
  const getData = async (selectedCats = []) => {
    try {
      const payload =
        selectedCats.length > 0 ? { category_id: selectedCats } : {};
      const response = await API.post("/post/search", payload);
      setBlogPosts(response.data.data || []);
      setCurrentPage(1); // Reset về trang 1 khi lọc danh mục
    } catch (error) {
      console.error("Lỗi lấy bài viết:", error);
    }
  };

  // Lấy danh mục
  const getDataCategory = async () => {
    try {
      const response = await API.get("/categories/get");
      setDataCategory(response.data.data || []);
    } catch (error) {
      console.error("Lỗi lấy danh mục:", error);
    }
  };

  // Xử lý khi click chọn danh mục
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

  // --- LOGIC PHÂN TRANG THÔNG MINH ---
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Cuộn lên đầu phần danh sách bài viết (khoảng dưới Hero)
    window.scrollTo({ top: 450, behavior: "smooth" });
  };

  const getPaginationGroup = () => {
    let pages = [];
    const siblingCount = 1; // Số trang hiển thị quanh trang hiện tại

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - siblingCount && i <= currentPage + siblingCount)
      ) {
        pages.push(i);
      } else if (
        i === currentPage - siblingCount - 1 ||
        i === currentPage + siblingCount + 1
      ) {
        pages.push("...");
      }
    }
    return [...new Set(pages)];
  };

  return (
    <div className="asymmetric-blog-root">
      <div className="blog-container-wide">
        {/* Hero Section */}
        <header className="simple-hero">
          <div className="hero-inner">
            <div className="hero-text-center">
              <span className="hero-date-tag">Cập nhật: Jan 2026</span>
              <h1 className="hero-title-simple">Góc Nhìn Hành Trình</h1>
              <p className="hero-desc-simple">
                Nơi lưu giữ những kỷ niệm và kinh nghiệm du lịch quý giá.
              </p>
              <div className="hero-line"></div>
            </div>
          </div>
        </header>

        <div className="main-layout">
          {/* Sidebar Trái */}
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

          {/* Nội dung chính */}
          <section className="posts-asymmetric-grid-container">
            <div className="posts-asymmetric-grid">
              {currentPosts.length > 0 ? (
                currentPosts.map((blog, index) => (
                  <div
                    className="post-magazine-item"
                    key={blog.post_id}
                    onClick={() => navigate(`/blog/${blog.slug}`)}
                  >
                    <div className="image-wrapper">
                      <div className="index-sticker">
                        {(indexOfFirstPost + index + 1)
                          .toString()
                          .padStart(2, "0")}
                      </div>
                      <img src={blog.thumbnail_url} alt={blog.title} />
                    </div>

                    <div className="post-content-overlay">
                      <div className="meta-top">
                        <span>{blog.created_at}</span>
                      </div>
                      <h3 className="title-bold">{blog.title}</h3>
                      <div className="author-line">
                        By {(blog.creator && blog.creator.name) || "Admin"}
                      </div>
                      <button className="view-btn">
                        Explore <FaArrowRight />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Đang tải bài viết hoặc không có bài viết nào...</p>
              )}
            </div>

            {/* Pagination UI */}
            {totalPages > 1 && (
              <div className="pagination-wrapper">
                <button
                  className="pagi-btn"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft />
                </button>

                {getPaginationGroup().map((item, index) => (
                  <button
                    key={index}
                    className={`pagi-number ${
                      currentPage === item ? "active" : ""
                    } ${item === "..." ? "dots" : ""}`}
                    onClick={() => item !== "..." && paginate(item)}
                    disabled={item === "..."}
                  >
                    {item}
                  </button>
                ))}

                <button
                  className="pagi-btn"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;

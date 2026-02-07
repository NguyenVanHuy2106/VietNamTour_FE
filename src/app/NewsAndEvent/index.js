import React, { useState, useEffect, useMemo } from "react";
import API from "../../config/APINoToken";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

const NewsAndEvent = () => {
  const [allPosts, setAllPosts] = useState([]); // Lưu toàn bộ dữ liệu gốc từ API
  const [searchTerm, setSearchTerm] = useState(""); // Từ khóa search
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const navigate = useNavigate();

  // 1. Chỉ gọi API duy nhất 1 lần để lấy tất cả bài của Category 13
  const fetchAllData = async () => {
    try {
      setLoading(true);
      const payload = {
        category_id: [13],
        title: "", // Lấy hết, không truyền keyword vào API nữa
      };
      const response = await API.post("/post/search", payload);

      if (response && response.data && response.data.data) {
        setAllPosts(response.data.data);
      }
    } catch (error) {
      console.error("Lỗi lấy bài viết:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchAllData();
  }, []);

  // 2. LOGIC TÌM KIẾM TẠI CLIENT (Dùng useMemo để tối ưu hiệu năng)
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, allPosts]);

  // Reset trang về 1 mỗi khi từ khóa tìm kiếm thay đổi
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // 3. LOGIC PHÂN TRANG TRÊN DANH SÁCH ĐÃ LỌC
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Hàm xử lý UI Search (Bỏ handleSearchSubmit vì giờ lọc realtime theo input)
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getPaginationGroup = () => {
    let pages = [];
    const siblingCount = 1;
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
        <header className="simple-hero">
          <div className="hero-inner">
            <div className="hero-text-center">
              <span className="hero-date-tag">Cập nhật: 2026</span>
              <h1 className="hero-title-simple">Bản tin lữ hành</h1>
              <p className="hero-desc-simple">
                Tìm hiểu những bài viết mới nhất về sự kiện và tin tức du lịch.
              </p>
              <div className="hero-line"></div>
            </div>
          </div>
        </header>

        <div className="main-layout">
          <aside className="sidebar-line">
            <div className="search-group">
              <p className="filter-label">TÌM KIẾM BÀI VIẾT —</p>
              <div className="search-box-wrapper">
                <input
                  type="text"
                  placeholder="Nhập tên bài viết..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input-line"
                />
                <div className="search-btn-line">
                  <FaSearch />
                </div>
              </div>
              <p className="search-hint">
                Tìm trong: <b>{allPosts.length} bài viết</b>
              </p>
            </div>
          </aside>

          <section className="posts-asymmetric-grid-container">
            {loading ? (
              <p className="status-text">Đang tải dữ liệu...</p>
            ) : (
              <div className="posts-asymmetric-grid">
                {currentPosts.length > 0 ? (
                  currentPosts.map((blog, index) => (
                    <div
                      className="post-magazine-item"
                      key={blog.post_id}
                      onClick={() => navigate(`/tin-tuc-su-kien/${blog.slug}`)}
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
                  <p className="status-text">
                    Không tìm thấy bài viết nào chứa từ khóa "{searchTerm}".
                  </p>
                )}
              </div>
            )}

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

export default NewsAndEvent;

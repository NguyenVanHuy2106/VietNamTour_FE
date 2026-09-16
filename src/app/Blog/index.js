import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import API from "../../config/APINoToken";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

const POSTS_PER_PAGE = 8;

const Blog = () => {
  const navigate = useNavigate();
  const postsSectionRef = useRef(null);

  const [blogPosts, setBlogPosts] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  /* =====================================================
     LẤY DANH SÁCH BÀI VIẾT
  ===================================================== */
  const getData = async (selectedCats = []) => {
    try {
      setLoadingPosts(true);

      const payload =
        selectedCats.length > 0
          ? {
              category_id: selectedCats,
            }
          : {};

      const response = await API.post("/post/search", payload);

      const posts =
        response && response.data && response.data.data
          ? response.data.data
          : [];

      setBlogPosts(posts);
      setCurrentPage(1);
    } catch (error) {
      console.error("Lỗi lấy bài viết:", error);
      setBlogPosts([]);
    } finally {
      setLoadingPosts(false);
    }
  };

  /* =====================================================
     LẤY DANH MỤC
  ===================================================== */
  const getDataCategory = async () => {
    try {
      setLoadingCategories(true);

      const response = await API.get("/categories/get");

      const categories =
        response && response.data && response.data.data
          ? response.data.data
          : [];

      setDataCategory(categories);
    } catch (error) {
      console.error("Lỗi lấy danh mục:", error);
      setDataCategory([]);
    } finally {
      setLoadingCategories(false);
    }
  };

  /* =====================================================
     CHỌN DANH MỤC
  ===================================================== */
  const handleCatChange = (id) => {
    let updatedCategories = [];

    if (categoryIds.includes(id)) {
      updatedCategories = categoryIds.filter((categoryId) => categoryId !== id);
    } else {
      updatedCategories = categoryIds.concat(id);
    }

    setCategoryIds(updatedCategories);
    getData(updatedCategories);
  };

  /* =====================================================
     XÓA BỘ LỌC
  ===================================================== */
  const handleClearCategory = () => {
    setCategoryIds([]);
    getData([]);
  };

  /* =====================================================
     LOAD DATA
  ===================================================== */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    getDataCategory();
    getData();
  }, []);

  /* =====================================================
     PHÂN TRANG
  ===================================================== */
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;

  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;

  const currentPosts = useMemo(() => {
    return blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [blogPosts, indexOfFirstPost, indexOfLastPost]);

  /* =====================================================
     ĐỔI TRANG
  ===================================================== */
  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return;
    }

    setCurrentPage(pageNumber);

    setTimeout(() => {
      if (postsSectionRef.current) {
        postsSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  /* =====================================================
     PAGINATION THÔNG MINH
  ===================================================== */
  const getPaginationGroup = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("left-dots");
    }

    const startPage = Math.max(2, currentPage - 1);

    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let page = startPage; page <= endPage; page += 1) {
      pages.push(page);
    }

    if (currentPage < totalPages - 2) {
      pages.push("right-dots");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  /* =====================================================
     FORMAT NGÀY
  ===================================================== */
  const formatDate = (dateString) => {
    if (!dateString) {
      return "";
    }

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return dateString;
    }

    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  /* =====================================================
     ĐI TỚI CHI TIẾT BLOG
  ===================================================== */
  const goToBlogDetail = (blog) => {
    if (!blog || !blog.slug) {
      return;
    }

    navigate("/blog/" + blog.slug);
  };

  /* =====================================================
     KEYBOARD
  ===================================================== */
  const handleCardKeyDown = (event, blog) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToBlogDetail(blog);
    }
  };

  return (
    <main className="blog-page">
      <Helmet>
        <title>Cẩm nang du lịch & kinh nghiệm khách đoàn | Việt Nam Tour</title>

        <meta
          name="description"
          content="Cẩm nang du lịch Việt Nam với kinh nghiệm đi tour, gợi ý điểm đến, lịch trình và thông tin hữu ích dành cho khách đoàn, doanh nghiệp, bệnh viện và tổ chức."
        />

        <link rel="canonical" href="https://myvietnamtour.vn/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Việt Nam Tour" />

        <meta
          property="og:title"
          content="Cẩm nang du lịch & kinh nghiệm khách đoàn | Việt Nam Tour"
        />

        <meta
          property="og:description"
          content="Kinh nghiệm du lịch, gợi ý điểm đến, lịch trình và cẩm nang dành cho khách đoàn, doanh nghiệp và tổ chức."
        />

        <meta property="og:url" content="https://myvietnamtour.vn/blog" />

        <meta
          property="og:image"
          content="https://cdn.myvietnamtour.vn/uploads/1.png"
        />
      </Helmet>
      {/* HERO */}
      <section className="blog-hero-modern">
        <div className="blog-container">
          <div className="blog-hero-modern-grid">
            <div className="blog-hero-copy">
              <span className="blog-hero-kicker">CẨM NANG DU LỊCH</span>

              <h1 className="blog-hero-heading">
                Mỗi chuyến đi
                <span> bắt đầu từ một ý tưởng hay.</span>
              </h1>

              <p className="blog-hero-subtext">
                Khám phá điểm đến, kinh nghiệm thực tế, lịch trình gợi ý và
                những câu chuyện du lịch được Việt Nam Tour chọn lọc cho từng
                hành trình.
              </p>

              <div className="blog-hero-actions">
                <button
                  type="button"
                  className="blog-hero-primary-btn"
                  onClick={() => {
                    if (postsSectionRef.current) {
                      postsSectionRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Khám phá bài viết
                  <FaArrowRight />
                </button>

                <div className="blog-hero-note">
                  <span className="blog-hero-note-line"></span>
                  <span>Kinh nghiệm • Điểm đến • Tour đoàn</span>
                </div>
              </div>
            </div>

            <div className="blog-hero-visual">
              <div className="blog-hero-visual-main">
                <div className="blog-hero-visual-content">
                  <span>VIỆT NAM TOUR</span>

                  <strong>
                    Đi để
                    <br />
                    thấy Việt Nam
                    <br />
                    đẹp hơn.
                  </strong>
                </div>

                <div className="blog-hero-visual-number">01</div>
              </div>

              <div className="blog-hero-floating-card">
                <span className="blog-hero-floating-label">GỢI Ý HÔM NAY</span>

                <strong>Khám phá những hành trình đáng đi nhất.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="blog-main">
        <div className="blog-container">
          {/* FILTER */}
          <div className="blog-filter-section">
            <div className="blog-filter-heading">
              <div>
                <span className="blog-filter-small-title">
                  KHÁM PHÁ THEO CHỦ ĐỀ
                </span>

                <h2>Bạn đang quan tâm điều gì?</h2>
              </div>

              {categoryIds.length > 0 && (
                <button
                  type="button"
                  className="blog-clear-filter"
                  onClick={handleClearCategory}
                >
                  Xóa bộ lọc
                </button>
              )}
            </div>

            <div className="blog-category-scroll">
              <div className="blog-category-list">
                <button
                  type="button"
                  className={
                    "blog-category-chip " +
                    (categoryIds.length === 0 ? "active" : "")
                  }
                  onClick={handleClearCategory}
                >
                  Tất cả
                </button>

                {loadingCategories ? (
                  <>
                    <span className="category-skeleton" />
                    <span className="category-skeleton" />
                    <span className="category-skeleton" />
                    <span className="category-skeleton" />
                  </>
                ) : (
                  dataCategory
                    .filter((cat) => cat.category_id !== 13)
                    .map((cat) => (
                      <button
                        type="button"
                        key={cat.category_id}
                        className={
                          "blog-category-chip " +
                          (categoryIds.includes(cat.category_id)
                            ? "active"
                            : "")
                        }
                        onClick={() => handleCatChange(cat.category_id)}
                      >
                        {cat.category_name}
                      </button>
                    ))
                )}
              </div>
            </div>
          </div>

          {/* BLOG CONTENT */}
          <div className="blog-content" ref={postsSectionRef}>
            <div className="blog-content-header">
              <div>
                <span className="blog-section-eyebrow">BÀI VIẾT MỚI</span>

                <h2>Cẩm nang & trải nghiệm</h2>
              </div>

              {!loadingPosts && (
                <p className="blog-result-count">{blogPosts.length} bài viết</p>
              )}
            </div>

            {/* LOADING */}
            {loadingPosts && (
              <div className="blog-grid">
                {Array.from({
                  length: POSTS_PER_PAGE,
                }).map((item, index) => (
                  <div className="blog-card-skeleton" key={index}>
                    <div className="skeleton-image" />

                    <div className="skeleton-content">
                      <div className="skeleton-line skeleton-small" />
                      <div className="skeleton-line skeleton-title" />
                      <div className="skeleton-line skeleton-title-short" />
                      <div className="skeleton-line skeleton-description" />
                      <div className="skeleton-line skeleton-description-short" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* DANH SÁCH BÀI */}
            {!loadingPosts && currentPosts.length > 0 && (
              <div className="blog-grid">
                {currentPosts.map((blog, index) => {
                  const creatorName =
                    blog && blog.creator && blog.creator.name
                      ? blog.creator.name
                      : "";

                  return (
                    <article
                      className="blog-card"
                      key={blog.post_id}
                      role="link"
                      tabIndex={0}
                      onClick={() => goToBlogDetail(blog)}
                      onKeyDown={(event) => handleCardKeyDown(event, blog)}
                    >
                      {/* IMAGE */}
                      <div className="blog-card-image">
                        <img
                          src={blog.thumbnail_url}
                          alt={blog.title || "Bài viết du lịch"}
                          loading="lazy"
                        />

                        <span className="blog-card-number">
                          {(indexOfFirstPost + index + 1)
                            .toString()
                            .padStart(2, "0")}
                        </span>

                        <div className="blog-card-image-overlay" />
                      </div>

                      {/* BODY */}
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span>
                            <FaRegCalendarAlt />

                            {formatDate(blog.created_at)}
                          </span>

                          {creatorName && (
                            <>
                              <i />

                              <span>{creatorName}</span>
                            </>
                          )}
                        </div>

                        <h3>{blog.title}</h3>

                        {blog.description && (
                          <p className="blog-card-description">
                            {blog.description}
                          </p>
                        )}

                        <div className="blog-card-footer">
                          <span className="blog-read-more">
                            Xem bài viết
                            <FaArrowRight />
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* EMPTY */}
            {!loadingPosts && currentPosts.length === 0 && (
              <div className="blog-empty">
                <div className="blog-empty-icon">✦</div>

                <h3>Chưa có bài viết phù hợp</h3>

                <p>
                  Hãy thử chọn một danh mục khác hoặc xem toàn bộ bài viết của
                  Việt Nam Tour.
                </p>

                <button type="button" onClick={handleClearCategory}>
                  Xem tất cả bài viết
                </button>
              </div>
            )}

            {/* PAGINATION */}
            {!loadingPosts && totalPages > 1 && (
              <nav className="blog-pagination" aria-label="Phân trang bài viết">
                <button
                  type="button"
                  className="pagination-arrow"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Trang trước"
                >
                  <FaChevronLeft />
                </button>

                <div className="pagination-numbers">
                  {getPaginationGroup().map((item) => {
                    if (item === "left-dots" || item === "right-dots") {
                      return (
                        <span className="pagination-dots" key={item}>
                          ...
                        </span>
                      );
                    }

                    return (
                      <button
                        type="button"
                        key={item}
                        className={
                          "pagination-number " +
                          (currentPage === item ? "active" : "")
                        }
                        onClick={() => paginate(item)}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="pagination-arrow"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Trang sau"
                >
                  <FaChevronRight />
                </button>
              </nav>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

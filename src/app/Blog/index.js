import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useSearchParams } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
} from "react-icons/fa";
import API from "../../config/APINoToken";
import "./index.css";

const POSTS_PER_PAGE = 8;
const SITE_URL = "https://myvietnamtour.vn";

const formatDate = (value) => {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const getPageUrl = (page) => {
  return page <= 1 ? "/blog" : "/blog?page=" + page;
};

const getPageNumbers = (current, total) => {
  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const pages = [1];

  if (current > 3) {
    pages.push("left-dots");
  }

  const first = Math.max(2, current - 1);
  const last = Math.min(total - 1, current + 1);

  for (let page = first; page <= last; page++) {
    pages.push(page);
  }

  if (current < total - 2) {
    pages.push("right-dots");
  }

  pages.push(total);
  return pages;
};

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const postsSectionRef = useRef(null);
  const firstRender = useRef(true);

  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);

  const [loadingPosts, setLoadingPosts] = useState(true);

  const [loadingCategories, setLoadingCategories] = useState(true);

  const pageParam = searchParams.get("page");
  const rawPage = Number(pageParam);

  const currentPage =
    Number.isSafeInteger(rawPage) && rawPage >= 1 ? rawPage : 1;

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const currentPosts = useMemo(() => {
    return blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [blogPosts, startIndex]);

  const canonicalUrl = SITE_URL + getPageUrl(currentPage);

  /* LẤY DANH MỤC */
  useEffect(() => {
    let active = true;

    const fetchCategories = async () => {
      try {
        const response = await API.get("/categories/get");

        const result =
          response && response.data && response.data.data
            ? response.data.data
            : [];

        if (active) {
          setCategories(Array.isArray(result) ? result : []);
        }
      } catch (error) {
        console.error("Lỗi lấy danh mục:", error);

        if (active) {
          setCategories([]);
        }
      } finally {
        if (active) {
          setLoadingCategories(false);
        }
      }
    };

    fetchCategories();

    return () => {
      active = false;
    };
  }, []);

  /* LẤY BÀI VIẾT */
  useEffect(() => {
    let active = true;

    const fetchPosts = async () => {
      setLoadingPosts(true);

      try {
        const payload =
          categoryIds.length > 0 ? { category_id: categoryIds } : {};

        const response = await API.post("/post/search", payload);

        const result =
          response && response.data && response.data.data
            ? response.data.data
            : [];

        if (active) {
          setBlogPosts(Array.isArray(result) ? result : []);
        }
      } catch (error) {
        console.error("Lỗi lấy bài viết:", error);

        if (active) {
          setBlogPosts([]);
        }
      } finally {
        if (active) {
          setLoadingPosts(false);
        }
      }
    };

    fetchPosts();

    return () => {
      active = false;
    };
  }, [categoryIds]);

  /* KIỂM TRA PHÂN TRANG */
  useEffect(() => {
    if (!loadingPosts && totalPages > 0 && currentPage > totalPages) {
      const params = totalPages === 1 ? {} : { page: String(totalPages) };

      setSearchParams(params, {
        replace: true,
      });
    }
  }, [currentPage, totalPages, loadingPosts, setSearchParams]);

  /* CUỘN KHI ĐỔI TRANG */
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentPage]);

  /* CHỌN DANH MỤC */
  const handleCatChange = (id) => {
    setCategoryIds((previous) => {
      if (previous.includes(id)) {
        return previous.filter((value) => value !== id);
      }

      return previous.concat(id);
    });

    setSearchParams(
      {},
      {
        replace: true,
      },
    );
  };

  const handleClearCategory = () => {
    setCategoryIds([]);
    setSearchParams(
      {},
      {
        replace: true,
      },
    );
  };

  const scrollToPosts = () => {
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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

        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />

        <meta property="og:site_name" content="Việt Nam Tour" />

        <meta
          property="og:title"
          content="Cẩm nang du lịch & kinh nghiệm khách đoàn | Việt Nam Tour"
        />

        <meta
          property="og:description"
          content="Kinh nghiệm du lịch, gợi ý điểm đến, lịch trình và cẩm nang dành cho khách đoàn."
        />

        <meta property="og:url" content={canonicalUrl} />

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
                  onClick={scrollToPosts}
                >
                  Khám phá bài viết
                  <FaArrowRight />
                </button>

                <div className="blog-hero-note">
                  <span className="blog-hero-note-line" />
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
          {/* CATEGORY FILTER */}
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
                    {[1, 2, 3, 4].map((item) => (
                      <span key={item} className="category-skeleton" />
                    ))}
                  </>
                ) : (
                  categories
                    .filter((category) => Number(category.category_id) !== 13)
                    .map((category) => (
                      <button
                        type="button"
                        key={category.category_id}
                        className={
                          "blog-category-chip " +
                          (categoryIds.includes(category.category_id)
                            ? "active"
                            : "")
                        }
                        onClick={() => handleCatChange(category.category_id)}
                      >
                        {category.category_name}
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
                {Array.from({ length: POSTS_PER_PAGE }, (_, index) => (
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

            {/* DANH SÁCH BÀI VIẾT */}
            {!loadingPosts && currentPosts.length > 0 && (
              <div className="blog-grid">
                {currentPosts.map((blog, index) => {
                  if (!blog.slug) return null;

                  const creatorName =
                    blog && blog.creator && blog.creator.name
                      ? blog.creator.name
                      : "";

                  return (
                    <article className="blog-card" key={blog.post_id}>
                      <Link
                        className="blog-card-link"
                        to={"/blog/" + encodeURIComponent(blog.slug)}
                        aria-label={"Đọc bài: " + blog.title}
                      >
                        <div className="blog-card-image">
                          {blog.thumbnail_url && (
                            <img
                              src={blog.thumbnail_url}
                              alt={blog.title || "Bài viết du lịch"}
                              loading="lazy"
                            />
                          )}

                          <span className="blog-card-number">
                            {String(startIndex + index + 1).padStart(2, "0")}
                          </span>

                          <div className="blog-card-image-overlay" />
                        </div>

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
                      </Link>
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
                {currentPage > 1 ? (
                  <Link
                    className="pagination-arrow"
                    to={getPageUrl(currentPage - 1)}
                    aria-label="Trang trước"
                  >
                    <FaChevronLeft />
                  </Link>
                ) : (
                  <span className="pagination-arrow pagination-disabled">
                    <FaChevronLeft />
                  </span>
                )}

                <div className="pagination-numbers">
                  {getPageNumbers(currentPage, totalPages).map((item) =>
                    typeof item === "string" ? (
                      <span key={item} className="pagination-dots">
                        ...
                      </span>
                    ) : (
                      <Link
                        key={item}
                        className={
                          "pagination-number " +
                          (currentPage === item ? "active" : "")
                        }
                        to={getPageUrl(item)}
                        aria-current={currentPage === item ? "page" : undefined}
                      >
                        {item}
                      </Link>
                    ),
                  )}
                </div>

                {currentPage < totalPages ? (
                  <Link
                    className="pagination-arrow"
                    to={getPageUrl(currentPage + 1)}
                    aria-label="Trang tiếp theo"
                  >
                    <FaChevronRight />
                  </Link>
                ) : (
                  <span className="pagination-arrow pagination-disabled">
                    <FaChevronRight />
                  </span>
                )}
              </nav>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

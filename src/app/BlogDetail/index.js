import React, { useEffect, useMemo, useState } from "react";
import API from "../../config/APINoToken";
import { useParams, useNavigate } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
import { Helmet } from "react-helmet";

import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaCompass,
  FaFacebookF,
  FaMapMarkerAlt,
  FaShareAlt,
  FaTag,
  FaUser,
} from "react-icons/fa";

import "./index.css";

const BlogDetail = () => {
  const { Slug } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    post: {},
    creator: {},
    tags: [],
    relations: [],
  });

  const p = data.post;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  /* =====================================================
     FORMAT DATE
  ===================================================== */

  const formatDate = (dateValue) => {
    if (!dateValue) return "";

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return dateValue;
    }

    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  /* =====================================================
     GENERATE TOC + CONTENT
  ===================================================== */

  const { processedContent, toc, readingTime } = useMemo(() => {
    if (!p.content) {
      return {
        processedContent: "",
        toc: [],
        readingTime: 1,
      };
    }

    const parser = new DOMParser();

    const doc = parser.parseFromString(p.content, "text/html");

    const headings = doc.querySelectorAll("h2, h3");

    const tocData = [];

    const usedIds = {};

    headings.forEach((heading, index) => {
      const headingText =
        (heading.innerText && heading.innerText.trim()) || `Mục ${index + 1}`;

      let baseId = toSlug(headingText) || `section-${index + 1}`;

      if (usedIds[baseId] !== undefined) {
        usedIds[baseId] += 1;

        baseId = `${baseId}-${usedIds[baseId]}`;
      } else {
        usedIds[baseId] = 0;
      }

      const id = heading.id || baseId;

      heading.id = id;

      tocData.push({
        id,
        text: headingText,
        level: heading.tagName.toLowerCase(),
      });
    });

    const textContent =
      doc.body && doc.body.textContent
        ? doc.body.textContent.replace(/\s+/g, " ").trim()
        : "";
    const totalWords = textContent ? textContent.split(/\s+/).length : 0;

    const minutes = Math.max(1, Math.ceil(totalWords / 220));

    return {
      processedContent: doc.body.innerHTML,

      toc: tocData,

      readingTime: minutes,
    };
  }, [p.content]);

  /* =====================================================
     API
  ===================================================== */

  const getData = async () => {
    if (!Slug) return;

    try {
      setLoading(true);

      const res = await API.get(`/post/slug/${Slug}`);

      const post = res.data.data || {};

      if (!post.post_id) {
        setData({
          post: {},
          creator: {},
          tags: [],
          relations: [],
        });

        return;
      }

      let relations = [];

      try {
        const rel = await API.post("/post/getRelation", {
          post_id: post.post_id,

          category_id: post.category_id,
        });

        relations = rel.data.data || [];
      } catch (relationError) {
        console.error("Lỗi lấy bài liên quan:", relationError);
      }

      setData({
        post,

        creator: post.creator || {},

        tags: post.tags || [],

        relations: relations.filter(
          (item) => Number(item.post_id) !== Number(post.post_id),
        ),
      });
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu bài viết:", error);

      setData({
        post: {},
        creator: {},
        tags: [],
        relations: [],
      });
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     USE EFFECT
  ===================================================== */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Slug]);

  /*
    Trên mobile mặc định thu gọn TOC
    nếu có nhiều mục.
  */

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      setIsOpen(false);
    }
  }, [Slug]);

  /* =====================================================
     SHARE
  ===================================================== */

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: p.title,
          text: p.description,
          url: currentUrl,
        });

        return;
      }

      await navigator.clipboard.writeText(currentUrl);

      alert("Đã sao chép đường dẫn bài viết.");
    } catch (error) {
      console.log("Người dùng đóng chia sẻ:", error);
    }
  };

  const handleFacebookShare = () => {
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(currentUrl);

    window.open(url, "_blank", "noopener,noreferrer,width=700,height=600");
  };

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <div className="blog-detail-loader">
        <FaCompass className="blog-loader-icon" />

        <strong>Đang khám phá...</strong>

        <span>Việt Nam Tour đang chuẩn bị nội dung cho bạn</span>
      </div>
    );
  }

  /* =====================================================
     NOT FOUND
  ===================================================== */

  if (!p || !p.post_id) {
    return (
      <div className="blog-not-found">
        <FaCompass />

        <h2>Không tìm thấy bài viết</h2>

        <p>Bài viết có thể đã được thay đổi hoặc không còn tồn tại.</p>

        <button onClick={() => navigate("/blog")}>
          <FaChevronLeft />
          Quay lại Blog
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      {/* =================================================
          SEO
      ================================================= */}

      <Helmet>
        <title>{p.title} | Việt Nam Tour</title>

        <meta name="description" content={p.description || ""} />

        <meta
          name="keywords"
          content={data.tags.map((tag) => tag.tag_name).join(", ")}
        />

        <link rel="canonical" href={currentUrl} />

        <link rel="icon" href="https://cdn.myvietnamtour.vn/uploads/1.png" />

        <link
          rel="apple-touch-icon"
          href="https://cdn.myvietnamtour.vn/uploads/1.png"
        />

        {/* OPEN GRAPH */}

        <meta property="og:type" content="article" />

        <meta property="og:site_name" content="Việt Nam Tour" />

        <meta property="og:title" content={p.title} />

        <meta property="og:description" content={p.description || ""} />

        <meta property="og:image" content={p.thumbnail_url || ""} />

        <meta property="og:url" content={currentUrl} />

        {/* TWITTER */}

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={p.title} />

        <meta name="twitter:description" content={p.description || ""} />

        <meta name="twitter:image" content={p.thumbnail_url || ""} />

        {/* BLOG POSTING SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",

            "@type": "BlogPosting",

            headline: p.title,

            description: p.description,

            image: p.thumbnail_url,

            datePublished: p.created_at,

            dateModified: p.updated_at || p.created_at,

            author: {
              "@type": "Organization",

              name: (data.creator && data.creator.name) || "Việt Nam Tour",
            },

            publisher: {
              "@type": "Organization",

              name: "Việt Nam Tour",

              logo: {
                "@type": "ImageObject",

                url: "https://cdn.myvietnamtour.vn/uploads/1.png",
              },
            },

            mainEntityOfPage: {
              "@type": "WebPage",

              "@id": currentUrl,
            },
          })}
        </script>
      </Helmet>

      {/* =================================================
          MOBILE / TOP ACTIONS
      ================================================= */}

      <div className="blog-top-actions">
        <div className="blog-container">
          <button
            type="button"
            className="blog-back-btn"
            onClick={() => navigate(-1)}
          >
            <FaChevronLeft />

            <span>Quay lại</span>
          </button>

          <div className="blog-share-actions">
            <button
              type="button"
              aria-label="Chia sẻ Facebook"
              onClick={handleFacebookShare}
            >
              <FaFacebookF />
            </button>

            <button
              type="button"
              aria-label="Chia sẻ bài viết"
              onClick={handleShare}
            >
              <FaShareAlt />
            </button>
          </div>
        </div>
      </div>

      {/* =================================================
          HERO
      ================================================= */}

      <header className="blog-hero">
        <div className="blog-container">
          <div className="blog-hero-grid">
            {/* TEXT */}

            <div className="blog-hero-content">
              <div className="blog-category">CẨM NANG DU LỊCH</div>

              <h1>{p.title}</h1>

              {p.description && (
                <p className="blog-hero-description">{p.description}</p>
              )}

              <div className="blog-meta">
                <div>
                  <FaUser />

                  <span>
                    {(data.creator && data.creator.name) || "Việt Nam Tour"}
                  </span>
                </div>

                <div>
                  <FaCalendarAlt />

                  <span>{formatDate(p.created_at)}</span>
                </div>

                <div>
                  <FaClock />

                  <span>{readingTime} phút đọc</span>
                </div>
              </div>
            </div>

            {/* IMAGE */}

            <div className="blog-hero-image">
              {p.thumbnail_url && (
                <img src={p.thumbnail_url} alt={p.title} loading="eager" />
              )}

              <div className="blog-image-label">
                <FaMapMarkerAlt />
                Khám phá Việt Nam
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =================================================
          CONTENT
      ================================================= */}

      <main className="blog-main">
        <div className="blog-container">
          <div className="blog-main-grid">
            {/* =============================================
                ARTICLE
            ============================================= */}

            <article className="blog-article">
              {/* DESCRIPTION MOBILE / INTRO */}

              {p.description && (
                <div className="blog-intro">{p.description}</div>
              )}

              {/* ===========================================
                  TABLE OF CONTENTS
              =========================================== */}

              {toc.length > 0 && (
                <div className="blog-toc">
                  <button
                    type="button"
                    className="blog-toc-header"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    <div>
                      <span>MỤC LỤC</span>

                      <strong>Nội dung chính</strong>
                    </div>

                    <div className="blog-toc-status">
                      {isOpen ? "Thu gọn" : "Xem mục lục"}

                      <span className={isOpen ? "open" : ""}>▼</span>
                    </div>
                  </button>

                  {isOpen && (
                    <ol className="blog-toc-list">
                      {toc.map((item, index) => (
                        <li
                          key={item.id}
                          className={item.level === "h3" ? "sub-item" : ""}
                        >
                          <a href={`#${item.id}`}>
                            <span>{String(index + 1).padStart(2, "0")}</span>

                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              )}

              {/* ===========================================
                  RICH CONTENT
              =========================================== */}

              <div
                className="blog-rich-content"
                dangerouslySetInnerHTML={{
                  __html: processedContent,
                }}
              />

              {/* ===========================================
                  TAGS
              =========================================== */}

              {data.tags.length > 0 && (
                <div className="blog-tags">
                  <div className="blog-tags-heading">
                    <FaTag />
                    Chủ đề:
                  </div>

                  <div className="blog-tags-list">
                    {data.tags.map((tag) => (
                      <span key={tag.tag_id}>#{tag.tag_name}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* ===========================================
                  SHARE BOTTOM
              =========================================== */}

              <div className="blog-bottom-share">
                <div>
                  <strong>Thấy bài viết hữu ích?</strong>

                  <span>Chia sẻ cho bạn bè cùng khám phá nhé.</span>
                </div>

                <button type="button" onClick={handleShare}>
                  <FaShareAlt />
                  Chia sẻ
                </button>
              </div>
            </article>

            {/* =============================================
                SIDEBAR
            ============================================= */}

            <aside className="blog-sidebar">
              {/* RELATED */}

              <div className="blog-related">
                <div className="blog-sidebar-heading">
                  <span>KHÁM PHÁ THÊM</span>

                  <h3>Bài viết bạn sẽ thích</h3>
                </div>

                <div className="blog-related-list">
                  {data.relations.length > 0 ? (
                    data.relations.slice(0, 5).map((rel) => (
                      <button
                        type="button"
                        key={rel.post_id}
                        className="blog-related-card"
                        onClick={() => navigate(`/blog/${rel.slug}`)}
                      >
                        <img
                          src={rel.thumbnail_url}
                          alt={rel.title}
                          loading="lazy"
                        />

                        <div>
                          <h4>{rel.title}</h4>

                          <span>
                            <FaCalendarAlt />

                            {formatDate(rel.created_at)}
                          </span>

                          <div className="blog-related-more">
                            Xem bài viết
                            <FaChevronRight />
                          </div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="blog-related-empty">
                      Chưa có bài viết liên quan.
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}

              <div className="blog-tour-cta">
                <span>VIỆT NAM TOUR</span>

                <h3>Bạn đang lên kế hoạch cho chuyến đi?</h3>

                <p>
                  Khám phá các chương trình tour trong nước dành cho gia đình,
                  nhóm bạn và doanh nghiệp.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/danh-sach-tour")}
                >
                  Khám phá Tour
                  <FaChevronRight />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;

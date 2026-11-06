import React, { useEffect, useMemo, useState } from "react";

import API from "../../config/APINoToken";

import { useParams, useNavigate, Link } from "react-router-dom";

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

const SITE_URL = "https://myvietnamtour.vn";
const LOGO_URL = "https://cdn.myvietnamtour.vn/uploads/1.png";

const emptyData = () => ({
  post: {},
  creator: {},
  tags: [],
  relations: [],
});

const formatDate = (value) => {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};

const BlogDetail = () => {
  const { Slug } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(emptyData);

  const p = data.post || {};

  const currentUrl =
    SITE_URL + "/blog/" + encodeURIComponent(p.slug || Slug || "");

  /* TẠO MỤC LỤC */
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

    const headings = Array.from(doc.querySelectorAll("h2, h3"));

    const usedIds = new Set(
      Array.from(doc.querySelectorAll("[id]"))
        .filter((element) => !headings.includes(element))
        .map((element) => element.id),
    );

    const tocData = headings.map((heading, index) => {
      const headingText =
        heading.textContent && heading.textContent.trim()
          ? heading.textContent.trim()
          : "Mục " + (index + 1);

      const baseId =
        heading.id || toSlug(headingText) || "section-" + (index + 1);

      let id = baseId;
      let suffix = 2;

      while (usedIds.has(id)) {
        id = baseId + "-" + suffix;
        suffix += 1;
      }

      usedIds.add(id);
      heading.id = id;

      return {
        id: id,
        text: headingText,
        level: heading.tagName.toLowerCase(),
      };
    });

    const textContent =
      doc.body && doc.body.textContent
        ? doc.body.textContent.replace(/\s+/g, " ").trim()
        : "";

    const totalWords = textContent ? textContent.split(/\s+/).length : 0;

    return {
      processedContent: doc.body ? doc.body.innerHTML : "",
      toc: tocData,
      readingTime: Math.max(1, Math.ceil(totalWords / 220)),
    };
  }, [p.content]);

  /* LẤY NỘI DUNG BÀI VIẾT */
  useEffect(() => {
    let active = true;

    setLoading(true);
    setData(emptyData());

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    const fetchPost = async () => {
      if (!Slug) {
        if (active) {
          setLoading(false);
        }
        return;
      }

      try {
        const response = await API.get(
          "/post/slug/" + encodeURIComponent(Slug),
        );

        const post =
          response && response.data && response.data.data
            ? response.data.data
            : {};

        if (!active) return;

        if (!post.post_id) {
          setData(emptyData());
          setLoading(false);
          return;
        }

        setData({
          post: post,
          creator: post.creator || {},
          tags: Array.isArray(post.tags) ? post.tags : [],
          relations: [],
        });

        // Hiển thị bài chính trước
        setLoading(false);

        // Tải bài liên quan độc lập
        try {
          const relatedResponse = await API.post("/post/getRelation", {
            post_id: post.post_id,
            category_id: post.category_id,
          });

          if (!active) return;

          const result =
            relatedResponse && relatedResponse.data && relatedResponse.data.data
              ? relatedResponse.data.data
              : [];

          const relations = Array.isArray(result)
            ? result.filter(
                (item) => Number(item.post_id) !== Number(post.post_id),
              )
            : [];

          setData((previous) => ({
            ...previous,
            relations: relations,
          }));
        } catch (relatedError) {
          if (active) {
            console.error("Lỗi lấy bài liên quan:", relatedError);
          }
        }
      } catch (error) {
        if (active) {
          console.error("Lỗi lấy bài viết:", error);

          setData(emptyData());
          setLoading(false);
        }
      }
    };

    fetchPost();

    return () => {
      active = false;
    };
  }, [Slug]);

  /* MỤC LỤC MOBILE */
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsOpen(window.innerWidth > 768);
    }
  }, [Slug]);

  /* CHIA SẺ */
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
      console.error("Không thể chia sẻ:", error);
    }
  };

  const handleFacebookShare = () => {
    const url =
      "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(currentUrl);

    window.open(url, "_blank", "noopener,noreferrer,width=700,height=600");
  };

  /* LOADING */
  if (loading) {
    return (
      <div className="blog-detail-loader">
        <FaCompass className="blog-loader-icon" />

        <strong>Đang khám phá...</strong>

        <span>Việt Nam Tour đang chuẩn bị nội dung cho bạn</span>
      </div>
    );
  }

  /* NOT FOUND */
  if (!p.post_id) {
    return (
      <div className="blog-not-found">
        <Helmet>
          <title>Không tìm thấy bài viết | Việt Nam Tour</title>

          <meta name="robots" content="noindex, follow" />
        </Helmet>

        <FaCompass />

        <h2>Không tìm thấy bài viết</h2>

        <p>Bài viết có thể đã được thay đổi hoặc không còn tồn tại.</p>

        <Link to="/blog" className="blog-back-home">
          <FaChevronLeft />
          Quay lại Blog
        </Link>
      </div>
    );
  }

  /* BLOG POSTING SCHEMA */
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": currentUrl + "#article",
    headline: p.title,
    description: p.description || "",
    image: p.thumbnail_url ? [p.thumbnail_url] : [],
    datePublished: p.created_at,
    dateModified: p.updated_at || p.created_at,

    author: {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "Việt Nam Tour",
      url: SITE_URL + "/",
    },

    publisher: {
      "@type": "Organization",
      "@id": SITE_URL + "/#organization",
      name: "Việt Nam Tour",
      url: SITE_URL + "/",

      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
  };

  return (
    <div className="blog-detail-page">
      {/* SEO META */}
      <Helmet>
        <title>{p.title} | Việt Nam Tour</title>

        <meta name="description" content={p.description || ""} />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link rel="canonical" href={currentUrl} />

        <link rel="icon" href={LOGO_URL} />

        <meta property="og:type" content="article" />

        <meta property="og:site_name" content="Việt Nam Tour" />

        <meta property="og:title" content={p.title} />

        <meta property="og:description" content={p.description || ""} />

        <meta property="og:image" content={p.thumbnail_url || ""} />

        <meta property="og:url" content={currentUrl} />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={p.title} />

        <meta name="twitter:description" content={p.description || ""} />

        <meta name="twitter:image" content={p.thumbnail_url || ""} />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* TOP ACTIONS */}
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

      {/* HERO */}
      <header className="blog-hero">
        <div className="blog-container">
          <div className="blog-hero-grid">
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
                    {data.creator && data.creator.name
                      ? data.creator.name
                      : "Việt Nam Tour"}
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

      {/* MAIN */}
      <main className="blog-main">
        <div className="blog-container">
          <div className="blog-main-grid">
            {/* ARTICLE */}
            <article className="blog-article">
              {p.description && (
                <div className="blog-intro">{p.description}</div>
              )}

              {/* TABLE OF CONTENTS */}
              {toc.length > 0 && (
                <div className="blog-toc">
                  <button
                    type="button"
                    className="blog-toc-header"
                    onClick={() => setIsOpen((previous) => !previous)}
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
                      {toc.map((item) => (
                        <li
                          key={item.id}
                          className={item.level === "h3" ? "sub-item" : ""}
                        >
                          <a href={"#" + item.id}>{item.text}</a>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              )}

              {/* RICH CONTENT */}
              <div
                className="blog-rich-content"
                dangerouslySetInnerHTML={{
                  __html: processedContent,
                }}
              />

              {/* TAGS */}
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

              {/* SHARE */}
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

            {/* SIDEBAR */}
            <aside className="blog-sidebar">
              <div className="blog-related">
                <div className="blog-sidebar-heading">
                  <span>KHÁM PHÁ THÊM</span>

                  <h3>Bài viết bạn sẽ thích</h3>
                </div>

                <div className="blog-related-list">
                  {data.relations.length > 0 ? (
                    data.relations
                      .filter((rel) => Boolean(rel.slug))
                      .slice(0, 5)
                      .map((rel) => (
                        <Link
                          key={rel.post_id}
                          className="blog-related-card"
                          to={"/blog/" + encodeURIComponent(rel.slug)}
                        >
                          {rel.thumbnail_url && (
                            <img
                              src={rel.thumbnail_url}
                              alt={rel.title || ""}
                              loading="lazy"
                            />
                          )}

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
                        </Link>
                      ))
                  ) : (
                    <div className="blog-related-empty">
                      Chưa có bài viết liên quan.
                    </div>
                  )}
                </div>
              </div>

              {/* TOUR CTA */}
              <div className="blog-tour-cta">
                <span>VIỆT NAM TOUR</span>

                <h3>Bạn đang lên kế hoạch cho chuyến đi?</h3>

                <p>
                  Khám phá các chương trình tour trong nước dành cho gia đình,
                  nhóm bạn và doanh nghiệp.
                </p>

                <Link to="/danh-sach-tour" className="blog-tour-cta-link">
                  Khám phá Tour
                  <FaChevronRight />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;

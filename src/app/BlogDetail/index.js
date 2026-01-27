import React, { useState, useEffect } from "react";
import API from "../../config/APINoToken";
import { useParams, useNavigate } from "react-router-dom";
import { toSlug } from "../../Components/ToSlug";
import { Helmet } from "react-helmet";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPaperPlane,
  FaChevronLeft,
  FaCompass,
} from "react-icons/fa";
import "./index.css";

const BlogDetail = () => {
  //const { idSlug } = useParams();
  const { Slug } = useParams();
  const navigate = useNavigate();
  //const postId = idSlug ? idSlug.split("-").pop() : null;
  //console.log(Slug);

  const [data, setData] = useState({
    post: {},
    creator: {},
    tags: [],
    relations: [],
  });
  const [loading, setLoading] = useState(true);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await API.get(`/post/slug/${Slug}`);
  //     const post = res.data.data || {};
  //     const rel = await API.post("/post/getRelation", {
  //       post_id: postId,
  //       category_id: post.category_id,
  //     });
  //     setData({
  //       post,
  //       creator: post.creator || {},
  //       tags: post.tags || [],
  //       relations: rel.data.data || [],
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const getData = async () => {
    try {
      setLoading(true);

      // 1. Gọi API lấy chi tiết bài viết qua Slug trước
      const res = await API.get(`/post/slug/${Slug}`);
      const post = res.data.data || {};

      // Kiểm tra nếu không tìm thấy post thì không gọi tiếp API liên quan
      if (post.post_id) {
        // 2. Lấy thông tin liên quan dựa trên dữ liệu từ API post vừa trả về
        const rel = await API.post("/post/getRelation", {
          post_id: post.post_id, // Lấy post_id từ kết quả res
          category_id: post.category_id, // Lấy category_id từ kết quả res
        });

        // 3. Cập nhật tất cả vào state
        setData({
          post,
          creator: post.creator || {},
          tags: post.tags || [],
          relations: rel.data.data || [],
        });
      } else {
        console.warn("Không tìm thấy bài viết");
      }
    } catch (e) {
      console.error("Lỗi khi lấy dữ liệu bài viết:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getData();
  }, [Slug]);

  if (loading)
    return (
      <div className="travel-loader">
        <span>
          <FaCompass className="spin" /> Đang khám phá...
        </span>
      </div>
    );

  const p = data.post;
  const currentUrl = window.location.href;

  return (
    <div className="lifestyle-layout">
      <Helmet>
        {/* SEO cơ bản */}
        <title>{p.title}</title>
        <meta name="description" content={p.description} />
        <meta
          name="keywords"
          content={data.tags.map((t) => t.tag_name).join(", ")}
        />
        Favicon (logo tròn trên Google)
        <link rel="icon" href="https://cdn.myvietnamtour.vn/uploads/1.png" />
        <link
          rel="apple-touch-icon"
          href="https://cdn.myvietnamtour.vn/uploads/1.png"
        />
        {/* Facebook Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={p.title} />
        <meta property="og:description" content={p.description} />
        <meta property="og:image" content={p.thumbnail_url} />
        <meta property="og:url" content={currentUrl} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={p.title} />
        <meta name="twitter:description" content={p.description} />
        <meta name="twitter:image" content={p.thumbnail_url} />
        {/* Khai báo Site name với Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Việt Nam Tour",
            alternateName: "Việt Nam Tour",
            url: "https://myvietnamtour.vn",
          })}
        </script>
        {/* Khai báo thương hiệu */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Việt Nam Tour",
            url: "https://myvietnamtour.vn",
            logo: "https://cdn.myvietnamtour.vn/uploads/1.png",
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <nav className="lifestyle-nav">
        <div className="container d-flex justify-content-between align-items-center">
          {/* <button className="back-circle" onClick={() => navigate(-1)}>
            <FaChevronLeft />
          </button>
          <div className="nav-brand">Chi tiết</div> */}
          <div style={{ width: "45px" }}></div> {/* Giữ cân bằng layout */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="lifestyle-hero container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="hero-text-content">
              <span className="lifestyle-badge">HÀNH TRÌNH KHÁM PHÁ</span>
              <h1 className="lifestyle-title">{p.title}</h1>
              <div className="lifestyle-meta">
                <div className="author-name">
                  Đăng bởi <strong>{data.creator.name}</strong>
                </div>
                <span className="dot"></span>
                <span className="date-text">
                  <FaCalendarAlt /> {p.created_at}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-image-frame">
              <img src={p.thumbnail_url} alt={p.title} />
              <div className="location-tag">
                <FaMapMarkerAlt /> THƯ VIỆN ẢNH
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="lifestyle-content container">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-card">
              {/* Description nhỏ lại và tinh tế */}
              <p className="small-description">{p.description}</p>

              <div
                className="rich-text-area"
                dangerouslySetInnerHTML={{ __html: p.content }}
              />

              <div className="tags-flex">
                {data.tags.map((t) => (
                  <span key={t.tag_id} className="tag-item">
                    #{t.tag_name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sticky-sidebar">
              <div className="related-section">
                <h3 className="section-title">BÀI VIẾT BẠN SẼ THÍCH</h3>
                {data.relations.map((rel) => (
                  <div
                    key={rel.post_id}
                    className="lifestyle-rel-card"
                    onClick={() => navigate(`/blog/${rel.slug}`)}
                  >
                    <img src={rel.thumbnail_url} alt="" />
                    <div className="rel-card-info">
                      <h4>{rel.title}</h4>
                      <small>{rel.created_at}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;

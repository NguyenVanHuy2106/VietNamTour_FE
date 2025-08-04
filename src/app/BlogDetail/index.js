import React, { useState, useEffect } from "react";

import API from "../../config/APINoToken";
import { useLocation } from "react-router-dom";
import "./index.css";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { postId } = location.state || {};
  const [dataPostDetail, setDataPostDetail] = useState([]);
  const [dataTag, setDataTag] = useState([]);
  const [dataCreator, setDataCreator] = useState({});
  const [dataRelationPost, setDataRelationPost] = useState([]);
  let [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await API.get(`/post/${postId}`);
      setDataPostDetail(response.data.data || []);
      setDataTag(response.data.data.tags || []);
      setDataCreator(response.data.data.creator);
      getRelationTours(response.data.data.category_id);
    } catch (error) {
      console.error(
        "Lỗi khi lấy danh sách loại Tour:",
        error.response || error
      );
    } finally {
      setLoading(false);
    }
  };
  const getRelationTours = async (category_id) => {
    //console.log(destination);
    try {
      const response = await API.post("/post/getRelation", {
        post_id: postId,
        category_id: category_id,
      });
      setDataRelationPost(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy chi tiết Tour:", error.response || error);
    } finally {
      setLoading(false);
    }
  };
  const handleGoToDetail = (postId) => {
    navigate("/blog-detail", { state: { postId: postId } });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, [postId]);
  return (
    <div className="container d-flex" style={{ marginTop: "20px" }}>
      <div className="bg-gray-50 font-sans text-gray-800 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 col-9">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Tiêu đề */}
          <div className="title">{dataPostDetail.title}</div>
          <div className="ContainerCombo">
            <div className="combo">
              <FaCalendarAlt />
              {dataPostDetail.created_at}
            </div>
            <div className="combo">
              <FaUser />
              {dataCreator.name}
            </div>
          </div>
          <div className="ContainerCombo">
            {dataTag.length > 0 ? (
              <div className="d-flex flex-wrap">
                {dataTag.map((tag) => (
                  <div className="TagDetail" key={tag.tag_id}>
                    {tag.tag_name}
                  </div>
                ))}
              </div>
            ) : (
              <span>""</span>
            )}
          </div>
          <div className="p-6 sm:p-8 md:p-10">
            {/* Mô tả ngắn */}
            <p className="description">{dataPostDetail.description}</p>

            {/* Phần nội dung có thể được thêm vào đây nếu cần */}
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: dataPostDetail.content }}
            />
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="titleRelation">BÀI VIẾT LIÊN QUAN</div>
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          {dataRelationPost.map((reBlog) => (
            <div
              className="cardDetail"
              onClick={() => handleGoToDetail(reBlog.post_id)}
            >
              <img
                src={reBlog.thumbnail_url}
                alt={reBlog.title}
                className="card-img"
              />
              <div className="card-title">{reBlog.title}</div>

              <div className="card-meta">
                <div className="combo">
                  <FaCalendarAlt />
                  <span>{reBlog.created_at}</span>
                </div>
                <div className="combo">
                  <FaUser />
                  <span>{dataCreator.name}</span>
                </div>
              </div>

              <div className="card-description">{reBlog.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

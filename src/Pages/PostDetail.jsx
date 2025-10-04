import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postsApi } from "../hooks/posts.js";
import { commentsApi } from "../hooks/comment.js"; 

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => { 
      const data = await postsApi.getPost(id);
      setPost(data);
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getComments = async () => {
      const data = await commentsApi.getComments(id);
      setComments(data);
    };
    getComments();
  }, [id]);

  if (!post) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-3">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/`)}
          >
            Uyga qaytish
          </button>
        </div>
      </div>

      <h4>Kommentlar</h4>
      <div className="d-flex flex-column gap-3">
        {comments.map((comments) => (
          <div key={comments.id} className="card">
            <div className="card-body">
              <h6 className="card-title">{comments.name}</h6>
              <p className="card-text">{comments.body}</p>
              <small className="text-muted">{comments.email}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;

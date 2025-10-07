import React from "react";
import "../styles/List.css";

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      <h2>🌸 Những cảm xúc gần đây</h2>
      {posts.length === 0 && <p>Chưa có bài nào, hãy chia sẻ nhé!</p>}
      {posts.map((p) => (
        <div key={p.id} className="post-card fade-in">
          <h3>{p.title}</h3>
          <p className="emotion">💖 {p.emotion}</p>
          <p className="content">{p.content}</p>
          <small className="date">
            🕒 {new Date(p.date || p.id).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}

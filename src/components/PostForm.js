import React, { useState } from "react";
import "../styles/Form.css";

export default function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [emotion, setEmotion] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !emotion || !content)
      return alert("Hãy điền đủ thông tin nhé 💖");

    const newPost = {
      id: Date.now(),
      title,
      emotion,
      content,
      date: new Date().toISOString(),
    };

    onAddPost(newPost);
    setTitle("");
    setEmotion("");
    setContent("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>📝 Viết cảm xúc hôm nay</h2>
      <input
        type="text"
        placeholder="Tiêu đề bài viết..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cảm xúc (vui, buồn, hồi hộp...)"
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
      />
      <textarea
        placeholder="Viết những điều bạn muốn chia sẻ..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Đăng bài 💌</button>
    </form>
  );
}

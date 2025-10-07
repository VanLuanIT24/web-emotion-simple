import React, { useState, useEffect } from "react";
import { initialPosts } from "./data";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("emotionPosts");
    return saved ? JSON.parse(saved) : initialPosts;
  });
  const [filter, setFilter] = useState("Tất cả");
  const [text, setText] = useState("");
  const fullText = "💌 My Emotion Blog – Nơi lưu giữ cảm xúc mỗi ngày 🌿";

  useEffect(() => {
    localStorage.setItem("emotionPosts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i++));
      if (i > fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  const handleAddPost = (post) => {
    setPosts([post, ...posts]);
  };

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredPosts =
    filter === "Tất cả"
      ? posts
      : posts.filter((p) => p.emotion.toLowerCase() === filter.toLowerCase());

  return (
    <div className="app-container">
      <header>
        <h1 className="typing-text">{text}</h1>
        <select onChange={handleFilterChange} value={filter}>
          <option>Tất cả</option>
          <option>Vui</option>
          <option>Buồn</option>
          <option>Hào hứng</option>
          <option>Trầm lắng</option>
        </select>
      </header>

      <PostForm onAddPost={handleAddPost} />
      <PostList posts={filteredPosts} />

      <footer>Made with 💖 by Luan</footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { initialPosts } from "./data";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>💌 My Emotion Blog</h1>
        <p>Nơi lưu giữ cảm xúc và suy nghĩ mỗi ngày 🌿</p>
      </header>
      <PostForm onAddPost={handleAddPost} />
      <PostList posts={posts} />
      <footer>Made with 💖 by Luan</footer>
    </div>
  );
}

export default App;

import { useState } from "react";

const TweetForm = ({ onAddTweet }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTweet(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "24px",
        display: "flex",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="¿Qué estás pensando?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flexGrow: 1,
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          backgroundColor: "#1DA1F2",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Tweet
      </button>
    </form>
  );
};

export default TweetForm;

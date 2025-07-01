const Tweet = ({ tweet, onLike }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
      }}
    >
      <p>{tweet.text}</p>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        <em>Publicado por: {tweet.author}</em>
      </p>
      <button
        onClick={() => onLike(tweet.id)}
        style={{
          cursor: "pointer",
          border: "none",
          backgroundColor: "transparent",
          color: "red",
          fontSize: "1.1rem",
        }}
      >
        ❤ {tweet.likes}
      </button>
    </div>
  );
};

export default Tweet;

import { useState, useEffect } from "react";
import TweetList from "../components/TweetList";
import TweetForm from "../components/TweetForm";

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(storedTweets);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      author: user.username
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    setTweets(
      tweets.map(tweet =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "32px" }}>
      <h1>Bienvenido a Twitter</h1>
      {user && (
        <div style={{ marginBottom: "24px" }}>
          <p>
            Hola, <strong>{user.username}</strong>!
          </p>
          <button
            onClick={logout}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Cerrar sesión
          </button>
        </div>
      )}
      <TweetForm onAddTweet={addTweet} />
      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
  );
};

export default Home;

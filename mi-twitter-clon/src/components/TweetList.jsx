import Tweet from "./Tweet";

const TweetList = ({ tweets, onLike }) => {
  if (tweets.length === 0) {
    return <p>No hay tweets aún. ¡Sé el primero en publicar!</p>;
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </div>
  );
};

export default TweetList;

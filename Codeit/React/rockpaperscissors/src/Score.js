import "./Score.css";

function Score({ className, score, name }){
  return(
    <div className={className}>
      <div className="Score-num">{score}</div>
      <div className="Score-name">{name}</div>
    </div>
  );
}

export default Score;
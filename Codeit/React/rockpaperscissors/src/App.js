import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import Score from "./Score";
import { compareHand, generateRandomHand } from './utils';
import resetIcon from "./asset/ic-reset.svg";
import './App.css';
import './Box.css';
import './Hand.css';

const INITIAL_VALUE = 'rock';

function getResult(me, other){
  const comparison = compareHand(me,other);
  if(comparison > 0) return '승리';
  if(comparison < 0) return '패배';
  return '무승부';
}

function App(){
  const [hand,setHand] = useState(INITIAL_VALUE);
  const [otherHand,setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore,setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [state, setState] = useState("");
  const [otherState, setOtherState] = useState("");

  const handleButtonClick = (nextHand) =>{
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand,nextOtherHand);

    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory,nextHistoryItem]);
    if(comparison > 0){
      setScore(score + bet);
      setState("-winner");
      setOtherState("");
    }
    else if(comparison < 0){
      setOtherScore(otherScore + bet);
      setOtherState("-winner");
      setState("");
    }
    else{
      setState("");
      setOtherState("");
    }
  };

  const handleClearClick = () =>{
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
    setState("");
    setOtherState("");
  };


  const handleBetChange = (e) =>{
    let newBet = Number(e.target.value)
    if(newBet<1) newBet=1;
    if(newBet>9) newBet=9;
    newBet = Math.round(newBet);
    setBet(newBet);
  };

  return (
    <div id="root">
      <div className="App">
        <h1 className="App-heading">가위바위보</h1>
        <Button className="App-reset" onClick={handleClearClick} src={resetIcon}></Button>
        <div className="App-scores">
          <Score className="Score" score={score} name={"나"}></Score>
          <div className="App-versus">:</div>
          <Score className="Score" score={otherScore} name={"상대"}></Score>
        </div>
        <div className="Box App-box">
          <div className="Box-inner">
            <div className="App-hands">
              <div className={"Hand"+state}>
                <HandIcon className="Hand-icon" value = {hand}/>
              </div>
              <div className="App-versus">VS</div>
              <div className={"Hand"+otherState}>
                <HandIcon className="Hand-icon" value = {otherHand}/>
              </div>
            </div>
            <div className="App-bet">
              <span>배점</span>
              <input type="number" value={bet} min={1} max={9} step={1} onChange={handleBetChange}/>
              <span>배</span>
            </div>
            <div className="App-history">
              <h2>승부기록</h2>
              <p>{gameHistory.join(', ')}</p>
            </div>
          </div>
        </div>
        <div>
          <HandButton className="HandButton" value="rock" onClick={handleButtonClick}/>
          <HandButton className="HandButton" value="scissor" onClick={handleButtonClick}/>
          <HandButton className="HandButton" value="paper" onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
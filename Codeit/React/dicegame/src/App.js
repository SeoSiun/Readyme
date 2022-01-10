import { useState } from 'react';
import Button from './Button';
import Board from "./Board";
import './App.css';
import logo from './asset/logo.png';

function random(n){
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);
  const [myState, setMyState] = useState(0);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    setMyHistory([...myHistory,nextMyNum]);

    const nextOtherNum = random(6);
    setOtherHistory([...otherHistory,nextOtherNum]);

    
    const mySum = myHistory.reduce((a,b)=>a+b,0) + nextMyNum;
    const otherSum = otherHistory.reduce((a,b)=>a+b,0) + nextOtherNum;

    if(mySum>otherSum) setMyState(1);
    else if(mySum === otherSum) setMyState(0);
    else setMyState(-1);
  }

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
    setMyState(0);
  }

  return (
    <div id="root">
      <div className="App">
        <div>
          <img className="App-logo" src={logo} alt="주사위게임 로고"/>
          <h1 className="App-title">주사위게임</h1>
          <div>
            <Button className="App-button" onClick={handleRollClick} color="blue">던지기</Button>
            <Button className="App-button" onClick={handleClearClick} color="red">처음부터</Button>
          </div>
        </div>
        <div className="App-boards">
          <Board className="Board App-board" name="나" color="blue" gameHistory={myHistory} state={myState}/>
          <Board className="Board App-board" name="상대" color="red" gameHistory={otherHistory} state={-myState}/>
        </div>
      </div>
    </div>
  );
}

export default App;

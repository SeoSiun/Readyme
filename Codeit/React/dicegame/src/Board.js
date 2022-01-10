import Dice from './Dice';
import './Board.css';

function Board({ name, color, gameHistory, className, state }) {
  const num = gameHistory[gameHistory.length-1] || 1;
  const sum = gameHistory.reduce((a,b)=>a+b,0);
  
  if(state===1) className = className+' Board-winner';
  return (
    <div className={className}>
      <h2 className='Board-heading'>{name}</h2>
      <Dice color={color} num={num}/>
      <h2 className='Board-heading'>총점</h2>
      <p>{sum}</p>
      <h2 className='Board-heading'>기록</h2>
      <p>{gameHistory.join(', ')}</p>
    </div>
    );
}

export default Board;

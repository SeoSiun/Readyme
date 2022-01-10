import './Button.css';

function Button({children, onClick, color='blue', className = ''}){
  // const style = color === 'red' ? redButtonStyle : blueButtonStyle;
  const classNames = `Button ${color} ${className}`;
  return <button className = {classNames} onClick={onClick}>{children}</button>;
}

export default Button;


/* 주석처리한 부분은 Button.css를 import한 것으로 대체됨 */

// const baseButtonStyle = {
//   padding: '14px 27px',
//   outline: 'none',
//   cursor: 'pointer',
//   borderRadius: '30px',
//   fontSize: '17px'
// };

// const blueButtonStyle = {
//   ...baseButtonStyle,
//   border: 'solid 1px #7090ff',
//   backgroundColor: 'rgba(0,89,255,0.2)',
//   color: '#7090ff',
// };

// const redButtonStyle = {
//   ...baseButtonStyle,
//   border: 'solid 1px #ff4664',
//   backgroundColor: 'rgba(255,78,78,0.2)',
//   color: '#ff4664',
// };
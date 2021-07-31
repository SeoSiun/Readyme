import './Button.css';

function Button({className, value, onClick}){
  const handleClick = () => onClick(value);
  return (<button className={className} onClick={handleClick}/>);
}

export default Button;
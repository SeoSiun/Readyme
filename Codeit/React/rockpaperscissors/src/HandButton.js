import HandIcon from "./HandIcon";
import './HandButton.css';

function HandButton({value, onClick, className}){
  const handleClick = () => onClick(value);

  return (
    <button className={className} onClick={handleClick}>
      <HandIcon calssName='HandButton-icon' value={value}/>
    </button>
  );
}

export default HandButton;
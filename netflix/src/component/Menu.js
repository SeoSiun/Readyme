import playImg from '../assets/movie_play.svg';
import allImg from '../assets/movie_all.svg';
import audioImg from '../assets/movie_audio.svg';
import removeImg from '../assets/movie_remove.svg';
import './Menu.css';

function init(type, season, episode){
  let title="";
  let src;
  let color="";
  switch(type){
    case "Play":
      title = `Play S${season} E${episode}`;
      src = playImg;
      color="White";
      break;
    case "All":
      title = "All episodes";
      src = allImg;
      break;
    case "Audio":
      title = "Audio & Subtitles";
      src = audioImg;
      break;
    case "Remove":
      title = "Remove from list";
      src=removeImg;
      break;
    default:
      return null;
  }
  return {src, title, color};
};

function Menu({ className, value, season=-1, episode=-1, onClick }){
  const {src, title, color} = init(value, season, episode);
  const handleClick = () => onClick(value);

  return(
    <button className={className} onClick={handleClick}>
      <img className="Menu-icon" src={src} alt="menu icon"/>
      <h4 className={"Menu-title"+color}>{title}</h4>
    </button>
  );
}

export default Menu;
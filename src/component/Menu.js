import playImg from '../assets/movie_play.svg';
import allImg from '../assets/movie_all.svg';
import audioImg from '../assets/movie_audio.svg';
import removeImg from '../assets/movie_remove.svg';

function init(type, season, episode){
  let title="";
  let src;
  switch(type){
    case "Play":
      title = `Play S${season} E${episode}`;
      src = playImg;
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
  return {src, title};
};

function Menu({ className, type, season=-1, episode=-1 }){
  const {src, title} = init(type, season, episode);
  console.log(src);

  return(
    <div className={className}>
      <img className="Menu-icon" src={src} alt="menu icon"/>
      <h4 className="menu-title">{title}</h4>
    </div>
  );
}

export default Menu;
import starFill from '../assets/movie_star_fill.svg';
import starEmpty from '../assets/movie_star_empty.svg';
import './Movie.css';

function Movie({ className, title, star }){
  const stars = [];
  const year = 2020;
  const season = 4;
  const resolution = "Ultra 4K";
  const content = `This drama follows the political rivalries and romance of
  Queen Elizabeth II’s reign and the events that shaped the 
  second half of the 20th century.`;

  for(let i=0; i<star; i++){
    stars.push(starFill);
  }
  for(let i=0; i<(5-star); i++){
    stars.push(starEmpty);
  }
  

  return(
    <div className={className}>
      <h1 className="Movie-title">{title}</h1>
      <div className="Movie-stars">
        <img className="Movie-star" src={stars[0]} alt="star1"></img>
        <img className="Movie-star" src={stars[1]} alt="star2"></img>
        <img className="Movie-star" src={stars[2]} alt="star3"></img>
        <img className="Movie-star" src={stars[3]} alt="star4"></img>
        <img className="Movie-star" src={stars[4]} alt="star5"></img>
      </div>
      <div className="Movie-year">{year}</div>
      <div className="Movie-season">{season+" Season"}</div>
      <div className="Movie-resolution">{resolution}</div>
      <p className="Movie-content">{content}</p>
    </div>
  );

}

export default Movie;
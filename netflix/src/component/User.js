import './User.css';
import ellipse from '../assets/movie_ellipse.svg';

function User({ name, src, auth, className }){
  return(
    <div className={className}>
      <img className="User-image" src={src} alt="User"/>
      <img className="User-ellipse" src={ellipse} alt="ellips"/>
      <h2 className="User-name">{name}</h2>
      <h4 className="User-auth">{auth}</h4>
    </div>
  );
}

export default User;
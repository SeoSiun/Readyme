import userImg from './assets/movie_user.svg';
import prev from './assets/movie_btn_prev.svg';
import next from './assets/movie_btn_next.svg';
import logo from './assets/movie_nexflix.svg';
import movieImg from './assets/movie_img.svg';
import User from './component/User';
import Movie from './component/Movie';
import Menu from './component/Menu';

function App(){
  return(
    <div id="root">
      <User className="User App-user" name="Jacob Lee" src={userImg} auth="Admin"/>
      <div className="App-buttons">
        <img className="Button-prev" src={prev} alt="prev button"/>
        <img className="Button-next" src={next} alt="next button"/>
      </div>
      <img className="App-logo" src={logo} alt="logo"/>
      <div className="App-movie">
        <Movie className="Movie" title="The Crown" star={4}/>
      </div>
      <div className="App-menu">
        <Menu className="Menu menu1" type="Play" season={4} episode={10}/>
        <Menu className="Menu menu2" type="All"/>
        <Menu className="Menu menu3" type="Audio"/>
        <Menu className="Menu menu4" type="Remove"/>
      </div>
      <div className="App-MovieImg">
        <img className="Movie-img" src={movieImg} alt="Movie" /> 
      </div>
    </div>
  );
}

export default App;
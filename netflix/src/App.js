import userImg from './assets/movie_user.svg';
import logo from './assets/movie_netflix.svg';
import movieImg from './assets/movie_img.svg';
import User from './component/User';
import Movie from './component/Movie';
import Menu from './component/Menu';
import Button from './component/Button';
import './App.css';
import { useState } from 'react';

function App(){
  const [page, setPage] = useState(1);

  const handleButtonClick = (dir)=>{
    alert(dir);
    if(dir==="next") setPage(page+1);
    else if(dir==="prev") setPage(page-1);
  };
  const handleMenuClick = (menu)=>{
    alert(menu);
  };

  const GitCrawler = require('./gitCrawler'); 

  return(
    <div id="root">
      GitCrawler
      <div className="App">
        <h1>{page}</h1>

        <User className="User App-user" name="Jacob Lee" src={userImg} auth="Admin"/>
        <div className="App-buttons">
          <Button className="Button-prev" value="prev" onClick={handleButtonClick}/>
          <Button className="Button-next" value="next" onClick={handleButtonClick}/>
        </div>
        <img className="App-logo" src={logo} alt="logo"/>
        <div className="App-movie">
          <Movie className="Movie" title="The Crown" star={4}/>
        </div>
        <Menu className="App-menu1 Menu" value="Play" season={4} episode={10} onClick={handleMenuClick}/>
        <Menu className="App-menu2 Menu" value="All" onClick={handleMenuClick}/>
        <Menu className="App-menu3 Menu" value="Audio" onClick={handleMenuClick}/>
        <Menu className="App-menu4 Menu" value="Remove" onClick={handleMenuClick}/>
        <div className="App-movieImg">
          <img className="Movie-img" src={movieImg} alt="Movie" /> 
        </div>
      </div>
    </div>
  );
}

export default App;
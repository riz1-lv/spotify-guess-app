import React, {useEffect,useState} from "react";
import hash from "./hash.js";
import "./App.css";
import {getTopTracks} from './spotifyData.js'
import Login from "./components/Login.js";
import Quiz from "./components/Quiz.js";
import { Button } from './components/Button.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './components/Login.css'


let numCorrect=0;

 const App = () => {
  const [authToken,setAuthToken] = useState({token:null});
  const [render,setRender] = useState(false);
  const [completed,setCompleted] = useState(false);
  const [songNum, setSongNum] = useState(Math.floor(Math.random()*50));
  const [songCount,setSongCount] = useState(1);
  const [currentSong,setCurrentSong] = useState({
  item: {
    song:''
  }
});




const increaseNumCorrect = () =>{
  numCorrect++;
  console.log("u got "+numCorrect)
}



const incSongCount = () =>{
  setSongCount(songCount+1);
}


const increment = () =>{
  if(songNum < 49){
  setSongNum(songNum + 1)
  console.log(songNum);
  }
}

const decrement = ()=>{
  if(songNum > 0){
  setSongNum(songNum - 1);
  console.log(songNum);
  }
}

const random = ()=>{
  console.log(songNum)
  const rand = Math.floor(Math.random()*50)
  setSongNum(
    rand
  )
  
}
const getRandomSongName = () =>{
  let randName = currentSong.song.items[Math.floor(Math.random()*50)].name;
  console.log(randName)
  return randName;
}

useEffect(() => {
  if(songCount===12){
    setCompleted(true)
  }
}, [songCount])

useEffect(()=>{
    // Set token
    console.log(hash);
    let _token = hash.access_token;
    if (_token) {
      // Set token
      setAuthToken({
        token: _token
      }); 
    }
    if(authToken.token){
      getTopTracks(authToken.token).then(x=>setCurrentSong({song:x}))
    }
},[authToken.token])

  return (
    <div className="App">
      <div className="App-header">
      {!authToken.token && (
        <Login/>
      )}
      {render && <>
          <header id="title">
          <h1>
            Guess Your Spotify
          </h1>
          <div>{songCount}/12</div>
        </header>
          <div className={completed? "quiz":""}>
            <Quiz key={songNum} song={songNum} increaseNumCorrect={increaseNumCorrect} incSong={incSongCount} rand={random} dec={decrement} inc={increment} getRandName={getRandomSongName} songList={currentSong.song.items} songName={currentSong.song.items[songNum]} />
          </div>
        </>}
        {completed && <div>
            <h1>
              {`Congragulations you got ${numCorrect} correct! `} 
            </h1>   
            <Button className="btn-twitter" link={'https://twitter.com/intent/tweet?hashtags=GuessYourSpotify&&text=' +
              encodeURIComponent(' Find out how well you know your top spotify songs ')} buttonStyle="btn--primary"><FontAwesomeIcon icon={faTwitter} /></Button>
          </div>}
    
      <div id="start-btn" className={authToken.token ? 'player active' : 'player'}>
        <Button onClick={()=>{setRender(true); console.log(songNum); document.getElementById("start-btn").style.display="none"}}>Start Quiz</Button>
      </div>
      </div>
    </div>
  );
}
export default App;
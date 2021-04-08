import React, {useEffect,useState} from "react";
import hash from "./hash.js";
import "./App.css";
import {getTopTracks} from './spotifyData.js'
import Login from "./components/Login.js";
import Quiz from "./components/Quiz.js";

let numCorrect=0;

 const App = () => {
  const [authToken,setAuthToken] = useState({token:null});
  const [render,setRender] = useState(false);
  const [songNum, setSongNum] = useState(Math.floor(Math.random()*50));
  const [songCount,setSongCount] = useState(1);
  const [currentSong,setCurrentSong] = useState({
  item: {
    song:''
  }
});


if(songCount===12){
  setRender(false)
}

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
          <header>
          <h1>
            Guess Your Spotify
          </h1>
          <div>{songCount}/12</div>
        </header>
          <Quiz key={songNum} song={songNum} increaseNumCorrect={increaseNumCorrect} incSong={incSongCount} rand={random} dec={decrement} inc={increment} getRandName={getRandomSongName} songList={currentSong.song.items} songName={currentSong.song.items[songNum]} />
        </>}
    {authToken.token && (<>
      <button onClick={() => {console.log(currentSong); console.log(authToken)}}>state</button>
    </> 
    )}
      <div className={authToken.token ? 'player active' : 'player'}>
      <button onClick={()=>{setRender(true); console.log(songNum)}}>play 30 sec clip</button>
        
      </div>
      </div>
    </div>
  );
}
export default App;
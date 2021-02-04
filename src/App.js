import React, {useEffect,useState} from "react";
import hash from "./hash.js";
import "./App.css";
import {getTopTracks} from './spotifyData.js'
import Login from "./components/Login.js";

import Quiz from "./components/Quiz.js";


 const App = () => {
  const [authToken,setAuthToken] = useState({token:null});
  const [render,setRender] = useState(false);
  const [songNum, setSongNum] = useState(0);
  const [currentSong,setCurrentSong] = useState({
  item: {
    song:''
  }
});

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
  setSongNum(
    Math.floor(Math.random()*50)
  )
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
          <Quiz key={songNum} rand={random} dec={decrement} inc={increment} source={currentSong.song.items[songNum].preview_url} />
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
import React, {useEffect,useState} from "react";
import hash from "./hash.js";
import "./App.css";
import {getTopTracks} from './spotifyData.js'
import Login from "./components/Login.js";
import Player from "./components/Player.js";


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
    {authToken.token && (<>
      <button onClick={() => {console.log(currentSong); console.log(authToken)}}>state</button>
    </>  
    )}
      <div className={authToken.token ? 'player active' : 'player'}>
      <button onClick={()=>{setRender(true); console.log(songNum)}}>play 30 sec clip</button>
        {render && <>
          <Player key={songNum} source={currentSong.song.items[songNum].preview_url}/>
          <button onClick={()=>increment()}>next Song</button>
          <button onClick={()=>decrement()}>prev Song</button>
        </>}
      </div>
      </div>
    </div>
  );
}
export default App;
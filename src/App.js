import React, {useEffect,useState} from "react";
import hash from "./hash.js";
import logo from "./logo.svg";
import "./App.css";
import {getTopTracks} from './spotifyData.js'
import Login from "./components/Login.js";
import Player from "./components/Player.js";

// Replace with your app's client ID, redirect URI and desired scopes
// Get the hash of the url

/** 
class App extends Component {

  constructor() {
    super();
    this.state = {
      token: null,
    item: {
      album: {
        images: [{ url: "" }]
      },
      name: "",
      artists: [{ name: "" }],
      duration_ms:0,
    },
    is_playing: "Paused",
    progress_ms: 0
  };
  }
  */

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
  setSongNum(songNum + 1)
  console.log(songNum);
}

const decrement = ()=>{
  setSongNum(songNum - 1);
  console.log(songNum);
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
    
  },[])

  return (
    <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {!authToken.token && (
        <Login/>
      )}
    {authToken.token && (
      <button onClick={() => {getTopTracks(authToken.token).then(x=>setCurrentSong({song:x}))}}>Click me</button>
    )}
    <button onClick={() => {console.log(currentSong); console.log(authToken)}}>state</button>
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
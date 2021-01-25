import React, {useEffect,useState} from "react";
import hash from "./hash.js";
import logo from "./logo.svg";
import "./App.css";
import {authEndpoint, clientId, redirectUri, scopes } from './config.js'
import {getTopTracks} from './spotifyData.js'

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
  const [currentSong,setCurrentSong] = useState({
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
});
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
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {!authToken.token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
    {authToken.token && (
      <button onClick={() => getTopTracks(authToken.token)}>Click me</button>
    )}
    <button onClick={() => {console.log(currentSong); console.log(authToken)}}>state</button>
    {/**this.state.token && (
        // Spotify Player Will Go Here In the Next Step
    )*/}
      </header>
    </div>
  );
}
export default App;
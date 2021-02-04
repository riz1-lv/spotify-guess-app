
import {authEndpoint, clientId, redirectUri, scopes } from '../config.js'

import { Button } from './Button.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import './Login.css'



const Login = () => {
  
  return (<div className="login-element">
    <header>
      <h1 className="title">
        Guess Your Spotify
      </h1>
    </header>
    <div className="info-text">
      <p>
        You think you know your favorite songs? put that to the test in this short quiz, we'll show you a short snippet of your favorite
        songs, try to guess the name of the song and artist. Sign in to spotify below to get started!
      </p>
    </div>
    <section className="btns">
    <div>
      <Button className="btn btn--loginApp-link" link={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`} buttonStyle="btn--primary" buttonSize='btn--large'>Login to Spotify</Button>
    </div>
    <div>
      <Button className="btn-twitter" link={'https://twitter.com/intent/tweet?hashtags=GuessYourSpotify&&text=' +
    encodeURIComponent(' Find out how well you know your top spotify songs ')} buttonStyle="btn--primary"><FontAwesomeIcon icon={faTwitter} /></Button>
    </div>
    </section>
 </div> )
}

export default Login

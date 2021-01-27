import React, {useEffect, useState} from 'react'
import {authEndpoint, clientId, redirectUri, scopes } from '../config.js'
import hash from "../hash.js";


const Login = () => {

const [authToken,setAuthToken] = useState({token:null});

useEffect(()=>{
// Set token

let _token = hash.access_token;
if (_token) {
  // Set token
  setAuthToken({
    token: _token
  });
}
},[])
  
  return (
    <div>
      <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
    </div>
  )
}

export default Login

const fetch = require('node-fetch');

export async function getTopTracks(token){
  console.log("Bearer " + token)
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  })
  const data = await response.json();
  console.log(data)
  return(data);
}

//getTopTracks(authToken.token).then(x=>setCurrentSong({song:x}))
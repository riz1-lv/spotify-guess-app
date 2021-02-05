import React,{useEffect, useState} from 'react'
import { Button } from './Button'
import Player from './Player'
import './Quiz.css'

const playedSongs = new Set();

const Quiz = (props) => {
const reload = ()=>{props.rand()}


  const [guessSong, setGuessSong] = useState(props.songName);

  const nextSong = () =>{
   setGuessSong()
  }
  
  const getAllArtists = () =>{
    let artists = "";
    for(let i = 0; i < guessSong.artists.length; i++){
      if(i === guessSong.artists.length-1){
        artists += guessSong.artists[i].name;
      }
      else
        artists += guessSong.artists[i].name +", ";
    }
    return artists;
  }
const getButtonTitles = () =>{
  const buttons = [];
  
}
 
  useEffect(() => {
  if(props.songName.preview_url == null){
    reload();
    console.log(`${props.song} has a null preview uri`)
  }
  if(playedSongs.has(props.song)){
    reload();
    console.log(`song ${props.song} has been played already`)
  }
  playedSongs.add(props.song)
  console.log(playedSongs)
})

  return (
    <div>
      <header>
        <h1>
          Guess Your Spotify
        </h1>
      </header>
      <Player source={props.songName.preview_url} />
      <Button onClick={props.inc}>next Song</Button>
      <Button onClick={props.dec}>prev Song</Button>
      <Button onClick={props.rand}>random Song</Button>
      <div>
        <Button>{guessSong.name + " - " + getAllArtists()}</Button>
        <Button>{guessSong.name + " - " + getAllArtists()}</Button>
        <Button>{guessSong.name + " - " + getAllArtists()}</Button>
        <Button>{guessSong.name + " - " + getAllArtists()}</Button>
      </div>
      {console.log(guessSong)}
      {console.log(guessSong.name + " "+ getAllArtists())}
    </div>
  )
}

export default Quiz

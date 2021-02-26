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
  
  const getAllArtists = (songNumber) =>{
    let artists = "";
    for(let i = 0; i < props.songList[songNumber].artists.length; i++){
      if(i === props.songList[songNumber].artists.length-1){
        artists += props.songList[songNumber].artists[i].name;
      }
      else
        artists += props.songList[songNumber].artists[i].name +", ";
    }
    console.log(songNumber)
    return artists;
  }

  const getSongName = (songNumber) =>{
    let name = props.songList[songNumber].name;
    return name;
  }

  const getButtonTitles = () =>{
    const buttons = [];
    
}
 
  useEffect(() => { 
    console.log(props.songList[props.song])
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
      <Button onClick={props.getRandName}> get random song name </Button>
      <div>
        <Button>{getSongName(props.song) + " - " + getAllArtists(props.song)}</Button>
        <Button>{getSongName(props.song+1) + " - " + getAllArtists(props.song+1)}</Button>
        <Button>{getSongName(props.song+2) + " - " + getAllArtists(props.song+2)}</Button>
        <Button>{getSongName(props.song+3) + " - " + getAllArtists(props.song+3)}</Button>
        <Button>{getSongName(props.song+4) + " - " + getAllArtists(props.song+4)}</Button>
      </div>
    </div>
  )
}

export default Quiz

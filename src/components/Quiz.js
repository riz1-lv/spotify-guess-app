import React,{useEffect, useState} from 'react'
import { Button } from './Button'
import Player from './Player'
import PlayerButton from './PlayerButton';
import './Quiz.css'

const playedSongs = new Set();

let buttons = [0,1,2,3];

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

  const  getButtonTitles =  () =>{
    const values=[];
    for(let i = 0; i < 4; i++){
      values[i] = Math.floor(Math.random()*50)
    }
     buttons =  [...values];
     console.log(buttons);
     return buttons;
}
 
  useEffect(() => { 
    getButtonTitles()
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

const CheckSongName = () =>{
  /**
   * if(getSongName(props.song) == props.getChildren())
   *  changeState(correct);
   * 
   */

}

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
        <PlayerButton>{getSongName(props.song) + " \n- " + getAllArtists(props.song)}</PlayerButton>
        <PlayerButton>{getSongName(buttons[0]) + " \n- " + getAllArtists(buttons[0])}</PlayerButton>
        <PlayerButton>{getSongName(buttons[1]) + " \n- " + getAllArtists(buttons[1])}</PlayerButton>
        <PlayerButton>{getSongName(buttons[2]) + " \n- " + getAllArtists(buttons[2])}</PlayerButton>
        <PlayerButton>{getSongName(buttons[3]) + " \n- " + getAllArtists(buttons[3])}</PlayerButton>
      </div>
    </div>
  )
}

export default Quiz

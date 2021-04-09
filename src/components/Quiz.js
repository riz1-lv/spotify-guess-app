import React,{useEffect, useState} from 'react'
import { Button } from './Button'
import Player from './Player'
import PlayerButton from './PlayerButton';
import './Quiz.css'

//const playedSongs = new Set();
let buttons = [0,1,2,3,4];

const Quiz = (props) => {

const reload = ()=>{props.rand();}


  const [guessSong, setGuessSong] = useState(props.songName);
  const [disabled,setDisabled] = useState("")
  const [num, setNum] = useState(false)

  function Disabler()  {
    setDisabled("true");
  }
  
  const inc = () =>{
    setNum(!num);
  }

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
    return artists;
  }

  const getSongName = (songNumber) =>{
    let name = props.songList[songNumber].name;
    return name;
  }

  const  getButtonTitles =  () =>{
   
    for(let i = 0; i < buttons.length; i++){
        buttons[i] = Math.floor(Math.random()*50)
    }
    if(!buttons.includes(props.song)){
      buttons[Math.floor(Math.random()*5)] = props.song
    }
     console.log(buttons);
     
}
  function getButtonInfo(index){
    const song = getSongName(index);
    const artist = getAllArtists(index);

    return song + " \n- " + artist;
  }


  useEffect(() => {
    getButtonTitles()
    
  })

  useEffect(() => {
  inc()
  },[])

 
  useEffect(() => { 
    
    console.log(props.songList[props.song])
  if(props.songName.preview_url == null){
    reload();
    console.log(`${props.song} has a null preview uri`)
  }
  /**
  if(playedSongs.has(props.song)){
    reload();
    console.log(`song ${props.song} has been played already`)
  }
  playedSongs.add(props.song)
  console.log(playedSongs)
  */
})


  return (
    <div>
     
      <Player source={props.songList[props.song].preview_url} />
      <Button onClick={props.inc}>next Song</Button>
      <Button onClick={props.dec}>prev Song</Button>
      <Button onClick={()=>{props.rand(); props.incSong()}}>random Song</Button>
      <Button onClick={()=>console.log(buttons)}>buttons</Button>
      

      <div>
        <PlayerButton incCorrect={props.increaseNumCorrect} disabled={disabled} disabler = {Disabler} songplaying = {props.songName}>{getButtonInfo([buttons[0]])}</PlayerButton>
        <PlayerButton incCorrect={props.increaseNumCorrect} disabled={disabled}   key={num} songplaying = {props.songName}>{getButtonInfo([buttons[1]])}</PlayerButton>
        <PlayerButton incCorrect={props.increaseNumCorrect} disabled={disabled}  songplaying = {props.songName}>{getButtonInfo(buttons[2])}</PlayerButton>
        <PlayerButton incCorrect={props.increaseNumCorrect} songplaying = {props.songName}>{getButtonInfo(buttons[3])}</PlayerButton>
        <PlayerButton incCorrect={props.increaseNumCorrect} songplaying = {props.songName}>{getButtonInfo(buttons[4])}</PlayerButton>
      </div>
    </div>
  )
}

export default Quiz

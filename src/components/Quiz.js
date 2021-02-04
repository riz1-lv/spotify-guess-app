import React,{useEffect} from 'react'
import { Button } from './Button'
import Player from './Player'
import './Quiz.css'

const playedSongs = new Set();
const Quiz = (props) => {

  
  const reload = ()=>{props.rand()}

  useEffect(() => {
  
  if(props.source == null){
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
      <Player source={props.source} />
      <Button onClick={props.inc}>next Song</Button>
      <Button onClick={props.dec}>prev Song</Button>
      <Button onClick={props.rand}>random Song</Button>
      <Button/>

    </div>
  )
}

export default Quiz

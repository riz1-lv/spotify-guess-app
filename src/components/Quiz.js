import React,{useEffect} from 'react'
import { Button } from './Button'
import Player from './Player'
import './Quiz.css'


const Quiz = (props) => {
 
  const reload = ()=>{props.rand()}

useEffect(() => {
  if(props.source == null){
    reload();
    console.log('loaded a song with a not null preview uri')
  }
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

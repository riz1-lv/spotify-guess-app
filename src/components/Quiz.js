import React from 'react'
import { Button } from './Button'
import Player from './Player'
import './Quiz.css'


const Quiz = (props) => {
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
      <Button/>
      <Button/>

    </div>
  )
}

export default Quiz

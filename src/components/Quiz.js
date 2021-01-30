import React from 'react'
import { Button } from './Button'
import Player from './Player'
import './Quiz.css'


const Quiz = () => {
  return (
    <div>
      <header>
        <h1>
          Guess Your Spotify
        </h1>
      </header>
      <Player/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>

    </div>
  )
}

export default Quiz

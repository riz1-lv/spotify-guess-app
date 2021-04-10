
import React from 'react'
import './Player.css'
const Player = (props) => {

  return (
    <div>
       <audio id="player" className="audio-player" controls name="media">
          <source key={props.key} src={props.source} />
        </audio>
        <div> 
          {/** 
    <button onClick={()=>document.getElementById('player').play()}>Play</button> 
    <button onClick={()=>document.getElementById('player').pause()}>Pause</button> 
    <button onClick={()=>document.getElementById('player').volume += 0.1}>Vol +</button> 
    <button onClick={()=>document.getElementById('player').volume -= 0.1}>Vol -</button> 
    */}
</div>
    </div>
  )
}

export default Player

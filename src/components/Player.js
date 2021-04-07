
import React from 'react'

const Player = (props) => {

  return (
    <div>
       <audio controls name="media">
          <source key={props.key} src={props.source} />
        </audio>
    </div>
  )
}

export default Player


import React from 'react'

const Player = (props) => {

  return (
    <div>
       <video controls name="media">
          <source key={props.key} src={props.source} />
        </video>
    </div>
  )
}

export default Player

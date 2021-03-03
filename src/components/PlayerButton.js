import {React, useState} from 'react'
import "./PlayerButton.css"
import { Button } from './Button'

const PlayerButton = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
  
  const [click,setclick] = useState(false)
  
  const clicker = () =>{
    console.log("clicked")
    setclick(!click);
  }

  return ( <>
      <Button classesName={click ? 'unclicked' : 'clicked' } buttonStyle={buttonStyle} buttonSize={buttonSize} onClick={clicker} type={type} link={link} children={children}/>
      </>
  )
}

export default PlayerButton

import {React, useState, useEffect} from 'react'
import "./PlayerButton.css"
import { Button } from './Button'

const PlayerButton = ({children, type, buttons, onClick, buttonStyle, buttonSize, link, songplaying}) => {
  const [className,setClassName] = useState('unclicked')
  const [click,setclick] = useState(false)
  const [butn, setbutn] = useState(buttons)
 

  const clicker = () =>{
    console.log("clicked")
    if(children.includes(songplaying.name)){
      console.log("ok")
      setClassName("correct-ans");
      console.log(className);
    }
    setclick(!click);
  }
  useEffect(() => {
    setbutn(buttons)
 
  },[buttons,butn])

  return ( <>
      <Button classesName={click ? className : 'clicked' } buttonStyle={buttonStyle} buttonSize={buttonSize} onClick={clicker} type={type} link={link} children={children}>
        {children}</Button>
      </>
  )
}

export default PlayerButton

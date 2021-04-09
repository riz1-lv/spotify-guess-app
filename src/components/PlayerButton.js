import {React, useState, useEffect} from 'react'
import "./PlayerButton.css"
import { Button } from './Button'

const PlayerButton = ({children, type, buttons, onClick, buttonStyle, buttonSize, link, songplaying, incCorrect}) => {
  const [className,setClassName] = useState('clicked')
  const [click,setclick] = useState(false)
  const [butn, setbutn] = useState(buttons)
  const [disabled,setDisabled] = useState()
  const x = document.getElementsByClassName('unclicked btn  btn--primary btn--medium');
  const clicker = () =>{
    console.log("clicked")
  
    if(children.includes(songplaying.name)){
      setClassName("correct-ans");
      console.log(className);
     incCorrect()
     setDisabled(true)
    }
    for (let i = 0; i < x.length; i++) {
      x[i].disabled="true"
      x[i].classList.add("unselectable")
    }
    setclick(!click);
  }
  useEffect(() => {
    setbutn(buttons)
 
  },[buttons,butn])

  return ( <>
      <Button  classesName={click ? 'quizbtn '+className : 'unclicked'} buttonStyle={buttonStyle} buttonSize={buttonSize} disabled={disabled} onClick={clicker} type={type} link={link} children={children}>
        {children}</Button>
      </>
  )
}

export default PlayerButton

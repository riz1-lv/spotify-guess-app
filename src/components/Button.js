
import React from 'react'
import './Button.css'

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return(
    <a href={link} className="btn-mobile">
      <button className= {`btn ${checkStyle} ${checkSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </a>
  );
}

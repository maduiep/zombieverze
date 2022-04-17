import React from 'react'

import {
    ButtonContainer
} from './ButtonEl'

const Button = (props) => {
  return (
    <ButtonContainer href={props.link}>
        {props.children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </ButtonContainer>
  )
}

export default Button
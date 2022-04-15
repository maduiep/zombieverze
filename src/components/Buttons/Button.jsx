import React from 'react'

import {
    ButtonContainer
} from './ButtonEl'

const Button = (props) => {
  return (
    <ButtonContainer>
        {props.children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </ButtonContainer>
  )
}

export default Button
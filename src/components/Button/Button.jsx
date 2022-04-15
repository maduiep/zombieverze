import React from 'react'

import {
    ButtonContainer
} from './ButtonEl'

const Button = (props) => {
  return (
    <ButtonContainer>
      <button>
        {props.children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </ButtonContainer>
  )
}

export default Button
import React from 'react'

import {
    AboutBTNContainer
} from './AboutBTNEl'

const AboutBTN = (props) => {
  return (
    <AboutBTNContainer>
        {props.children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </AboutBTNContainer>
  )
}

export default AboutBTN
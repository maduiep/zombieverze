import React from 'react'

import {
    BTN
} from './HeaderBTNEl'

const HeaderBTN = (props) => {
  return (
    <BTN href={props.link}>
      {props.children}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </BTN>
  )
}

export default HeaderBTN
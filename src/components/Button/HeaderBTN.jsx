import React from 'react'

import {
    BTN
} from './HeaderBTNEl'

const HeaderBTN = (props) => {
  return (
    <BTN>
        <button>
            {props.children}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </BTN>
  )
}

export default HeaderBTN
import React from 'react'
import Navbar from '../Navbar/Navbar'

import {
    HeaderContainer,
} from './HeaderEl'

export const Header = (props) => {
  
  return (
    <HeaderContainer id="header" isOpen={props.isOpen} toggle={props.toggle}>
        <Navbar toggle={props.toggle}/>
    </HeaderContainer>
  )
}

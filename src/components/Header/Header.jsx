import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'

import {
    HeaderContainer,
} from './HeaderEl'

export const Header = (props) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //     setIsOpen(!isOpen)
  //     console.log('toggle nav')
  // }

  return (
    <HeaderContainer id="header" isOpen={props.isOpen} toggle={props.toggle}>
        <Navbar toggle={props.toggle}/>
    </HeaderContainer>
  )
}

import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'

import {
    HeaderContainer,
} from './HeaderEl'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <HeaderContainer isOpen={false} toggle={false}>
        <Navbar toggle={false}/>
    </HeaderContainer>
  )
}

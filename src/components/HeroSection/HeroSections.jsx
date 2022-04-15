import React from 'react'

import {
    HeroContainer,
    TextContainer,
    TextWrapper,
    IconHolder
} from './HeroSectionEl'

import Button from '../Button/Button';
import Icons from '../Icons/Icons';


const HeroSections = () => {
  return (
    <HeroContainer>
        <TextContainer>
          <TextWrapper>
            <h1>
              Welcome to <span>Zombieverze</span> 
            </h1>
            <p>The end approaches, but the apocalypse is long lived</p>
          </TextWrapper>
          <Button>MINT</Button>

          <IconHolder>
            <Icons />
          </IconHolder>
        </TextContainer>
    </HeroContainer>
  )
}

export default HeroSections
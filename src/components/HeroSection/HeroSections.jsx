import React from 'react'

import {
    HeroContainer,
    TextContainer,
    TextWrapper,
    IconHolder
} from './HeroSectionEl'

import Button from '../Buttons/Button';
import Icons from '../Icons/Icons';


const HeroSections = () => {
  return (
    <HeroContainer id="herosection">
        <TextContainer>
          <TextWrapper data-aos="zoom-in">
            <h1>
              Welcome to <span>Zombieverze</span> 
            </h1>
            <p data-aos="fade-up">The end approaches, but the apocalypse is long lived</p>
          </TextWrapper>
          <Button link={'http://mint.zombieverze.club/'}>MINT</Button>

          <IconHolder>
          <Icons />
          </IconHolder>
        </TextContainer>
    </HeroContainer>
  )
}

export default HeroSections
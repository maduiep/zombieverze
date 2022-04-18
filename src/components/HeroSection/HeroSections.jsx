import React from 'react'


import {
    HeroContainer,
    TextContainer,
    TextWrapper,
    IconHolder,
    BTNWrapper
} from './HeroSectionEl'

import Button from '../Buttons/Button';
import Icons from '../Icons/Icons';


const HeroSections = () => {
  return (
    <HeroContainer id="herosection">
        <TextContainer>
          <TextWrapper data-aos="fade-in">
            <h1 data-aos="fade-right">
              Welcome to <span>Zombieverze</span> 
            </h1>
            <p data-aos="fade-left">The end approaches, but the apocalypse is long lived</p>
          </TextWrapper>
           <BTNWrapper data-aos="fade-in"> 
           <Button 
              link={'http://mint.zombieverze.club/'}>
                MINT
            </Button>
           </BTNWrapper>
          <IconHolder>
            <Icons />
          </IconHolder>
        </TextContainer>
    </HeroContainer>
  )
}

export default HeroSections
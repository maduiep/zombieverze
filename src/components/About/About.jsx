import React from 'react'

import {
    AboutContainer,
    AboutWrapper,
    AboutTextContent,
    AboutImage
} from './AboutEl'

import AboutBTN from '../Buttons/AboutBTN';

const About = () => {
  return (
    <AboutContainer>
        <AboutWrapper>
            <AboutTextContent>
                <h5>ABOUT</h5>
                <h2>Welcome To <br /> the Zombieverse Club</h2>
                <p>
                    Zombieverze official NFT mint and launch, our <br /> WL members will be able to buy the pre-sale<br /> 30 mins early. We are already in the early<br /> Stages of developing The Zombieverze Game,<br /> Immediately after Mint is sold out, sneak<br /> peaks and In game footage will be released,<br /> every Weekend.
                </p>
                <AboutBTN>Pick your zombie</AboutBTN>
            </AboutTextContent>
            <AboutImage>
                <img src="/images/zombie-1.png" alt="" />
            </AboutImage>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About
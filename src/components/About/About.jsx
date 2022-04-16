import React from 'react'

import {
    AboutContainer,
    AboutWrapper,
    AboutTextContent,
    AboutImage,
    ImageWrapper,
    ContentWrapper
} from './AboutEl'

import AboutBTN from '../Buttons/AboutBTN';

const About = () => {
  return (
    <AboutContainer>
        <AboutWrapper>
            <ContentWrapper>
                <AboutTextContent>
                    <ImageWrapper>
                        <img src="/images/About.svg" alt="" />
                    </ImageWrapper>
                    <h5>ABOUT</h5>
                    <h2>Welcome To <br /> the Zombieverse Club</h2>
                    <p>
                        Zombieverze official NFT mint and launch, our <br /> WL members will be able to buy the pre-sale<br /> 30 mins early. We are already in the early<br /> Stages of developing The Zombieverze Game,<br /> Immediately after Mint is sold out, sneak<br /> peaks and In game footage will be released,<br /> every Weekend.
                    </p>
                </AboutTextContent>
                <AboutBTN >Pick your zombie</AboutBTN>
                <AboutImage>
                    <img src="/images/play.gif" alt=""/>
                </AboutImage>
            </ContentWrapper>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About
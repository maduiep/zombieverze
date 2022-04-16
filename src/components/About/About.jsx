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
                        Zombieverze official NFT mint and launch, <br /> our WL members will be able to buy the pre- <br />sale 30 mins early. We are already in the <br /> early Stages of developing The Zombieverze <br /> Game, Immediately after Mint is sold out, <br /> sneak peaks and In game footage will be <br /> released, Weekend. 
                    </p>
                    <AboutBTN >Pick your zombie</AboutBTN>
                </AboutTextContent>
                <AboutImage>
                    <img src="/images/play.gif" alt=""/>
                </AboutImage>
            </ContentWrapper>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About
import React from 'react'

import {
    AboutContainer,
    AboutWrapper,
    AboutTextContent,
    AboutImage,
    Heading,
    ContentWrapper
} from './AboutEl'

import AboutBTN from '../Buttons/AboutBTN';

const About = (props) => {
  return (
    <AboutContainer id="about">
        <AboutWrapper>
            <ContentWrapper>
                <AboutTextContent>
                    <Heading>
                        <span></span>
                        <h5 data-aos="fade-down">ABOUT</h5>
                    </Heading>
                    <h2>Welcome To <br /> the Zombieverse Club</h2>
                    <p data-aos="fade-left">
                        Zombieverze official NFT mint and launch, <br /> our WL members will be able to buy the pre- <br />sale 30 mins early. We are already in the <br /> early Stages of developing The Zombieverze <br /> Game, Immediately after Mint is sold out, <br /> sneak peaks and In game footage will be <br /> released, Weekend. 
                    </p>
                    <a href="http://mint.zombieverze.club/">
                        <AboutBTN>Pick your zombie</AboutBTN>
                    </a>
                </AboutTextContent>
                <AboutImage data-aos="zoom-in">
                    <img src="/images/play.gif" alt=""/>
                </AboutImage>
            </ContentWrapper>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About
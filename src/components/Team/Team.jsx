import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
    TeamContainer,
    TeamWrapper,
    TeamText,
    TeamMember,
    TeamContents,
    TeamProfile,
    TeamMembersContainer,
    TeamMembersWrapper,
    TeamMembers,
    Heading
} from './TeamEl'

const Team = () => {

  useEffect(() => {
    Aos.init({duration: 1000})
}, [])
  return (
    <TeamContainer id="team" data-aos="fade-down">
        <TeamWrapper>
          <TeamContents>
            <TeamText data-aos="fade-left">
            <Heading>
              <span></span>
              <h5>TEAM</h5>
            </Heading>
              <h2>Meet Zombieverse <br /> Club Team</h2>
              <p>
                Fully decentralized team of experts <br /> and enthusiasts
              </p>
            </TeamText>

            <TeamMember>
              <img data-aos="zoom-in" src="/images/Founder.png" alt="" />
              <TeamProfile data-aos="fade-left">
                <h4>Brain Dead Sprite</h4>
                <h2>Founder</h2>
              </TeamProfile>
            </TeamMember>
          </TeamContents>
          
          <TeamMembersContainer>
              <TeamMembersWrapper>
                <TeamMembers>
                  <img data-aos="zoom-in" src="/images/Artist.png" alt="" />
                  <TeamProfile data-aos="fade-right">
                    <h4>Amalaby</h4>
                    <h2>Artist</h2>
                  </TeamProfile>
                </TeamMembers>

                <TeamMembers>
                  <img data-aos="zoom-in" src="/images/Digital.png" alt="" />
                  <TeamProfile data-aos="fade-left">
                    <h4>Joshua</h4>
                    <h2>Digital Artist</h2>
                  </TeamProfile>
                </TeamMembers>

                <TeamMembers>
                  <img data-aos="zoom-in" src="/images/IT.png" alt="" />
                  <TeamProfile data-aos="fade-right">
                      <h4>Ifeanyi</h4>
                      <h2>IT</h2>
                  </TeamProfile>
                </TeamMembers>
              </TeamMembersWrapper>

              <TeamMembersWrapper>
                  <TeamMembers>
                    <img data-aos="zoom-in" src="/images/Socials.png" alt="" />
                    <TeamProfile data-aos="fade-left">
                      <h4>Peter</h4>
                      <h2>Socials</h2>
                    </TeamProfile>
                  </TeamMembers>
                  <TeamMembers>
                    <img data-aos="zoom-in" src="/images/Benefactor.png" alt="" />
                    <TeamProfile data-aos="fade-right">
                      <h4>Christain</h4>
                      <h2>Benefactor</h2>
                    </TeamProfile>
                  </TeamMembers>
              </TeamMembersWrapper>
            </TeamMembersContainer>
        </TeamWrapper>
    </TeamContainer>
  )
}

export default Team
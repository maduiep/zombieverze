import React from 'react'
import { ImageWrapper } from '../Roadmap/RoadmapEl'

import {
    TeamContainer,
    TeamWrapper,
    TeamText,
    TeamMember,
    TeamContents,
    TeamProfile,
    TeamMembersContainer,
    TeamMembersWrapper,
    TeamMembers
} from './TeamEl'

const Team = () => {
  return (
    <TeamContainer>
        <TeamWrapper>
          <TeamContents>
            <TeamText>
              <img src="/images/our team.png" alt="" style={{width:'300px',}}/>
              <h5>TEAM</h5>
              <h2>Meet Zombieverse <br /> Club Team</h2>
              <p>
                Fully decentralized team of experts <br /> and enthusiasts
              </p>
            </TeamText>

            <TeamMember>
              <img src="/images/Founder.png" alt="" />
              <TeamProfile>
                <h4>Brain Dead Sprite</h4>
                <h2>Founder</h2>
              </TeamProfile>
            </TeamMember>
          </TeamContents>
          
          <TeamMembersContainer>
              <TeamMembersWrapper>
                <TeamMembers>
                  <img src="/images/Artist.png" alt="" />
                  <TeamProfile>
                    <h4>Amalaby</h4>
                    <h2>Artist</h2>
                  </TeamProfile>
                </TeamMembers>

                <TeamMembers>
                  <img src="/images/Digital.png" alt="" />
                  <TeamProfile>
                    <h4>Joshua</h4>
                    <h2>Digital Artist</h2>
                  </TeamProfile>
                </TeamMembers>

                <TeamMembers>
                  <img src="/images/IT.png" alt="" />
                  <TeamProfile>
                      <h4>Ifeanyi</h4>
                      <h2>IT</h2>
                  </TeamProfile>
                </TeamMembers>
              </TeamMembersWrapper>

              <TeamMembersWrapper>
                  <TeamMembers>
                    <img src="/images/Socials.png" alt="" />
                    <TeamProfile>
                      <h4>Peter</h4>
                      <h2>Socials</h2>
                    </TeamProfile>
                  </TeamMembers>
                  <TeamMembers>
                    <img src="/images/Benefactor.png" alt="" />
                    <TeamProfile>
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
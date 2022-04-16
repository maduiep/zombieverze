import React from 'react'
import { 
  RoadmapContainer, 
  RoadmapWrapper, 
  RoadmapContents,
  ImageWrapper,
  RoadmapHolder,
  RoadmapCardHolder,
  CardHolder,
  CardHolder2,
  RoundCard,
  RoundCard2,
  Card,
  LineContainer,
  Circle,
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
  Line6,
  Dot,
  RoadmapHolder2
} from './RoadmapEl'
import {

} from './RoadmapEl'

const Roadmap = () => {
  return (
    <RoadmapContainer>
        <RoadmapWrapper>
          <ImageWrapper>
            <img src="/images/Roadmap.svg" alt="" />
          </ImageWrapper>
          <RoadmapHolder>
            <RoadmapContents>
              <RoadmapCardHolder>
                <RoundCard>
                  <h3>10%</h3>
                </RoundCard>
                <CardHolder>
                  
                  <Card>
                    <h2>Launch</h2>
                    <p>
                      Launch the NFT, Initial <br /> Mint has been officially <br />paused and will<br /> relaunch soon
                    </p>
                  </Card>
                </CardHolder>
              </RoadmapCardHolder>
              <RoadmapCardHolder>
                <RoundCard>
                  <h3>50%</h3>
                </RoundCard>
              <CardHolder>
              
                  <Card>
                    <h2>AIrdrop Token</h2>
                    <p>
                      Airdrop Zene Token to the <br /> holders of zombie NFT.
                    </p>
                  </Card>
              </CardHolder>
              </RoadmapCardHolder>
              <RoadmapCardHolder>
                <RoundCard>
                  <h3>85%</h3>
                </RoundCard>
                <CardHolder>

                <Card>
                  <h2>Launch metaverse</h2>
                  <p>
                    Airdrop Zene Token to the <br /> holders of zombie NFT.
                  </p>
                </Card>
                </CardHolder>
              </RoadmapCardHolder>
              <RoadmapCardHolder>
                <RoundCard>
                  <h3>100%</h3>
                </RoundCard>
                <CardHolder>
                
                <Card>
                  <h2>Launch metaverse</h2>
                  <p>
                  Start the journey of <br /> joining the metaverse <br /> and purchasing a land <br /> there for future projects.
                  </p>
                </Card>
                </CardHolder>
              </RoadmapCardHolder>
            </RoadmapContents>
          </RoadmapHolder>
          <RoadmapHolder2>
            <RoadmapContents>
            <RoadmapCardHolder>
                <RoundCard>
                  <h3>25%</h3>
                </RoundCard>
                <CardHolder>
                <Card>
                  <h2>Introduce <br /> Ecosystem Token</h2>
                  <p>
                  Launch of Zene token and <br /> a Smart contract as its base. <br /> Token will be earned as rare <br /> gem in the game.
                  </p>
                </Card>
                </CardHolder>
              </RoadmapCardHolder>
              <RoadmapCardHolder>
                <RoundCard>
                  <h3>75%</h3>
                </RoundCard>
                <CardHolder>
                
                <Card>
                  <h2>Launch game</h2>
                  <p>
                    Start the game design of <br /> playing and earning, we <br /> promise that we will <br /> disclose it while <br /> developing.
                  </p>
                </Card>
                </CardHolder>
              </RoadmapCardHolder>
              <RoadmapCardHolder>
                <RoundCard>
                  <h3>95%</h3>
                </RoundCard>
                <CardHolder>
                  
                <Card>
                  <h2>Create More Utility For <br /> Zene Token</h2>
                  <p>
                    Launching Zene token, <br /> Staking of Zombieverze NFT <br /> will be allowed to earn Zene. <br /> Zene can be used to purchase <br /> future exclusive merchandises <br /> and is exclusive to <br /> Zombieverze Holders.
                  </p>
                </Card>
                </CardHolder>
              </RoadmapCardHolder>
            </RoadmapContents>
          </RoadmapHolder2>
        </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default Roadmap
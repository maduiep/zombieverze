import React from 'react'
import AboutBTN from '../Buttons/AboutBTN'

import {
    TermsContainer,
    TermsContent,
    Header,
    TermsText,
    ButtonWrapper
} from './TermsAndCon'

const TermsAndConditions = () => {
  return (
    <TermsContainer>
      <TermsContent>
        <Header>
          <h1>TERMS & <br /> CONDITIONS</h1>
          <h3>ZombieVerze provides it's services as listed below to <br />
            the collectors through the website.
          </h3>
        </Header>

        <TermsText>
          <h3>ELIGIBILITY</h3>
          <p>
          Collectors must be 18 years old to access the website, if in any case<br />
          collectors is below  18 years old, he must only access the website
          under the permission of his parents or his legal guardians.
          </p>
        </TermsText>

        <TermsText>
          <h3>SALES</h3>
          <p>
          ZombieVerze sells it's NFTs, in exchange for payment.
          Collectors acquires a zombieverze nft. The purchase of NFT does not
          give a profit sharing interest to zombieverze.
          </p>
        </TermsText>

        <TermsText>
          <h3>PAYMENT</h3>
          <p>
          Collectors will have to link their wallet to the website and use
          ethereum from their cryptocurrency wallet to complete the purchase.
          NB: ZombieVerze has no access to the transactions or the payment
          mode, zombieverze can not reverse any transactions and will not be
          responsible for any claims of damage from the third party.
          </p>
        </TermsText>

        <TermsText>
          <h3>PERSONAL USE</h3>
          <p>
          ZombieVerze gives collectors full right to display NFTs for non
          commercial purposes, given that such privileges may only be assigned
          to subsequent collectors of NFT with the transfer of ownership of the
          NFT and this agragreement.
          </p>
        </TermsText>

        <TermsText>
          <h3>DERIVATIVE PRIVILEGES</h3>
          <p>
          ZombieVerze gives collectors commercial license to use the artwork
          acquired in Zombieverze NFT for creating derivative work, that is
          giving the collector privileges to produce commercial products, but
          not to use zombieverze name or logo in relation to that product.
          Collector may identify commercial product with zombieverze token
          ID to signify ownership of acquired NFT
          Derivative privileges are effective as long as the collector owns that
          same purchased zombieverze NFT at the time of derivative creation
          A subsequent collector is not entitled to the ownership of derivative
          produced by a previous collector.
          </p>
        </TermsText>

        <TermsText>
          <h3>RESTRICTIONS</h3>
          <p>
          The collector must agree not to use the acquired zombieverze NFT for
          illegal acts, or partake in racism, pornography, slander and violence.

          </p>
        </TermsText>

        <TermsText>
          <h3>CONDUCT</h3>
          <p>
          Collectors must agree not to translate, reverse engineer decompile,
          disassemble or create derivative works according to any software
          created by zombieverze.
          </p>
        </TermsText>

        <TermsText>
          <h3>ASSUMPTION OF RISK</h3>
          <p>
          Website transactions, including but not limited to primary sales,
          secondary market sales, listings, offers, bids, acceptances, and other
          operations utilize experimental smart contract and blockchain
          technology, including NFTs, cryptocurrencies, consensus algorithms,
          and decentralized or peer-to-peer networks and systems. Collector
          acknowledges and agrees that such technologies are experimental,
          speculative, and inherently risky and may be subject to bugs,
          malfunctions, timing errors, hacking and theft, or changes to the
          protocol rules of the Ethereum blockchain (i.e.,“forks”) which can
          adversely affect the smart contracts and may expose you to a risk of
          total loss, forfeiture of your cryptocurrency or NFT, or lost
          opportunities to buy or sell NFTs.
          </p>
        </TermsText>

        <TermsText>
          <h3>LIMITATION OF LLIABILITY</h3>
          <p>
          COLLECTOR MUST AGREE TO HOLD US, OUR
          RELATED COMPANIES, AND EACH OF THEIR RESPECTIVE
          DIRECTORS, SHAREHOLDERS, OFFICERS, EMPLOYEES,
          CONTRACTORS, REPRESENTATIVES, LICENSEES AND
          ASSIGNS, HARMLESS FROM ANY LOSSES, DAMAGES,
          CLAIMS, COSTS AND EXPENSES YOU MAY INCUR AS A
          CONSEQUENCE OF MINTING (OR ATTEMPTING TO MINT)
          YOUR NFT.
          </p>
        </TermsText>

        <TermsText>
          <h3>DISCLAIMER OF WARRANTIES</h3>
          <p>
          THIS WEBSITE AND ITS CONTENTS ARE PROVIDED “AS IS”
          AND “AS AVAILABLE”WITHOUT WARRANTY OF ANY KIND,
          EITHER EXPRESSED OR T FROM ANY LOSSES, DAMAGES,
          CLAIMS, COSTS AND EXPENSES YOU MAY INCUR AS A
          CONSEQUENCE OF MINTING (OR ATTEMPTING TO MINT).
          </p>
        </TermsText>

        <TermsText>
          <h3>PRIVACY</h3>
          <p>
          ZombieVerze will not collect any cookies, IP addresses, or Collector
          data in connection with your use of the Website. This is subject to
          change. Collector understands that zombieverze may work with third
          -party applications that collect data, such as Discord, Collab.Land, or
          MetaLink for NFT holder verifications or giveaways. Additionally,
          Collector understands that the Ethereum network is a public
          blockchain and all of your transaction history initiated through the
          Website will be made public.
          </p>
        </TermsText>
        
        <ButtonWrapper>
          <AboutBTN>Pick your zombie</AboutBTN>
        </ButtonWrapper>
      </TermsContent>
    </TermsContainer>
  )
}

export default TermsAndConditions
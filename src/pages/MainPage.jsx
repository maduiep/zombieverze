import React from 'react'
import { Header } from '../components/Header/Header'
import HeroSections from '../components/HeroSection/HeroSections'
import Faq from '../components/Faq/Faq'

import {
  MainPageContainer
} from './MainPageEl'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Roadmap from '../components/Roadmap/Roadmap'

const MainPage = () => {
  return (
    <MainPageContainer>
        <Header />
        <HeroSections />
        <About />
        <Roadmap />
        <Faq />
        <Footer />
    </MainPageContainer>
  )
}

export default MainPage
import React, {useState} from 'react'
import { Header } from '../components/Header/Header'
import HeroSections from '../components/HeroSection/HeroSections'
import Faq from '../components/Faq/Faq'

import {
  MainPageContainer
} from './MainPageEl'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Roadmap from '../components/Roadmap/Roadmap'
import Team from '../components/Team/Team'
import Sidebar from '../components/Sidebar/Sidebar'

const MainPage = () => {
  return (
    <MainPageContainer>
        <Sidebar/>
        <Header/>
        <HeroSections />
        <About />
        <Roadmap />
        <Team />
        <Faq />
        <Footer />
    </MainPageContainer>
  )
}

export default MainPage
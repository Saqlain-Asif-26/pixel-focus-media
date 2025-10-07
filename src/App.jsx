import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MouseScroll from './components/MouseScroll'
import VisionSection from './components/VisionSection'
import MissionSection from './components/MissionSection'
import BrillianceSection from './components/BrillianceSection'
import CoreServicesSection from './components/CoreServicesSection'
import WhyChooseUs from './components/WhyChooseUs'
import GetStartedSection from './components/GetStartedSection'
import Footer from './components/Footer'
import FooterEnd from './components/FooterEnd'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MouseScroll />
      <VisionSection />
      <MissionSection />
      <BrillianceSection />
      <CoreServicesSection />
      <WhyChooseUs />
      <GetStartedSection />
      <Footer />
      <FooterEnd />
    </div>
  )
}

export default App

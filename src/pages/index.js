import React from 'react'

import HomePage from '../components/header'
import InfoSection from '../components/header/infosection'
import AboutSection from '../components/header/about'
import ServicesSection from '../components/header/services'
import Services from '../components/header/services'
import Services1 from '../components/header/service2'
import Projects from '../components/header/project'
import Projects1 from '../components/header/project2'


function Dashboard() {
  return (
    <div>
        <HomePage />
        <InfoSection />
        <AboutSection />
        <ServicesSection />
        <Services1 />
        <Projects />
        <Projects1 />
        
    </div>
  )
}

export default Dashboard

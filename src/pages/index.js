import React from 'react'

import HomePage from '../components/header'
import InfoSection from '../components/header/infosection'
import AboutSection from '../components/header/about'
import Services from '../components/header/services'
import Services1 from '../components/header/service2'
import Projects from '../components/header/project'
import Projects1 from '../components/header/project2'
import BlogSection from '../components/header/page1'
import Team from '../components/header/team'
import TeamSection from '../components/header/team'
import Testimonials from '../components/header/testimonial'


function Dashboard() {
  return (
    <div>
        <HomePage />
        <InfoSection />
        <AboutSection />
        <Services />
        <Services1 />
        <Projects />
        <Projects1 />
        <BlogSection />
        <TeamSection />
        <Testimonials />
        
    </div>
  )
}

export default Dashboard

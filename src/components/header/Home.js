import React from 'react'
import HomePage from '.'
import InfoSection from './infosection'
import AboutSection from './about'
import Services from './services'
import Services1 from './service2'
import Projects from './project'
import BlogSection from './page1'
import TeamSection from './team'
import Testimonials from './testimonial'
import ContactSection from './getintouch'
import Contact from './getintouch1'
import Footer from './footer'
import Project2 from './project2'

const Home = () => {
  return (
    <div>
        <HomePage />
        <InfoSection />
        <AboutSection />
        <Services />
        <Services1 />
        <Projects />
        <Project2 />
        <BlogSection />
        <TeamSection />
        <Testimonials />
        <ContactSection />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
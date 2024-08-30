import React from "react";
import Webdesign from '../assets/webpage.jpg'
import Cybersecurity  from '../assets/cybersecurity.jpg'
import Mobileinfo  from '../assets/Mobileinfo.jpg'



const Projects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm text-blue-600 font-semibold">Our Project</h2>
          <h1 className="text-3xl font-bold text-gray-800">
            Our Recently Completed Projects
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg h-45">
          <img src={Webdesign} alt='Web design'/>
        
            <div className="absolute inset-0 bg-opacity-100 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">Web design</h3>
                <p className="mt-2">Web Analysis</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={Cybersecurity} 
              alt="cybersecurity"
              className="w-full h-auto"
            />
            <div className="absolute inset-0  bg-opacity-100 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">Cyber security</h3>
                <p className="mt-2">Cyber security core</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={Mobileinfo} 
              alt="mobileinfo"
              className="w-full h-auto"
            />
            <div className="absolute inset-0  bg-opacity-100 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="mt-2">Keyword Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
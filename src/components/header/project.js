import React from "react";
import Webdesign from '../assets/webpage.jpg';
import Cybersecurity from '../assets/cybersecurity.jpg';
import Mobileinfo from '../assets/Mobileinfo.jpg';

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
          {/* Project 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Webdesign}
              alt="Web design"
              className="w-full h-auto transform transition-transform duration-500 group-hover:rotate-6"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold">Web Design</h3>
                <p className="mt-3">Web Analysis</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Cybersecurity}
              alt="Cybersecurity"
              className="w-full h-auto transform transition-transform duration-500 group-hover:rotate-6"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold">Cyber Security</h3>
                <p className="mt-3">Cyber Security Core</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Mobileinfo}
              alt="Mobile Info"
              className="w-full h-auto transform transition-transform duration-500 group-hover:rotate-6"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold">Web Development</h3>
                <p className="mt-3">Keyword Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

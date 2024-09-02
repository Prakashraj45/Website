import React from "react";
import Webdevelopment from '../assets/webdevelopment.jpg';
import Digitalmarketing from '../assets/digitalmarketing.jpg';
import Keywordresearch from '../assets/keywordresearch.jpg';

const Project2 = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Webdevelopment}
              alt="Web Development"
              className="w-full h-auto transform transition-transform duration-500 group-hover:rotate-6"
              style={{ transformOrigin: 'center center', transition: 'transform 1s' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold">Web Development</h3>
                <p className="mt-3">Web Analysis</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Digitalmarketing}
              alt="Digital Marketing"
              className="w-full h-auto transform transition-transform duration-500 group-hover:rotate-6"
              style={{ transformOrigin: 'center center', transition: 'transform 1s' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold">Digital Marketing</h3>
                <p className="mt-3">Marketing Analysis</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={Keywordresearch}
              alt="Keyword Research"
              className="w-full h-auto transform transition-transform duration-500 group-hover:rotate-6"
              style={{ transformOrigin: 'center center', transition: 'transform 1s' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold">Keyword Research</h3>
                <p className="mt-3">Keyword Analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;

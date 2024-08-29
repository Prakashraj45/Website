import React from "react";
import Webdevelopment from '../assets/webdevelopment.jpg'
import Digitalmarketing  from '../assets/digitalmarketing.jpg'
import Keywordresearch from '../assets/keywordresearch.jpg'



const Project1 = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg h-45">
          <img src={Webdevelopment} alt='Webdevelopment'/>
        
            <div className="absolute inset-0 bg-opacity-100 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">Web Development</h3>
                <p className="mt-2">Web Analysis</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={Digitalmarketing} // Replace with your image URL
              alt="digitalmarketing"
              className="w-full h-auto"
            />
            <div className="absolute inset-0  bg-opacity-100 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">Digital Marketing</h3>
                <p className="mt-2">Marketing Analysis</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={Keywordresearch} // Replace with your image URL
              alt="keywordresearch"
              className="w-full h-auto"
            />
            <div className="absolute inset-0  bg-opacity-100 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-bold">Keyword Research</h3>
                <p className="mt-2">Keyword analysis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;
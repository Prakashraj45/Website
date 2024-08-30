import React from "react";
import Team_discuss from '../assets/Team_discus.jpg';

const AboutSection = () => {
  return (
    <div className="bg-white min-h-[600px] flex items-center justify-center p-">
      <div className="max-w-7xl flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-5xl font-bold text-orange-500 mb-4">
            About CogniGenNxt Agency And Its Innovative IT Solutions
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur quis purus ut interdum. Pellentesque aliquam dolor eget
            urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus,
            ac viverra eros tristique.
          </p>
          <p className="text-gray-600 mb-4">
            Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam
            volutpat libero sit amet leo cursus, ac viverra eros tristique.
            Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam
            nec elementum viverra.
          </p>
          <button className="bg-orange-400 text-white py-2 px-6 rounded">
            More Details
          </button>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 h-[400px] w-[600px]" >
          <img src={Team_discuss}/>
      
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
import React, { useState } from 'react';
import Hclceo from '../assets/Hclceo.jpg';
import Fordceo from '../assets/fordceo.jpg';
import Nitaambani from '../assets/nitaambani.jpg';

const teamMembers = [
  { name: 'HCL CEO', designation: 'CEO', image: Hclceo },
  { name: 'Ford CEO', designation: 'CEO', image: Fordceo },
  { name: 'Nita Ambani', designation: 'Chairperson', image: Nitaambani },
  { name: 'Person 4', designation: 'Designation 4', image: Hclceo },
  { name: 'Person 5', designation: 'Designation 5', image: Fordceo },
  { name: 'Person 6', designation: 'Designation 6', image: Nitaambani },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const membersPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + totalPages) % totalPages);
  };

  const currentMembers = teamMembers.slice(
    currentIndex * membersPerPage,
    (currentIndex + 1) * membersPerPage
  );

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-medium mb-8 text-orange-500">Our Team</h2>
        <h3 className="text-center text-3xl font-bold mb-10">Meet our Expert Team</h3>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button onClick={() => handleNavigation(-1)} className="bg-orange-500 text-white p-2 rounded-full">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button onClick={() => handleNavigation(1)} className="bg-orange-500 text-white p-2 rounded-full">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center transition-transform duration-500 ease-in-out transform">
              <div className="relative">
                <div className="bg-orange-500 h-16"></div>
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto -mt-16 border-4 border-white" />
              </div>
              <h4 className="mt-6 text-lg font-bold">{member.name}</h4>
              <p className="text-gray-600">{member.designation}</p>
              <div className="flex justify-center mt-4 space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                  <a href="#" key={platform} className="text-blue-700 hover:text-blue-400">
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
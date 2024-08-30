import React from 'react';
import Hclceo from '../assets/Hclceo.jpg'
import Fordceo from '../assets/fordceo.jpg'
import Nitaambani from '../assets/nitaambani.jpg'

function TeamSection() {
  const teamMembers = [
    {
      name: 'Full Name',
      designation: 'Designation',
      image: `${Hclceo}`,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Full Name',
      designation: 'Designation',
      image: `${Fordceo}`,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Full Name',
      designation: 'Designation',
      image: `${Nitaambani}`,
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-medium mb-8 text-orange-500">Our Team</h2>
        <h3 className="text-center text-3xl font-bold mb-10">Meet our expert Team</h3>

        <div className="flex justify-center items-center space-x-4 mb-8">
          <button className="bg-orange-500 text-white p-2 rounded-full">
            <i className="fas fa-arrow-left"></i> {/* Placeholder icon */}
          </button>
          <button className="bg-orange-500 text-white p-2 rounded-full">
            <i className="fas fa-arrow-right"></i> {/* Placeholder icon */}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center"
            >
              <div className="relative">
                <div className="bg-orange-500 h-16"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto -mt-16 border-4 border-white"
                />
              </div>
              <h4 className="mt-6 text-lg font-bold">{member.name}</h4>
              <p className="text-gray-600">{member.designation}</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href={member.social.facebook} className="text-blue-700 hover:text-blue-400">
                  <i className="fab fa-facebook-f"></i> {/* Placeholder icon */}
                </a>
                <a href={member.social.twitter} className="text-blue-700 hover:text-blue-400">
                  <i className="fab fa-twitter"></i> {/* Placeholder icon */}
                </a>
                <a href={member.social.instagram} className="text-blue-700 hover:text-blue-400">
                  <i className="fab fa-instagram"></i> {/* Placeholder icon */}
                </a>
                <a href={member.social.linkedin} className="text-blue-700 hover:text-blue-400">
                  <i className="fab fa-linkedin-in"></i> {/* Placeholder icon */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

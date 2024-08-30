import React, { useState, useEffect } from 'react';
import Groupmeet from '../assets/Group_meet.jpg';

function HomePage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100); // Delay before showing content
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div
        className={`bg-black text-white py-2 px-4 flex flex-col md:flex-row justify-between items-center text-sm transition-opacity duration-1000 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div>
          <span className="mr-4">📍 13 owayiar Street, Senjai, Karaikudi</span>
        </div>
        <div>
          <span className="mr-4">admin@cognigennxt.com</span>
          <span>📞 +91 8939797000 / +91 9361353342</span>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`bg-orange-500 py-4 px-6 flex flex-col md:flex-row justify-between items-center transition-all duration-1000 ease-in-out transform ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="text-3xl font-bold text-white">
          Cogni<span className="text-black">GenNxt</span>
        </div>
        <div className="flex flex-col md:flex-row">
          {['Home', 'About', 'Services', 'Projects', 'Pages', 'Contact'].map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-black px-4 hover:text-white transition-opacity duration-1000 delay-${
                index * 100 + 500
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className={`relative bg-cover bg-center transition-all duration-1000 ease-in-out transform ${
          showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{ backgroundImage: `url(${Groupmeet})`, height: '650px' }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full flex flex-col items-center justify-center py-20 px-6">
          <h1
            className={`text-4xl font-bold text-yellow-500 mb-4 transition-opacity duration-1000 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Best IT Solutions
          </h1>
          <h2
            className={`text-5xl font-bold text-white mb-6 transition-opacity duration-1000 delay-300 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            An Innovative IT Solution Agency
          </h2>
          <p
            className={`text-lg text-white text-center mb-8 max-w-2xl transition-opacity duration-1000 delay-500 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.
          </p>
          <div
            className={`flex space-x-4 transition-opacity duration-1000 delay-700 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
              Read More
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

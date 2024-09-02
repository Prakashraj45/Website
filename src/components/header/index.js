import React from 'react';
import Groupmeet from '../assets/Group_meet.jpg';


function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${Groupmeet})`,height:'730px' }}>
        <div className="bg-black bg-opacity-50 h-full w-full flex flex-col items-center justify-center py-20 px-6">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Best IT Solutions</h1>
          <h2 className="text-5xl font-bold text-white mb-6">An Innovative IT Solution Agency</h2>
          <p className="text-lg text-white text-center mb-8 max-w-2xl">
            Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">Read More</button>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
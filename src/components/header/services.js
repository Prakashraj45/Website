import React from "react";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm text-blue-600 font-semibold">Our Services</h2>
          <h1 className="text-3xl font-bold text-gray-800">
            Services Built Specifically For Your Business
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <div className="text-blue-600 text-6xl">
                {/* Icon for Web Design */}
                <i className="fas fa-code  text-orange-500"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Web Design</h3>
            <p className="text-gray-600 mt-4 mb-6">
              Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
              interdum. Aliquam dolor eget urna ultricies tincidunt.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">
              Read More
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <div className="text-blue-600 text-6xl">
                {/* Icon for Web Development */}
                <i className="fas fa-file-code  text-orange-500"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Web Development
            </h3>
            <p className="text-gray-600 mt-4 mb-6">
              Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
              interdum. Aliquam dolor eget urna ultricies tincidunt.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">
              Read More
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <div className="text-blue-600 text-6xl">
                {/* Icon for UI/UX Design */}
                <i className="fas fa-expand-alt text-orange-500"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              UI/UX Design
            </h3>
            <p className="text-gray-600 mt-4 mb-6">
              Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
              interdum. Aliquam dolor eget urna ultricies tincidunt.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
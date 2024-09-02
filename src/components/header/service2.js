import React from "react";

const Services1 = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <div className="text-blue-600 text-6xl">
                {/* Icon for Web Security */}
                <i className="fas fa-user-secret  text-orange-500"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Web Security</h3>
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
                {/* Icon for Digital Marketing */}
                <i className="fas fa-envelope  text-orange-500"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Digital Marketing
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
                {/* Icon for Programming */}
                <i className="fas fa-laptop  text-orange-500"></i>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Programming</h3>
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

export default Services1;
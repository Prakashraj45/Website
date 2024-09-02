import React from 'react';
import User1 from '../assets/user1.jpg';
import User2 from '../assets/user2.jpg';
import User3 from '../assets/user3.jpg';

function Testimonials() {
  const testimonials = [
    {
      name: 'Client Name',
      profession: 'Profession',
      image: `${User1}`,
      feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.',
      rating: 5,
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      image: `${User2}`,
      feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.',
      rating: 5,
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      image: `${User3}`,
      feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-8 sm:py-16 px-4 sm:px-0">
      <div className="container mx-auto text-center">
        <h3 className="text-center text-2xl sm:text-3xl font-medium mb-4 sm:mb-8 text-orange-500">Our Testimonial</h3>
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">Our Clients Are Saying!</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md max-w-full sm:max-w-xs md:max-w-sm mx-auto">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt="Client" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4" />
                <div>
                  <h4 className="text-green-600 font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{testimonial.profession}</p>
                  <div className="flex mt-1">
                    {Array(testimonial.rating).fill().map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21 16.54 14.97 22 10.47 15.81 9.63 12 4 8.19 9.63 2 10.47 7.46 14.97 5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

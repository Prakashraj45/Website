import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Client Name',
      profession: 'Profession',
      image: 'https://via.placeholder.com/150',
      feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.',
      rating: 5,
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      image: 'https://via.placeholder.com/150',
      feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.',
      rating: 5,
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      image: 'https://via.placeholder.com/150',
      feedback: 'Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h3 className="text-center text-3xl font-medium mb-8 text-orange-500">Our Testimonial</h3>
        <h2 className="text-center text-3xl font-bold mb-10">Our Client Saying!</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md max-w-xs md:max-w-sm">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt="Client" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h4 className="text-green-600 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.profession}</p>
                  <div className="flex mt-1">
                    {Array(testimonial.rating).fill().map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21 16.54 14.97 22 10.47 15.81 9.63 12 4 8.19 9.63 2 10.47 7.46 14.97 5.82 21z"/></svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

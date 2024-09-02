import React from 'react';

function ContactSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-blue-600 text-sm font-semibold mb-2">Get In Touch</h3>
        <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">Contact for any query</h2>
        <p className="text-gray-500 text-lg sm:text-xl mb-6">
          The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.
          Just copy and paste the files, add a little code and you're done.{' '}
          <a href="#" className="text-blue-600 font-semibold">
            Download Now.
          </a>
        </p>
      </div>
    </div>

    
  );
}

export default ContactSection;

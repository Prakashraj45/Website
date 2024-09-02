import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around mb-12">
          {[
            { title: 'Address', text: '23 rank Str, Chennai', icon: 'M12 2C8.134 2 5 5.134 5 9c0 7.635 7 13 7 13s7-5.365 7-13c0-3.866-3.134-7-7-7zm0 10.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z' },
            { title: 'Call Us', text: '+012 3456 7890', icon: 'M6.62 10.79a15.466 15.466 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.26 1.12.28 2.33.43 3.57.43.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C11.64 22 2 12.36 2 1c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.15 2.45.43 3.57.1.35.01.74-.26 1.02l-2.2 2.2z' },
            { title: 'Email Us', text: 'cognigennxtpvt@gmail.com', icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 8l8 5 8-5v-2l-8 5-8-5v2zm0 10V10l8 5 8-5v8H4z' },
          ].map(({ title, text, icon }, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 mb-6 md:mb-0">
              <div className="bg-orange-500 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={icon} />
                </svg>
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold">{title}</h3>
                <p className="text-gray-700">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <iframe className="w-full md:w-1/2 h-100 bg-orange-400 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6223.1750677832655!2d80.20963672651855!3d13.083252015923098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e542c7ad89%3A0xdf62d4de10b4c760!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1693675889639!5m2!1sen!2sus" allowFullScreen="" loading="lazy" title="Google Map"></iframe>
          <form className="w-full md:w-1/2 bg-orange-400 p-6 rounded-lg shadow-lg">
            {['Your Name', 'Your Email', 'Project', 'Message'].map((placeholder, i) => (
              i < 3 ? <input key={i} type={i === 1 ? "email" : "text"} placeholder={placeholder} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" /> : 
              <textarea key={i} placeholder={placeholder} className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300" rows="5"></textarea>
            ))}
            <button type="submit" className="whitespace-normal p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

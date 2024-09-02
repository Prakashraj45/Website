import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-500 py-4 px-6 flex justify-between items-center">
      <div className="text-3xl font-bold text-white">
        Cogni<span className="text-black">GenNxt</span>
      </div>
      <div>
        <Link to="/" className="text-black px-4 hover:text-white">Home</Link>
        <Link to="/about" className="text-black px-4 hover:text-white">About</Link>
        <Link to="/services" className="text-black px-4 hover:text-white">Services</Link>
        <Link to="/project" className="text-black px-4 hover:text-white">Projects</Link>
        <Link to="/getintouch" className="text-black px-4 hover:text-white">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

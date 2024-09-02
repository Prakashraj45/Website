import React from "react";

function Footer() {
  return (
    <footer className="bg-orange-200 text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Cogni<span className="text-black">genNxt</span></h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-black hover:text-green-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-black hover:text-green-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-black hover:text-green-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-black hover:text-green-500">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-500">Short Link</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-black hover:text-green-500">About us</a></li>
            <li><a href="#" className="text-black hover:text-green-500">Contact us</a></li>
            <li><a href="#" className="text-black hover:text-green-500">Our Services</a></li>
            <li><a href="#" className="text-black hover:text-green-500">Our Projects</a></li>
            <li><a href="#" className="text-black hover:text-green-500">Latest Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-500">Help Link</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-black hover:text-green-500">Terms Of use</a></li>
            <li><a href="#" className="text-black hover:text-green-500">Privacy Policy</a></li>
            <li><a href="#" className="text-black hover:text-green-500">Helps</a></li>
            <li><a href="#" className="text-black hover:text-green-500">FAQs</a></li>
            <li><a href="#" className="text-black hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-500">Contact Us</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-black">📍 23 rank Str, Chennai</li>
            <li className="text-black">📞 +123 456 7890</li>
            <li className="text-black">✉️ cognigennxtpvt@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© Your Site Name, All right reserved.</p>
        <p>
          Designed By <a href="#" className="text-black hover:text-green-500">HTML Codex</a> Distributed By <a href="#" className="text-white hover:text-green-500">ThemeWagon</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

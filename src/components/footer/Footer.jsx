import React from "react";
import {Mail,Phone,MapPin, } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyApp</h2>
          <p className="text-sm">
            MyApp is a modern platform for managing your tasks, users, and reports. Designed with simplicity and power.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">user</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/dashboard" className="hover:text-white">product</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" /> support@myapp.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" /> +998 90 123 45 67
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" /> Tashkent, Uzbekistan
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 hover:text-white" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center py-6 text-sm text-gray-500 bg-gray-700 mt-10">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default React.memo(Footer);

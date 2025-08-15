import React from "react";
import Logo from "../assets/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 mt-10">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Column 1 - Logo + About + Links */}
        <div>
          {/* Logo */}
          <img src={Logo} alt="Company Logo" className="h-10 mb-4" />

          {/* Brief Text */}
          <p className="text-sm mb-4">
            We craft digital experiences that help brands grow, connect, and
            thrive in an ever-changing market.
          </p>

          {/* Navigation Links */}
          <ul className="space-y-2 text-sm  md:flex gap-2">
            <li>
              <a href="#home" className="hover:text-purple-700 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-purple-700 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-purple-700 transition">
                Our Work
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-purple-700 transition"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Newsletter */}
        <div>
          <h4 className="font-semibold text-lg mb-3">
            Subscribe to our newsletter
          </h4>
          <p className="text-sm mb-4">
            Get the latest updates and offers straight to your inbox.
          </p>

          {/* Email Input + Button */}
          <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-2 items-center gap-4 text-sm">
        {/* Left - Copyright */}
        <p className="text-gray-500">
          &copy; 2025 Your Company. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex space-x-4 sm:justify-end text-gray-500">
          <a href="#" className="hover:text-purple-700 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-purple-700 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-purple-700 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-purple-700 transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

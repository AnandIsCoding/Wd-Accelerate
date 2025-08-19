import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCcAmex,FaCcPaypal } from "react-icons/fa6";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { SiApplepay,SiGooglepay } from "react-icons/si";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-black text-white text-sm">
      {/* Newsletter + Contact */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-600">
        {/* Newsletter */}
        <div>
          <h3 className="font-semibold uppercase">Be the first to know</h3>
          <p className="mt-2 text-gray-400">
            Sign up for updates from mettā muse.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              className="px-4 py-2 w-full sm:w-64 text-black bg-white rounded-l-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-transparent border border-white rounded-r-md hover:bg-white hover:text-black">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:ml-18">
          <h3 className="font-semibold uppercase">Call Us</h3>
          <p className="mt-2 text-gray-400">
            +44 221 193 5360 • customercare@wdaccelerateecom.web.app
          </p>

          <h3 className="font-semibold uppercase mt-6">Currency</h3>
          <p className="mt-2 flex items-center gap-2">
          INR
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 border-b border-gray-600">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold uppercase">metta muse</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold uppercase">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold uppercase">Follow Us</h3>
            <div className="flex gap-4 mt-3 text-xl">
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
              <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
            </div>
            <h3 className="font-semibold uppercase mt-6">metta muse accepts</h3>
            <div className="flex flex-wrap gap-3 mt-3 text-3xl">
              <SiGooglepay className="bg-white text-black rounded-sm" />
              <FaCcPaypal className="text-blue-500" />
              <FaCcAmex className="text-blue-400" />
              <SiApplepay className="bg-white text-black rounded-sm" />
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          {/* Section: metta muse */}
          <div className="border-b border-gray-700 py-3">
            <button
              onClick={() => toggleSection("metta")}
              className="w-full flex justify-between items-center uppercase font-semibold"
            >
              metta muse
              {openSection === "metta" ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            {openSection === "metta" && (
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            )}
          </div>

          {/* Quick Links */}
          <div className="border-b border-gray-700 py-3">
            <button
              onClick={() => toggleSection("quick")}
              className="w-full flex justify-between items-center uppercase font-semibold"
            >
              Quick Links
              {openSection === "quick" ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            {openSection === "quick" && (
              <ul className="mt-3 space-y-2 text-gray-400">
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            )}
          </div>

          {/* Follow Us */}
          <div className="border-b border-gray-700 py-3">
            <button
              onClick={() => toggleSection("follow")}
              className="w-full flex justify-between items-center uppercase font-semibold"
            >
              Follow Us
              {openSection === "follow" ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            {openSection === "follow" && (
              <div className="mt-3">
                <div className="flex gap-4 text-xl mb-4">
                  <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                  <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
                </div>
              </div>
            )}
          </div>

          {/* Payments  */}
          <div className="py-4">
            <h3 className="font-semibold uppercase">metta muse accepts</h3>
            <div className="flex flex-wrap gap-3 mt-3 text-3xl">
              <SiGooglepay className="bg-white text-black rounded-sm" />
              <FaCcPaypal className="text-blue-500" />
              <FaCcAmex className="text-blue-400" />
              <SiApplepay className="bg-white text-black rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="text-center text-gray-500 text-xs py-6">
        Copyright © 2023 wdaccelerateecom. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

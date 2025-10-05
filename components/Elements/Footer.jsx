"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const handleInstagramClick = () => {
    if (url.startsWith("http")) {
      window.location.href = 'https://www.instagram.com/trendiikarthii';
    }
  };

    const handleTwitterClick = () => {
        window.location.href = 'https://www.twitter.com/trendiikarthii';
    };

    const handleFacebookClick = () => {
        window.location.href = 'https://www.facebook.com/trendiikarthii';
    };

    const handleLinkedinClick = () => {
        window.location.href = 'https://www.linkedin.com/in/trendiikarthii';
    };
  return (
    <div className="py-6 text-white bg-teal-600">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-2 text-3xl font-bold">Your Website Name</h2>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio, necessitatibus.
            </p>
            <div className="flex space-x-4 ">
              <a
                href="#"
                className="cursor-pointer text-whitehover:underline hover:text-blue-600"
              >
                <FaFacebook
                  onClick={() => handleFacebookClick()}
                  className="w-8 h-8 rounded-full hover:bg-white"
                />
              </a>
              <a
                href="#"
                className="rounded cursor-pointer text-whitehover:underline hover:bg-white"
              >
                <FaTwitter
                  onClick={() => handleTwitterClick()}
                  className="w-8 h-8 hover:text-sky-500"
                />
              </a>
              <a
                href="#"
                className="rounded cursor-pointer text-whitehover:underline hover:bg-white"
              >
                <FaInstagram
                  onClick={() => handleInstagramClick()}
                  className="w-8 h-8 rounded hover:bg-pink-400"
                />
              </a>
              <a
                href="#"
                className="rounded cursor-pointer text-whitehover:underline hover:text-blue-500"
              >
                <FaLinkedin
                  onClick={() => handleLinkedinClick()}
                  className="w-8 h-8 rounded hover:bg-white"
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
            <a
              href="#"
              className="block mb-2 text-white cursor-pointer hover:underline hover:text-blue-500"
            >
              Services
            </a>
            <a
              href="#"
              className="block mb-2 text-white cursor-pointer hover:underline hover:text-blue-500"
            >
              About Us
            </a>
            <a
              href="#"
              className="block mb-2 text-white cursor-pointer hover:underline hover:text-blue-500"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block text-white cursor-pointer hover:underline hover:text-blue-500"
            >
              Privacy Policy
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Contact Info</h3>
            <p className="mb-2 text-sm">123 Street, City</p>
            <p className="mb-2 text-sm">contact@yourwebsite.com</p>
            <p className="text-sm">123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

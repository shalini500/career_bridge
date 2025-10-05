"use client";
import React from "react";
import Image from "next/image";
import heroimg from "@/public/images/hero.png";

const Hero = () => {
  return (
    <div className="text-white bg-teal-500 md:flex">
      <div className="flex flex-col items-center justify-center p-8 md:w-1/2 md:p-16">
        <h1 className="text-4xl font-bold md:text-6xl">CareerBridge</h1>
        <p className="mt-4 text-lg text-center md:text-xl">
          Connecting job seekers with their dream careers through seamless
          applications and tailored opportunities.
        </p>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 mt-8 border-none rounded outline-none md:w-3/4"
        />
      </div>
      <div className="hidden bg-teal-500 bg-center bg-cover md:block md:w-1/2">
        <Image
          src={heroimg}
          className="object-cover w-full h-full"
          width={700}
          height={500}
          alt="heroImg"
        />
      </div>
    </div>
  );
};

export default Hero;

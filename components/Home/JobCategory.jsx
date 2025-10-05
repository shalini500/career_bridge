'use client'
import JobData from "@/data";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  software,
  machinelearning,
  cloud,
  cyber,
  marketing,
  network,
  datascience,
  aiengineer,
} from "@/public/images/category/index";


const JobCategory = () => {
   
    
  return (
    <div>
      <div className="py-8 text-center">
        <h2 className="text-3xl font-bold text-teal-500">Job Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 px-10 mb-8 md:grid-cols-2 lg:grid-cols-3">
       
        <Link href="/jobcategory/software">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={software}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">Software development</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>

        <Link href="/jobcategory/machinelearning">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={machinelearning}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">Machine Learning</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>

        <Link href="/jobcategory/datascience">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={datascience}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">Data Science</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>

        <Link href="/jobcategory/cybersecurity">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={cyber}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">Cyber Securiy</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>

        <Link href="/jobcategory/cloudcomputing">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={cloud}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">Cloud Computing</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>

        <Link href="/jobcategory/networking">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={network}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">Network Engineer</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>

        <Link href="/jobcategory/marketing">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={marketing}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">Marketing</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>

        <Link href="/jobcategory/aiengineering">
          <div className="relative flex items-center overflow-hidden transition duration-300 bg-teal-100 rounded-lg shadow-md cursor-pointer group hover:shadow-lg hover:scale-105">
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src={aiengineer}
                alt="Card Image"
                className="w-24 h-24 rounded-lg"
                width={20}
                height={20}
              />
            </div>
            <div className="p-1">
              <h3 className="text-lg font-semibold">AI Engineering</h3>
              <p className="text-sm text-gray-600">Click to know more...</p>
            </div>
          </div>
        </Link>
       
      </div>
    </div>
  );
};

export default JobCategory;

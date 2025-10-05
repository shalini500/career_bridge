'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FiBookmark } from 'react-icons/fi';

const JobCategoryPage = ({params}) => {
      
  const [jobsList, setJobsList] = useState([]);

      const fetchData = async () => {
        const response = await axios.get("/api/job");
        setJobsList(response.data.jobsList);
      };

      useEffect(() => {
        fetchData();
      }, []);
    
  return (
    <div className='h-screen'>
      <div className="py-8 text-center">
        <h2 className="text-3xl font-bold text-teal-500">Featured {params.id} Jobs</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 px-10 mb-8 md:grid-cols-2">
        {jobsList
          .filter((job) => params.id === job.category)
          .map((job) => {
            return (
              <Link href={`/jobs/${job._id}`} key={job._id}>
                <div className="relative flex items-center p-4 overflow-hidden transition duration-300 ease-in-out transform bg-teal-100 rounded-lg cursor-pointer group hover:shadow-xl hover:scale-105">
                  <Image
                    src={job.image}
                    alt="Card Image"
                    className="w-16 h-16 mr-4 rounded-full"
                    width={16}
                    height={16}
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{job.title}</h2>
                    <p className="text-sm">{job.location}</p>
                    <div className="flex mt-2">
                      <span className="px-2 py-1 mr-2 text-white bg-teal-500 rounded-full">
                        {job.jobtype}
                      </span>
                      <span className="px-2 py-1 text-white bg-teal-500 rounded-full">
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default JobCategoryPage
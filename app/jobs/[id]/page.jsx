'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Page = ({params}) => {
  // const router = useRouter();
  const [data, setData] = useState(null);
  

   const fetchData = async () => {
     try {
       const response = await axios.get("/api/job", {
         params: {
           id: params.id,
         },
       });
       setData(response.data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   useEffect(() => {
     fetchData();
   }, [params.id]);

    const handleClick = (url) => {
      if (url.startsWith("http")) {
        window.location.href = url;
      } 
    };

 


  return (
    <div className="flex flex-col items-center justify-center w-full p-5 md:p-12 lg:p-20">
      {data !== null ? (
        <>
          <div className="bg-white rounded-lg shadow-md md:w-[70%] w-full p-6">
            <div className="flex items-center justify-center">
              <h1 className="mb-4 text-3xl font-bold text-teal-500">
                {data.title}
              </h1>
            </div>

            <div className="flex items-center justify-between w-full p-4 overflow-hidden bg-teal-100 rounded-lg group ">
              <Image
                src={data.image}
                alt="Card Image"
                className="w-16 h-16 mr-4 rounded-full"
                width={20}
                height={20}
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{data.title}</h2>
                <p className="text-sm">{data.location}</p>
                <div className="flex mt-2">
                  <span className="px-2 py-1 mr-2 text-white bg-teal-500 rounded-full">
                    {data.jobtype}
                  </span>
                  <span className="px-2 py-1 text-white bg-teal-500 rounded-full">
                    {data.salary}
                  </span>
                </div>
              </div>
              {/* <a href="https://careers.google.com"> */}
              <button
                onClick={() => handleClick(data.link)}
                className="hidden px-4 py-2 mt-4 text-white bg-teal-500 rounded-md cursor-pointer md:block"
              >
                Apply Now
              </button>
              {/* </a> */}
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <p className="font-bold">Job Description: </p>
              <p className="mb-4 text-lg">{data.title}</p>
              <ul className="pl-4 mb-4 list-disc">
                <li>{data.description}</li>
              </ul>
              <p className="mb-2 font-bold">
                About the Company: {data.company}
              </p>
              <ul className="pl-4 list-disc">
                <li>{data.companydescription}</li>
              </ul>
            </div>
            <button
              onClick={() => handleClick(data.link)}
              className="block px-4 py-2 mt-4 text-white bg-teal-500 rounded-md cursor-pointer md:hidden"
            >
              Apply Now
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Page
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


const SideBar = ({closeNav, showNav}) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div className="flex flex-col bg-slate-100">
      <div className={`${navOpenStyle} md:w-25 w-80 h-[100vh] py-6 border border-black relative`}>
        <div className={`${navOpenStyle} flex flex-col justify-center absolute items-center sm:w-[80%]`}>
          <Link
            href="/admin/create"
            className="flex items-center gap-3 px-3 py-2 font-medium bg-teal-500 cursor-pointer rounded text-white hover:bg-teal-800 w-[80%]"
          >
            <p>Create Job</p>
          </Link>
          <Link
            href="/admin/jobslist"
            className="flex items-center gap-3 px-3 py-2 font-medium bg-teal-500 cursor-pointer rounded text-white hover:bg-teal-800 w-[80%] mt-4"
          >
            <p>View Jobs</p>
          </Link>
        </div>
        <AiFillCloseCircle onClick={closeNav} className="text-black font-bold rounded-full absolute top-[1.4rem] right-[1.4rem] cursor-pointer w-[1.6rem] h-[1.6rem] bg-white" />
      </div>

    </div>
  );
}

export default SideBar
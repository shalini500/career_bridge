'use client'
import Image from 'next/image';
import Link from 'next/link';
import admin from "@/public/images/admin.jpeg";
import React from 'react'

const Nav = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-teal-800">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="mr-4 text-lg font-bold text-white">CareerBridge</h1>
        </Link>
      </div>
      <div className="items-center hidden md:flex">
        <Link href="/admin" className="flex items-center justify-center">
          <button className="px-6 py-1 text-lg font-semibold text-teal-700 bg-white rounded cursor-pointer hover:bg-teal-200">
            Admin
          </button>
        </Link>
      </div>
      <div className="md:hidden">
        <Link href="/admin">
          <Image
            src={admin}
            className="w-8 h-8 rounded-full"
            height={30}
            width={30}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav
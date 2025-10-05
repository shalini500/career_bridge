'use client'
import React, { useState } from 'react'
import Head from "next/head";
import Link from 'next/link';

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Admin Welcome Page</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Welcome, Admin!
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          This is your admin dashboard.
        </p>
        <div className="flex flex-col items-center mt-6 md:flex-row">
          <Link
            href="/admin/create"
            className="px-8 py-3 mb-4 text-white bg-blue-600 rounded-md md:mb-0 md:mr-4 hover:bg-blue-700"
          >
            Create Jobs
          </Link>
          <Link
            href="/admin/jobslist"
            className="px-8 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
          >
            Manage Users
          </Link>
        </div>
      </main>
    </div>
  );
}

export default AdminPage


'use client'
import axios from 'axios';
import { FaTrashCan } from "react-icons/fa6";
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const JobsList = () => {
  const [jobsList, setJobsList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("/api/job");
    setJobsList(response.data.jobsList);
  };

  const deleteJob = async (mongoId) => {
    try {
      const response = await axios.delete("/api/job", {
        params: {
          id: mongoId,
        },
      });
      toast.success(response.data.message);
      fetchData();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen p-8 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full mx-auto table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-teal-500 bg-white border border-black">No</th>
              <th className="px-4 py-2 text-teal-500 bg-white border border-black">Company</th>
              <th className="px-4 py-2 text-teal-500 bg-white border border-black">Role</th>
              <th className="hidden px-4 py-2 text-teal-500 bg-white border border-black md:table-cell">
                Salary
              </th>
              <th className="hidden px-4 py-2 text-teal-500 bg-white border border-black lg:table-cell">
                Location
              </th>
              <th className="hidden px-4 py-2 text-teal-500 bg-white border border-black lg:table-cell">
                Date
              </th>
              <th className="px-4 py-2 text-teal-500 bg-white border border-black">Action</th>
            </tr>
          </thead>

          <tbody>
            {jobsList.map((job, index) => (
              <tr key={job._id}>
                <td className="px-4 py-2 border border-black">{index + 1}</td>
                <td className="px-4 py-2 border border-black">{job.company}</td>
                <td className="px-4 py-2 border border-black">{job.title}</td>
                <td className="hidden px-4 py-2 border border-black md:table-cell">
                  {job.salary}
                </td>
                <td className="hidden px-4 py-2 border border-black lg:table-cell">
                  {job.location}
                </td>
                <td className="hidden px-4 py-2 border border-black lg:table-cell">
                  {job.date.slice(0, 10).split("-").reverse().join("-")}
                </td>
                <td className="px-4 py-2 border border-black ">
                  <FaTrashCan
                    onClick={() => deleteJob(job._id)}
                    className="text-xl font-semibold text-red-700 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobsList
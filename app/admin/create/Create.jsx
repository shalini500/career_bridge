"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const CreatePage = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    salary: "",
    location: "",
    jobtype: "",
    category: "",
    company: "",
    companydescription: "",
    link: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value}));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("salary", data.salary);
      formData.append("location", data.location);
      formData.append("jobtype", data.jobtype);
      formData.append("category", data.category);
      formData.append("company", data.company);
      formData.append("companydescription", data.companydescription);
      formData.append("image", image);
      formData.append("link", data.link);

      const response = await axios.post("/api/job", formData);
      if (response.data.success) {
        toast.success("Job added");
        setImage(false);
        setData({
          title: "",
          description: "",
          salary: "",
          location: "",
          jobtype: "",
          category: "",
          company: "",
          companydescription: "",
          link: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 m-10">
      <form
        onSubmit={onSubmitHandler}
        className="grid w-full grid-cols-1 gap-4 p-6 bg-white rounded-lg shadow-lg lg:grid-cols-2"
      >
        <div className="flex justify-center md:col-span-2">
          <h1 className="text-4xl font-bold text-black">Create a New Job</h1>
        </div>
        <div>
          <label htmlFor="title" className="block text-gray-700">
            Job Title
          </label>
          <input
            placeholder="Enter title"
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.title}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-gray-700">
            Company
          </label>
          <input
            placeholder="Enter company"
            type="text"
            name="company"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.company}
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700">
            Job Description
          </label>
          <textarea
            placeholder="Enter Job description"
            name="description"
            rows="4"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.description}
          ></textarea>
        </div>

        <div>
          <label htmlFor="companydesc" className="block text-gray-700">
            Company Description
          </label>
          <textarea
            placeholder="Enter company description"
            name="companydescription"
            rows="4"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.companydescription}
          ></textarea>
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-700">
            Image
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Upload images"
            type="file"
            name="image"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
          />
        </div>

        <div>
          <label htmlFor="salary" className="block text-gray-700">
            Salary
          </label>
          <input
            placeholder="Enter salary"
            type="text"
            name="salary"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.salary}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700">
            Location
          </label>
          <input
            placeholder="Enter location"
            type="text"
            name="location"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.location}
          />
        </div>

        <div>
          <label htmlFor="jobtype" className="block text-gray-700">
            Job Type
          </label>
          <select
            name="jobtype"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.jobtype}
          >
            <option value="select">Select JobType</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-700">
            Category
          </label>
          <select
            name="category"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.category}
          >
            <option value="select">Select Job Category</option>
            <option value="software">Software Development</option>
            <option value="machinelearning">Machine Learning</option>
            <option value="datascience">Data Science</option>
            <option value="cybersecurity">Cyber Security</option>
            <option value="cloudcomputing">Cloud Computing</option>
            <option value="networking">Networking</option>
            <option value="marketing">Marketing</option>
            <option value="aiengineering">Artificial Intelligence</option>
          </select>
        </div>

        <div>
          <label htmlFor="link" className="text-gray-700">
            Job Link
          </label>
          <input
            placeholder="Enter link"
            type="text"
            name="link"
            className="w-full px-3 py-2 border-2 rounded-lg outline-none "
            required
            onChange={onChangeHandler}
            value={data.link}
          />
        </div>

        <div className="flex justify-center m-6 md:col-span-2">
          <button
            type="submit"
            className="px-8 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;

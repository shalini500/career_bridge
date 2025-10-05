const { NextResponse } = require("next/server");
import { ConnectDB } from '@/lib/config/db';
import JobModel from '@/lib/models/JobModel';
import { writeFile } from 'fs/promises';
const fs = require('fs');

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request) {
    const jobId = request.nextUrl.searchParams.get("id");
    if(jobId){
        const job = await JobModel.findById(jobId);
        return NextResponse.json(job);
    }
    else{
        const jobsList = await JobModel.find({});
        return NextResponse.json({jobsList});
    }
}

export async function POST(request) {

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    
    const jobData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      salary: `${formData.get("salary")}`,
      location: `${formData.get("location")}`,
      jobtype: `${formData.get("jobtype")}`,
      category: `${formData.get("category")}`,
      company: `${formData.get("company")}`,
      companydescription: `${formData.get("companydescription")}`,
      image: `${imgUrl}`,
      link: `${formData.get("link")}`,
    };

    await JobModel.create(jobData);
    console.log("Executed.");

    return NextResponse.json({success: true, message:"Job created successfully."});
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const job = await JobModel.findById(id);
    fs.unlink(`./public${job.image}`, ()=>{});
    await JobModel.findByIdAndDelete(id);
    return NextResponse.json({message:"Job deleted successfully."})
}
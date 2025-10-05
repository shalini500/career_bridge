import mongoose from "mongoose";

export const Schema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: "Not mentioned."
    },
    jobtype: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    companydescription: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    link: {
        type: String,
        required: true,
    }
});

const JobModel = mongoose.models.job || mongoose.model('job', Schema);

export default JobModel;
CareerBridge 🚀

CareerBridge is a full-stack job listing platform built with Next.js, Tailwind CSS, and MongoDB Atlas.
It enables job seekers to explore categorized job listings and provides admins with an intuitive dashboard to manage job profiles efficiently.

Key Features

Categorized Job Search — Filter jobs by skills, location, and industry priorities.

Admin Dashboard — Create, edit, and delete job postings.

Detailed Job Pages — Job descriptions, company profiles, eligibility criteria, and application links.

Responsive Design — Optimized for desktop, tablet, and mobile.

Cloud Database — Secure MongoDB Atlas integration.

Tech Stack

Frontend: Next.js

Backend: Node.js

Database: MongoDB Atlas

Styling: Tailwind CSS

Project Structure

career_bridge/
├── components/ — React components
├── pages/ — Next.js pages
├── public/ — Static assets
├── styles/ — Tailwind CSS styles
├── .env.local — Environment variables
├── package.json — Project configuration
└── README.md

Getting Started
Prerequisites

Node.js (v16+)

MongoDB Atlas account or local MongoDB

Git

Installation
git clone https://github.com/shalini500/career_bridge.git
cd career_bridge
npm install

Setup Environment Variables

Create .env.local file in project root:

MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000

Run the Project
npm run dev


Open http://localhost:3000
 in your browser.

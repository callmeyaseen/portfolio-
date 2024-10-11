import React from "react";
import api from '../assets/api.jpg'
import guessNumber from '../assets/guessNumber.jpg'
import darkandlight from '../assets/darkandlight.jpg'

const projects = [
  {
    id: 1,
    image: api,
    name: "Employe Data Fetching",
    technology: "Technology: React Js",
    descriptionn: "Fetching Data From Amazon Api",
    github: "https://git-hub-fetch-api.vercel.app/",
  },
  {
    id: 2,
    image: guessNumber,
    name: "Guess The Number",
    technology: "HTML CSS & Java Scripts",
    descriptionn: "This is just a game for learning purpose",
    github: "https://guess-the-number-drab-kappa.vercel.app/",
  },
  {
    id: 3,
    image: darkandlight,
    name: "Dark & Light Mode",
    technology: "HTML,CSS & Java Scripts",
    descriptionn: "Building Responsive and interactive user interface",
    github: "https://dark-light-mode-ecru.vercel.app/",
  },
];

function Projects() {
  return (
    <div className="bg-black text-white py-20 " id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            projects.map(project =>(
                <div key={project.id} className="bg-gray-800 p-6 hover:shadow-lg transition-transform duration-300  hover:scale-105 rounded-lg">
                    <img src={project.image} alt=""  className="rounded-lg mb-4  w-full h-48 object-cover"/>
                    <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                    <p className="text-gray-400 mb-4">{project.technology}</p>
                    <p className="text-gray-400 mb-4">{project.descriptionn}</p>
                    <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-50 text-white px-4 py-2 rounded-full " target="_blank" rel="noopener noreferrer">github</a>
                </div>
            ))
        }
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";

const services = [
    {
        id: 1,
        title: "Web Design",
        descriptionn: "Creating Visually Appealing and user Friendly web Design"
    },
    {
        id: 2,
        title: "Frontend Development",
        descriptionn: "Building Responsive and interactive user interface"
    },
    {
      id: 2,
      title: "Frontend Development",
      descriptionn: "Building Responsive and interactive user interface"
  },
    {
        id: 3,
        title: "Content Writer",
        descriptionn: "Writing Content For Your Business and Companies"
    },
    {
        id: 4,
        title: "Digital Markiting",
        descriptionn: "Permot  Your Business and Companie with Our Team"
    }
]
function Service() {
  return (
    <div className="bg-black text-white py-20 " id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
                <div id={service.id} className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="text-right text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                    {service.id}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">{service.title}</h3>
                    <p className=" mt-2 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">{service.descriptionn}</p>
                    <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Ream More</a>
                </div> 
            ))}
        </div>
      </div>
    </div>
  );
}

export default Service;

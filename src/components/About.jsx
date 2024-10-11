import React from "react";
import about from '../assets/about.jpg'
function About() {
  return (
    <div className="bg-black text-white py-20 " id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={about}
            alt=""
            className="rounded-lg mx-auto mb-8 w-72 h-80  object-cover transform transition-transform duration-300 hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              l am a passionate React Js developer with a focus on building
              modern and responsive web applications. With a strong foundation |
              in frontend technologies, I strive to create I seamless and
              efficient user experiences.
            </p>
            <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                    <div className="grow bg-green-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r  from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 hover:scale-105 w-10/12"></div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">Java Script</label>
                    <div className="grow bg-green-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r  from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 hover:scale-105 w-5/12"></div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center">
                    <label htmlFor="htmlandcss" className="w-2/12">React Js</label>
                    <div className="grow bg-green-800 rounded-full h-2.5">
                        <div className="bg-gradient-to-r  from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 hover:scale-105 w-8/12"></div>
                    </div>
                </div>
            </div>
            <div className=" mt-12 flex justify-between text-center">
                <div> 
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center">Experiance : Fresher</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

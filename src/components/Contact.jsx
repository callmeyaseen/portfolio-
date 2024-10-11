import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
    return(
        <div className="bg-black text-white py-20 " id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3>Let's Talk</h3>
            <p>I'm Open to discussing Front Web Development Projects or Partnership opportunities</p>
            <div className='mb-4 mt-2'>
                <FaEnvelope className='inline-block text-gray-400 mr-4'></FaEnvelope>
                <a href="#" className='hover:underline'>YourEmail@example.com</a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-gray-400 mr-4'></FaPhone>
                <span>+92 342 2736308</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-gray-400 mr-4'></FaMapMarkedAlt>
                <span>Street, City, Provice, Country</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <div className='space-y-4'>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400\' placeholder="Enter Your name" />
            </div>
            <div className='space-y-4'>
                <label htmlFor="email" className='block mb-2'>Your Email</label>
                <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400\' placeholder="Enter Your email" />
            </div>
            <div className='space-y-4'>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400\' rows={5} placeholder="Enter you Message Or Description" />
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform hover:scale-105 px-8 py-2 mt-2 rounded-full'>Submit</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Contact
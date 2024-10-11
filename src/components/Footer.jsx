import React from "react";
import { FaFacebook, FaGithub, FaInstagram,} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-black text-whit">
      <div>
        <div className="flex justify-between bg-black text-white px-6 pb-3">
          <div>
            <h3>Yaseen</h3>
            <p>I Specialize in building modern and responsive web Applicatio</p>
          </div>
          <div className="flex flex-row w-2/4">
                <input type="email" className="w-full p-2 rounded-lg bg-gray-800 border-x-gray-600 focus:outline-none focus:bg-green-800" placeholder="Enter Your Email"/>
                <button className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-4 rounded-lg">Subscribe</button>
          </div>
        </div>
        <div className="h-[1px] w-full rounded bg-white mx-auto"></div>
        <div className="bg-black text-white flex justify-between mx-3 p-2">
            <div><p>© All Write Reserved</p></div>
            <div className="flex gap-3 text-2xl cursor-pointer">
                <FaFacebook/>
                <FaInstagram/>
                <FaGithub/>
            </div>
            <div className="flex gap-3">
                <a href="#">Privacy</a>
                <a href="#">Terms & Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

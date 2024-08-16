import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white overflow-x-hidden">
      {/* Navbar */}
      <div className="flex items-center w-screen px-4 py-3 font-bold text-black bg-gray-200">
        <div className="flex items-center justify-center gap-4 px-1 py-1 text-sm ">
          <a href="/"> About</a>
          <a href="/My Projects"> Experience</a>
          <a href="/"> Skils</a>
          <a href="/"> Project</a>
          <a href="/signup"> Contacts</a>
          <a href="/"> Hobbies</a>
        </div>
      </div>

      {/* Hero */}
      <div className="flex items-center lg:p-24 sm:12 md:18 bg-black">
        {/* left */}
        <div className="flex flex-col flex-1 gap-8 lg:mr-36 sm:mr-20 sm:pr-20">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-bold  text-purple-800 ">
            {" "}
            I am Hamza Khurram
          </h1>
          <p className="font-bold text-white lg:text-7xl sm:text-lg md:text-lg"> Web Developer</p>
          <p className="text-white text-gray">
            {" "}
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>
          <div>
            <button className="lg:px-10 lg:py-4 sm:px-8 sm:py-2 xs:px-10 xs:py-5 md:px-8 md:py-3 font-semibold text-purple-500  rounded-full outline">
              Download CV
            </button>
            <div className=" flex text-purple-500 item-center justify-center gap-8 lg:ml-[100px] sm:ml-[30px] lg:mt-[-44px] sm:mt-[24px] xs:mt-[22px]">
              <div className="px-2 py-2 rounded-full outline">
                <FaTwitter />
              </div>
              <div className="px-2 py-2 rounded-full outline">
                <IoEarthOutline />
              </div>
              <div className="px-2 py-2 rounded-full outline">
                <FaLinkedinIn />
              </div>
              <div className="px-2 py-2 rounded-full outline">
                <FaGithub />
              </div>
            </div>
          </div>
        </div>

        {/* Right  */}
        <div className="flex flex-1  ">
          <img
            src="Hamza3.png"
            alt=""
            className=" lg:w-[480px] lg:h-[500px] sm:w-[180px] sm:h-[160px] md:w-[300px] md:h-[320px] rounded-full bg-gray-200"
          />
        </div>
      </div>
      {/* Services */}
      <div className="flex justify-center gap-8 font-bold text-purple-500 bg-black p-28 sm:text-xl md:text-3xl lg:text-7xl ">
        <h1>
          5 <span className="xs:text-xs md:text-sm text-white"> Years of Experience</span>
        </h1>
        <h1>
          30+ <span className="xs:text-xs sm:text:xl md:text-sm text-white "> Project Completed</span>
        </h1>
        <h1>
          1K <span className="xs:text-xs md:text-sm text-white "> Happy Clients</span>
        </h1>
        <h1>
          14 <span className="xs:text-xs md:text-sm text-white "> Years of Experience</span>
        </h1>
      </div>

      {/* Quality Services */}
      <div className="pb-20 bg-black">
        <h1 className="flex items-center justify-center lg:text-5xl md:text-5xl sm:text-2xl font-bold text-purple-800 pt-[80px]">
          My Quality Services{" "}
        </h1>
        <p className="flex justify-center sm:text-xl md:text-2xl lg:text-3xl  item Center pt-[20px] text-white">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
        {/* First */}
        <div>
          <h1 className="flex sm:text-xl md:text-2xl lg:text-4xl font-bold text-purple-700 mt-[100px] gap-4">
            <span className=" sm:text-sm md:text-md lg:text-xl mt-[7px] ml-[150px] sm:flex sm:justify-center text-white">01</span>
            Website Developer
          </h1>
          <p className="flex ml-[700px] mr-[200px] mt-[-40px] text-white">
            {" "}
            Creating user-friendly and visually appealing websites that bring
            your ideas to life. Let's build your perfect online presence
            together.
          </p>
        </div>
        <hr className="text-gray-800"></hr>
        <div>
          <h1 className="flex text-4xl font-bold text-purple-700 mt-[100px] gap-4">
            <span className=" text-xl mt-[7px] ml-[150px] text-white">02</span>
            WordPress Designer
          </h1>
          <p className="flex ml-[700px] mr-[200px] mt-[-40px] text-white">
            {" "}
            Building custom WordPress websites that are easy to use and look
            great. Let's create your perfect online presence together.
          </p>
        </div>
        <hr></hr>
        <div>
          <h1 className="flex text-4xl font-bold text-purple-700 mt-[100px] gap-4">
            <span className=" text-xl mt-[7px] ml-[150px] text-white">03</span>
            UI/UX Design
          </h1>
          <p className="flex ml-[700px] mr-[200px] mt-[-40px] text-white">
            Designing intuitive and engaging user interfaces that enhance user
            experience. Let's make your digital products easy and enjoyable to
            use.
          </p>
        </div>
        <hr></hr>
        <div>
          <h1 className="flex text-4xl font-bold text-purple-700 mt-[100px] gap-4">
            <span className=" text-xl mt-[7px] ml-[150px] text-white">04</span>
            Graphic Design
          </h1>
          <p className="flex ml-[700px] mr-[200px] mt-[-40px] text-white">
            {" "}
            Creating eye-catching graphics that communicate your brand's
            message. Let's bring your ideas to life with great design.
          </p>
        </div>
        <hr></hr>
      </div>

      {/* My Projects */}
      <div>
        <h1 className="flex justify-center pt-8 text-4xl font-bold text-purple-700 bg-gray-200">
          {" "}
          My Projects
        </h1>
        <div className="h-[900px] w-[1535px] pt-8 bg-gray-200 text-white ">
          <div className="flex justify-center gap-16">
            <div className="bg-purple-700  h-[350px] w-[250px]   rounded-xl">
              <p className="pt-3 font-bold text-white pl-7">
                {" "}
                SMI Technology Services{" "}
              </p>
              <img
                className=" h-[80%] w-[75%] mt-4 ml-8 rounded-lg"
                src="SMI.jpg"
                alt=""
              />
            </div>

            <div className="bg-purple-700  h-[350px] w-[250px]   rounded-xl">
              <p className="pt-3 pl-20 font-bold text-white"> Royals Vibe </p>
              <img
                className=" h-[80%] w-[75%] mt-4 ml-8 rounded-lg"
                src="Royals Vibe.jpg"
                alt=""
              />
            </div>

            <div className="bg-purple-700  h-[350px] w-[250px]   rounded-xl">
              <p className="pt-3 pl-24 font-bold text-white"> RTES </p>
              <img
                className=" h-[80%] w-[75%] mt-4 ml-8 rounded-lg"
                src="RTES.jpg"
                alt=""
              />
            </div>

            <div className="bg-purple-700  h-[350px] w-[250px]   rounded-xl">
              <p className="pt-3 pl-20 font-bold text-white"> Cobblerland </p>
              <img
                className=" h-[80%] w-[75%] mt-4 ml-8 rounded-lg"
                src="Cobblerland.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center gap-24 pt-8">
            <div className="bg-purple-700  h-[350px] w-[250px]   rounded-xl">
              <p className="pt-3 pl-20 font-bold text-white"> Fan Organic </p>
              <img
                className=" h-[80%] w-[75%] mt-4 ml-8 rounded-lg"
                src="Cobblerland.jpg"
                alt=""
              />
            </div>

            <div className="bg-purple-700  h-[350px] w-[250px]   rounded-xl">
              <p className="pt-3 font-bold text-white pl-14">
                {" "}
                Digiarno Institute{" "}
              </p>
              <img
                className=" h-[80%] w-[75%] mt-4 ml-8 rounded-lg"
                src="DIGIARNO.jpg"
                alt=""
              />
            </div>

            <div className="bg-purple-700  h-[350px] w-[250px]   rounded-xl">
              <p className="pt-3 font-bold text-white pl-14">
                {" "}
                Abwholesalevape{" "}
              </p>
              <img
                className=" h-[80%] w-[75%] mt-4 ml-8 rounded-lg"
                src="AB.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 bg-black ">
        <div className="flex justify-center pt-6 text-2xl font-bold text-purple-700">
          Contact Me
        </div>
        <div className="flex items-center justify-around mt-5">
          <div>
            <p className="flex justify-center gap-1 font-bold text-white">
              {" "}
              Call Me <FiPhoneCall />{" "}
            </p>{" "}
            <p className="font-bold text-purple-700">123456789</p>
          </div>
          <div>
            <p className="flex justify-center gap-1 font-bold text-white">
              {" "}
              Email <MdOutlineMarkEmailUnread />{" "}
            </p>{" "}
            <p className="font-bold text-purple-700 ">
              m.hamzakhurram.aiu@gmail.com
            </p>
          </div>
          <p className="flex items-center justify-center gap-4 text-2xl text-purple-700">
            <SiFacebook /> <GrInstagram /> <FaWhatsapp />
          </p>
        </div>
        <div className="flex items-center justify-center pb-8 mt-6">
          <button className="px-10 py-4 text-white bg-purple-800 rounded-md w-50">
            {" "}
            <a href="signup">Send Message</a>{" "}
          </button>
        </div>
      </div>
      <div className="px-2 py-2 text-sm bg-gray-200">
        <h1>2024 @Copyright - All Rights Reserved</h1>
      </div>

      <div></div>
    </div>
  );
}

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import img from "../assets/img/Education.png";

function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center  px-20 py-6">
        <div className="flex flex-row items-center gap-x-24">
          <div>

          </div>
          <div>
            <h2 className="text-lg font-bold">XY-COLLEGE</h2>
          </div>
          <div className="flex flex-row items-center gap-x-10">
            <h5 className="text-gray-700">Courses</h5>
            <h5 className="text-gray-700">Subjects</h5>
            <h5 className="text-gray-700">Grades</h5>
            <h5 className="text-gray-700">Analytics</h5>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <h5>EN</h5>
          <KeyboardArrowDownIcon />
        </div>
      </nav>
      <div className="px-20">
      <div className="mt-40">
      <h1 className="text-7xl font-bold font-dm-sans ">Harmony in Learning</h1>
    </div>
      <div>
      <h1 className="text-7xl font-bold font-dm-sans text-green-700">Uniting Curiosity and <br/>Knowledge</h1>
      </div>
      <div className="mt-4">
        <h5 className="font-light text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui<br/> lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat<br/> fugiat aliqua.</h5>
      </div>
      <div className="flex gap-4 mt-10">
      <button className="bg-green-700 text-white py-2 px-4 rounded ">
        Explore
      </button>
      <button className="bg-white text-black py-1 px-4 rounded shadow w-32">
        Watch Video
      </button>
    </div>
    <div className="">
    <div className="w-96 h-96 bg-white p-4 border shadow flex justify-center items-center">
      <div className="w-80 h-80 bg-gray-200 text-black p-2 ">
      <img src={img} alt="Image" className="w-full h-full object-contain" />
      </div>
      </div>
    </div>
    </div>
    </div>
   
  );
}

export default Home;
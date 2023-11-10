import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";

function Home() {
  return (
    <div>
      <nav className="flex flex-row justify-between items-center  px-20 py-6">
        <div className="flex flex-row items-center gap-x-24">
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
      <div>
        <h1>Harmony in Learning</h1>
      </div>
      <div>
        <h1>Uniting Curiosity and Knowledge</h1>
      </div>
      <div>
        <h5>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua</h5>
      </div>
      <Button>Explore</Button>
      <Button>Watch Video</Button>
    </div>
  );
}

export default Home;
import Board from "@/components/board/board";
import Scoreboard from "@/components/scoreboard/scoreboard";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen  flex items-center flex-col gap-14 mt-20   ">
      <div className=" space-y-8  ">
        <h1 className="text-5xl font-extrabold bg-primary text-center text-perfection-yellow  rounded-xl w-fit mx-auto px-5 py-2">
          TIC-TAC-TOE
        </h1>
        <div className="mx-6 space-y-5">
          <p className="text-2xl ">Kaori Kawakami</p>
          <p className="flex flex-col gap-1">
            <span className="font-bold">Technologies used: </span>Next.js,
            React.js, Tailwind CSS, ShadCN, React Context API
          </p>
        </div>
      </div>
      <Board />
      <Scoreboard />
    </div>
  );
};

export default HomePage;

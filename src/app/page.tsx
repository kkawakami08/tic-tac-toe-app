import Board from "@/components/board";
import InfoText from "@/components/info-text";
import ScoreBoard from "@/components/scoreboard";
import React from "react";

const HomePage = () => {
  return (
    <div className=" flex items-center flex-col  gap-10 min-h-screen justify-center md:gap-16">
      <div className=" text-center space-y-3">
        <h1 className="text-5xl font-extrabold bg-primary text-center text-perfection-yellow  rounded-xl w-fit mx-auto px-5 py-2 ">
          TIC-TAC-TOE
        </h1>
        <p className="text-lg ">Made by: Kaori Kawakami</p>
      </div>
      <div className="space-y-10 md:flex md:gap-10 md:items-center">
        <ScoreBoard />

        <div className="space-y-5 sm:space-y-10">
          <Board />
          <InfoText />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

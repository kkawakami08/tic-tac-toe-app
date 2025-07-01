import Board from "@/components/board";
import InfoText from "@/components/info-text";
import ScoreBoard from "@/components/scoreboard";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen  flex items-center flex-col gap-10 mt-10   ">
      <h1 className="text-5xl font-extrabold bg-primary text-center text-perfection-yellow  rounded-xl w-fit mx-auto px-5 py-2">
        TIC-TAC-TOE
      </h1>

      <ScoreBoard />
      <Board />
      <InfoText />
    </div>
  );
};

export default HomePage;

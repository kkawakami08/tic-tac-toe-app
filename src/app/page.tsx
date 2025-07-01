import Board from "@/components/board/board";
import Scoreboard from "@/components/scoreboard/scoreboard";
import React from "react";

const HomePage = () => {
  return (
    <div className="mx-5">
      <Board />
      <Scoreboard />
    </div>
  );
};

export default HomePage;

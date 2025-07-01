"use client";

import { useGameData } from "../context-provider";
import { Button } from "../ui/button";

const ScoreBoard = () => {
  const { playerStats, resetFullGame } = useGameData();

  const PlayerAIcon = playerStats.playerA.icon;
  const PlayerBIcon = playerStats.playerB.icon;

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-center mx-5 gap-3  md:flex-col">
        <div className="space-y-3 border-perfection-red border-2 rounded-xl p-5">
          <p className="text-3xl text-perfection-yellow font-semibold text-center">
            Player 1
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-1(">
              <p className=" text-2xl ">Score</p>
              <p className="text-4xl font-bold ">{playerStats.playerA.score}</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className=" text-2xl ">Icon</p>
              <PlayerAIcon
                size={40}
                className="text-perfection-yellow "
                strokeWidth={3}
              />
            </div>
          </div>
        </div>
        <div className="space-y-3 border-perfection-red border-2 rounded-xl p-5">
          <p className="text-3xl text-perfection-yellow font-semibold text-center">
            Player 2
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-1(">
              <p className=" text-2xl ">Score</p>
              <p className="text-4xl font-bold ">{playerStats.playerB.score}</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <p className=" text-2xl ">Icon</p>
              <PlayerBIcon
                size={30}
                className="text-perfection-yellow "
                strokeWidth={3}
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={resetFullGame}
        className="text-lg sm:text-xl sm:py-6 bg-perfection-red "
      >
        Reset Full Game
      </Button>
    </div>
  );
};

export default ScoreBoard;

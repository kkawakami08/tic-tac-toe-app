"use client";

import { X, Circle } from "lucide-react";
import { useGameData } from "../context-provider";
import { Button } from "../ui/button";

const Scoreboard = () => {
  const { player, winner, resetGame } = useGameData();
  const currentPlayer = player ? "Player 2" : "Player 1";

  const icon =
    currentPlayer === "Player 1" ? (
      <X strokeWidth={3} size={30} className="text-perfection-yellow" />
    ) : (
      <Circle strokeWidth={4} size={20} className="text-perfection-yellow" />
    );

  return (
    <div className="text-2xl  min-h-20 ">
      {winner ? (
        <div className="flex  gap-3 items-center justify-between">
          <p>{winner}</p>
          <Button onClick={resetGame} className="text-xl py-5">
            New Game
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-5 place-items-center ">
          {icon}
          <p className="col-span-4">It&apos;s {currentPlayer}&apos;s turn.</p>
        </div>
      )}
    </div>
  );
};

export default Scoreboard;

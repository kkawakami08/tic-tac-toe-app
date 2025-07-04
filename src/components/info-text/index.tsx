"use client";

import { X, Circle } from "lucide-react";
import { useGameData } from "../context-provider";
import { Button } from "../ui/button";

const InfoText = () => {
  const { player, winner, resetGame } = useGameData();
  const currentPlayer = player ? "Player 1" : "Player 2";
  const icon =
    currentPlayer === "Player 1" ? (
      <X strokeWidth={3} className="text-perfection-yellow size-9 sm:size-10" />
    ) : (
      <Circle
        strokeWidth={4}
        className="text-perfection-yellow size-7 sm:size-9"
      />
    );

  return (
    <div className="text-3xl sm:text-4xl min-h-12 w-fit mx-auto">
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

export default InfoText;

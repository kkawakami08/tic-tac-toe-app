"use client";

import { useGameData } from "../context-provider";
import { Button } from "../ui/button";

const Scoreboard = () => {
  const { player, winner, resetGame } = useGameData();
  const currentPlayer = player ? "Player 2" : "Player 1";

  return (
    <div>
      {winner ? (
        <div>
          <p>{winner}</p>
          <Button onClick={resetGame}>Reset Game</Button>
        </div>
      ) : (
        <p>It&apos;s {currentPlayer}&apos;s turn.</p>
      )}
    </div>
  );
};

export default Scoreboard;

"use client";

import { determineWinner } from "@/lib/utils";
import { useGameData } from "../context-provider";
import BoardItem from "./board-item";
import { useEffect } from "react";

const Board = () => {
  const {
    board,
    setBoard,
    player,
    setPlayer,
    turnOrder,
    setTurnOrder,
    winner,
    setWinner,
  } = useGameData();

  const currentPlayer = player ? "O" : "X";

  const handleBoxClick = (location: number) => {
    if (board[location] !== null) {
      console.log("this box is taken");
      return;
    }

    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[location] = currentPlayer;
      return newBoard;
    });
  };

  const turnEndProcess = () => {
    if (turnOrder + 1 == 10) {
      setWinner("Tie Game!");
      return;
    }
    const gameWinner = determineWinner(board, currentPlayer);
    if (gameWinner) {
      setWinner(`${!player ? "Player 1" : "Player 2"} wins!`);
      return;
    } else {
      setPlayer((prev) => !prev);
      setTurnOrder((prev) => prev + 1);
    }
  };
  useEffect(() => {
    turnEndProcess();
  }, [board]);

  return (
    <div className="mx-auto grid grid-cols-3 gap-2 bg-perfection-red p-2 rounded-xl  w-fit ">
      {board.map((_, index) => (
        <BoardItem
          key={index}
          info={board[index]}
          location={index}
          handleClick={handleBoxClick}
          disabled={winner !== null}
        />
      ))}
    </div>
  );
};

export default Board;

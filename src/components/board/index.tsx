"use client";

import { determineWinner } from "@/lib/utils";
import { useGameData } from "../context-provider";
import BoardItem from "./board-item";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

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
    setPlayerStats,
  } = useGameData();

  const initialRender = useRef(true);

  const currentPlayer = player ? "X" : "O";

  const updateScore = (player: "playerA" | "playerB") => {
    setPlayerStats((prev) => ({
      ...prev,
      [player]: {
        ...prev[player],
        score: prev[player].score + 1,
      },
    }));
  };

  const handleBoxClick = (location: number) => {
    if (board[location] !== null) {
      toast.error("This space is occupied!");
      return;
    }

    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[location] = currentPlayer;
      return newBoard;
    });
  };

  const turnEndProcess = () => {
    const gameWinner = determineWinner(board, currentPlayer);
    if (gameWinner) {
      if (player) {
        //player 1 wins
        setWinner("Player 1 wins!");
        updateScore("playerA");
      } else {
        //player 2 wins
        setWinner("Player 2 wins!");
        updateScore("playerB");
      }

      return;
    }
    const fullBoard = board.every((cell) => cell !== null);
    if (fullBoard) {
      setWinner("Tie Game!");
      return;
    }
    // console.log("updating game");
    setPlayer((prev) => !prev);
    setTurnOrder((prev) => prev + 1);
  };
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    }
    const emptyBoard = board.every((cell) => cell === null);
    if (!emptyBoard && winner === null) {
      console.log(turnOrder);

      turnEndProcess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

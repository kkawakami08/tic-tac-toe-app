"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type GameData = {
  board: (string | null)[];
  setBoard: Dispatch<SetStateAction<(string | null)[]>>;
  player: boolean;
  setPlayer: Dispatch<SetStateAction<boolean>>;
  turnOrder: number;
  setTurnOrder: Dispatch<SetStateAction<number>>;
  winner: null | string;
  setWinner: Dispatch<SetStateAction<string | null>>;
  resetGame: () => void;
};

const initialGameState = {
  board: Array(9).fill(null),
  player: true,
  turnOrder: 0,
  winner: null,
};

const GameContext = createContext<GameData | undefined>(undefined);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [turnOrder, setTurnOrder] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const resetGame = () => {
    setBoard(initialGameState.board);
    setPlayer(initialGameState.player);
    setTurnOrder(initialGameState.turnOrder);
    setWinner(initialGameState.winner);
  };
  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        player,
        setPlayer,
        turnOrder,
        setTurnOrder,
        winner,
        setWinner,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameData = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("Game data must be used within Provider");
  }
  return context;
};

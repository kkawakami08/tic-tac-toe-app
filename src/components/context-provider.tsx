"use client";
import { Circle, LucideIcon, X } from "lucide-react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type PlayerStat = {
  playerA: { icon: LucideIcon; score: number };
  playerB: { icon: LucideIcon; score: number };
};

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
  resetFullGame: () => void;
  playerStats: PlayerStat;
  setPlayerStats: Dispatch<SetStateAction<PlayerStat>>;
};
const getInitialGameState = () => ({
  board: Array(9).fill(null) as (string | null)[],
  player: true,
  turnOrder: 1,
  winner: null,
  playerStats: {
    playerA: {
      icon: X,
      score: 0,
    },
    playerB: {
      icon: Circle,
      score: 0,
    },
  },
});

const GameContext = createContext<GameData | undefined>(undefined);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [board, setBoard] = useState<(string | null)[]>(
    getInitialGameState().board
  );
  const [player, setPlayer] = useState(getInitialGameState().player);
  const [turnOrder, setTurnOrder] = useState(getInitialGameState().turnOrder);
  const [winner, setWinner] = useState<string | null>(
    getInitialGameState().winner
  );
  const [playerStats, setPlayerStats] = useState(
    getInitialGameState().playerStats
  );

  const resetGame = () => {
    const initialGameState = getInitialGameState();
    setBoard(initialGameState.board);
    setPlayer(initialGameState.player);
    setTurnOrder(initialGameState.turnOrder);
    setWinner(initialGameState.winner);
  };
  const resetFullGame = () => {
    const initialGameState = getInitialGameState();
    resetGame();
    setPlayerStats(initialGameState.playerStats);
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
        playerStats,
        setPlayerStats,
        resetGame,
        resetFullGame,
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

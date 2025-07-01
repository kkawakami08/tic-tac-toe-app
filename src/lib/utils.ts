import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const determineWinner = (board: (string | null)[], player: string) => {
  // console.log("checking for winner...");
  if (board[0] == player && board[1] == player && board[2] == player) {
    return true;
  }
  if (board[0] == player && board[3] == player && board[6] == player) {
    return true;
  }
  if (board[0] == player && board[4] == player && board[8] == player) {
    return true;
  }
  if (board[1] == player && board[4] == player && board[7] == player) {
    return true;
  }
  if (board[2] == player && board[4] == player && board[6] == player) {
    return true;
  }
  if (board[2] == player && board[5] == player && board[8] == player) {
    return true;
  }
  if (board[3] == player && board[4] == player && board[5] == player) {
    return true;
  }
  if (board[6] == player && board[7] == player && board[8] == player) {
    return true;
  }
  // console.log("No winner, continue");
  return false;
};

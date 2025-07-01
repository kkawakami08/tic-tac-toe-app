"use client";

import { X, Circle } from "lucide-react";

interface BoardItemProps {
  info: string | null;
  location: number;
  handleClick: (location: number) => void;
  disabled: boolean;
}

const BoardItem = ({
  info,
  location,
  handleClick,
  disabled,
}: BoardItemProps) => {
  // const { player, setBoard } = useGameData();
  const clickBox = () => {
    if (disabled) {
      return;
    } else {
      handleClick(location);
    }
  };

  const icon =
    info === "X" ? (
      <X className="size-24 sm:size-36 stroke-3" />
    ) : (
      <Circle strokeWidth={2.5} className="size-18 sm:size-24 stroke-3 " />
    );

  return (
    <div
      className="flex items-center justify-center size-28 sm:size-36 border-2 rounded-md  border-perfection-dark-blue bg-perfection-dark-blue"
      onClick={clickBox}
    >
      <span className="text-perfection-yellow ">{info ? icon : " "}</span>
    </div>
  );
};

export default BoardItem;

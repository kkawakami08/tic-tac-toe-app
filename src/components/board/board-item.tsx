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
      <X strokeWidth={3} size={70} />
    ) : (
      <Circle strokeWidth={3} size={55} />
    );

  return (
    <div
      className="flex items-center justify-center size-24 border-2 rounded-md  border-perfection-dark-blue bg-perfection-dark-blue"
      onClick={clickBox}
    >
      <span className="text-perfection-yellow ">{info ? icon : " "}</span>
    </div>
  );
};

export default BoardItem;

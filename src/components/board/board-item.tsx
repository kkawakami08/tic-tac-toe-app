"use client";

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

  return (
    <div
      className="flex items-center justify-center size-24 border border-black"
      onClick={clickBox}
    >
      <span>{info ? info : " "}</span>
    </div>
  );
};

export default BoardItem;

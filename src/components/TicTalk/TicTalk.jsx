import React, { useEffect, useState } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-red-600 w-16 h-16 flex items-center justify-center text-xl font-bold"
    >
      {value}
    </button>
  );
};

function TicTalk() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [state, setState] = useState("");

  const getWinner = (squares) => {
    const winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      const [x, y, z] = winnerPattern[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== ""))
      setState("The Game is Drawn");
    else if (getWinner(squares)) {
      setState(`The winner is ${getWinner(squares)} Please Restart the game`);
    } else {
      setState(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [isXTurn, squares]);

  const handleClick = (getCurrentIndex) => {
    const cpySquares = [...squares];
    if (cpySquares[getCurrentIndex] || getWinner(squares)) {
      return;
    }
    cpySquares[getCurrentIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(""));
    setState("");
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center m-4">
      {/* Grid container with 3 columns */}
      <div className="grid grid-cols-3 gap-0 w-48">
        {squares.map((value, index) => (
          <Square key={index} onClick={() => handleClick(index)} value={value} />
        ))}
      </div>
      <h2 className="text-2xl font-bold m-4">{state}</h2>
      <button onClick={handleReset} className="px-5 py-2 bg-lime-500 rounded-lg text-white font-semibold">
        Restart
      </button>
    </div>
  );
}

export default TicTalk;

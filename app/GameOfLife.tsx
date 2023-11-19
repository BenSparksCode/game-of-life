"use client";

import { useEffect, useState } from "react";

interface GameOfLifeProps {
  width: number;
  height: number;
}

interface CellProps {
  cellValue: number;
  onClick: () => void;
}

// Cell sub-component of the Game of Life grid. One for each block.
const Cell: React.FC<CellProps> = ({ cellValue, onClick }) => {
  return (
    <div
      className={`w-10 h-10 border-2 border-blue-600 ${
        cellValue === 1 ? "bg-green-500" : "bg-white"
      }`}
      onClick={onClick}
    >
      {cellValue}
    </div>
  );
};

const GameOfLife: React.FC<GameOfLifeProps> = ({ width, height }) => {
  const [gen, setGen] = useState(0);
  const [grid, setGrid] = useState(
    new Array(width).fill(0).map(() => new Array(height).fill(0))
  );

  useEffect(() => {
    console.log("Grid updated");
  }, [gen]);

  const nextGen = () => {
    console.log("Current gen", gen);
    setGen(gen + 1);
  };

  const toggleCellValue = (rowIndex: number, columnIndex: number) => {
    console.log(`Cell [${rowIndex},${columnIndex}] clicked`);
    const newGrid = [...grid];
    newGrid[rowIndex][columnIndex] = grid[rowIndex][columnIndex] === 0 ? 1 : 0;
    setGrid(newGrid);
  };

  return (
    <div>
      <h1>Game Of Life</h1>

      {grid.map((row, rowIndex) => {
        return (
          <div className="flex" key={rowIndex}>
            {row.map((cell, columnIndex) => {
              return (
                <Cell
                  key={columnIndex}
                  cellValue={grid[rowIndex][columnIndex]}
                  onClick={() => toggleCellValue(rowIndex, columnIndex)}
                />
              );
            })}
          </div>
        );
      })}

      <button
        className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded"
        onClick={nextGen}
      >
        Next Gen
      </button>
    </div>
  );
};

export default GameOfLife;

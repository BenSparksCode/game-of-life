'use client'
import { CellProps, GameOfLifeGridProps } from '../../types/types' // TODO refactor to abs path in tsconfig

// A component for a single cell in the Game of Life grid
const Cell: React.FC<CellProps> = ({ cellValue, onClick }) => (
    <div
        className={`w-10 h-10 border-2 border-lumoGreen-light ${
            cellValue === 1 ? 'bg-lumoGreen-dark' : 'bg-offBlack-dark'
        }`}
        onClick={onClick}
    ></div>
)

// The full Game of Life grid
const GameOfLifeGrid: React.FC<GameOfLifeGridProps> = ({ grid, toggleCellValue }) => (
    <div>
        {grid.map((row, rowIndex) => (
            <div className="flex" key={rowIndex}>
                {row.map((cell, columnIndex) => (
                    <Cell
                        key={columnIndex}
                        cellValue={grid[rowIndex][columnIndex]}
                        onClick={() => toggleCellValue(rowIndex, columnIndex)}
                    />
                ))}
            </div>
        ))}
    </div>
)

export default GameOfLifeGrid

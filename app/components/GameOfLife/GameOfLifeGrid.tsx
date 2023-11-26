'use client'
import { CellProps, GameOfLifeGridProps } from '../../types/types' // TODO refactor to abs path in tsconfig

// A component for a single cell in the Game of Life grid
const Cell: React.FC<CellProps> = ({ cellValue, cellHeightInPx, onClick }) => (
    <div
        style={{ width: `${cellHeightInPx}px`, height: `${cellHeightInPx}px` }}
        className={`border border-lumoGreen-light ${
            cellValue ? 'bg-lumoGreen-light' : 'bg-offBlack-dark'
        }`}
        onClick={onClick}
    ></div>
)

// The full Game of Life grid
const GameOfLifeGrid: React.FC<GameOfLifeGridProps> = ({
    grid,
    gridHeightInCells,
    cellHeightInPx,
    toggleCellValue,
}) => (
    <div className="overflow-hidden justify-self-start self-center m-4">
        {grid.map((row, rowIndex) => (
            <div className="flex" key={rowIndex}>
                {row.map((_, columnIndex) => (
                    <Cell
                        key={columnIndex}
                        cellValue={grid[rowIndex][columnIndex]}
                        cellHeightInPx={cellHeightInPx}
                        onClick={() => toggleCellValue(rowIndex, columnIndex)}
                    />
                ))}
            </div>
        ))}
    </div>
)

export default GameOfLifeGrid

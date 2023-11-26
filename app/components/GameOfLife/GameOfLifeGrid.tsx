'use client'

import { useEffect, useState } from 'react'

import { CellProps, GameOfLifeGridProps } from '../../types/types' // TODO refactor to abs path in tsconfig

// The full Game of Life grid
const GameOfLifeGrid: React.FC<GameOfLifeGridProps> = ({
    grid,
    gridHeightInCells,
    cellHeightInPx,
    toggleCellValue,
}) => {
    const [isMouseDown, setIsMouseDown] = useState(false)
    const [hasMouseMoved, setHasMouseMoved] = useState(false)

    // This is needed to detect mouseup outside of grid
    useEffect(() => {
        const handleMouseUpWindow = () => setIsMouseDown(false)

        window.addEventListener('mouseup', handleMouseUpWindow)

        return () => {
            window.removeEventListener('mouseup', handleMouseUpWindow)
        }
    }, [])

    // Toggle cell state on mouse down
    const handleMouseDown = (rowIndex: number, columnIndex: number) => {
        setIsMouseDown(true)
        toggleCellValue(rowIndex, columnIndex) // Toggle initially on mouse down
        setHasMouseMoved(false) // Reset the mouse moved flag
    }

    // Toggle cell state as you enter them if the mouse is down
    const handleMouseEnter = (rowIndex: number, columnIndex: number) => {
        if (isMouseDown) {
            setHasMouseMoved(true) // Set the flag as soon as the mouse enters a new cell
            toggleCellValue(rowIndex, columnIndex)
        }
    }

    const handleMouseUp = (rowIndex: number, columnIndex: number) => {
        setIsMouseDown(false)
        if (!hasMouseMoved) {
            toggleCellValue(rowIndex, columnIndex)
        }
    }

    return (
        <div className="overflow-hidden justify-self-start self-center m-4">
            {grid.map((row, rowIndex) => (
                <div className="flex" key={rowIndex}>
                    {row.map((_, columnIndex) => (
                        <Cell
                            key={columnIndex}
                            cellValue={grid[rowIndex][columnIndex]}
                            cellHeightInPx={cellHeightInPx}
                            onClick={() => toggleCellValue(rowIndex, columnIndex)}
                            onMouseDown={() => handleMouseDown(rowIndex, columnIndex)}
                            onMouseEnter={() => handleMouseEnter(rowIndex, columnIndex)}
                            onMouseUp={() => handleMouseUp(rowIndex, columnIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

// A component for a single cell in the Game of Life grid
const Cell: React.FC<CellProps> = ({
    cellValue,
    cellHeightInPx,
    onClick,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
}) => (
    <div
        style={{ width: `${cellHeightInPx}px`, height: `${cellHeightInPx}px` }}
        className={`border border-lumoGreen-light ${
            cellValue ? 'bg-lumoGreen-light' : 'bg-offBlack-dark'
        }`}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        onMouseUp={onMouseUp}
    ></div>
)

export default GameOfLifeGrid

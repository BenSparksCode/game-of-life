'use client'

import { useEffect, useState } from 'react'
import { generateNextGrid } from './logic'
import { CellProps, GameOfLifeProps } from './types'

// Cell sub-component of the Game of Life grid. One for each block.
const Cell: React.FC<CellProps> = ({ cellValue, onClick }) => {
    return (
        <div
            className={`w-10 h-10 border-2 border-lumoGreen-light ${
                cellValue === 1 ? 'bg-lumoGreen-dark' : 'bg-offBlack-dark'
            }`}
            onClick={onClick}
        ></div>
    )
}

const GameOfLife: React.FC<GameOfLifeProps> = ({ width, height }) => {
    const [gen, setGen] = useState(0)
    const [grid, setGrid] = useState(new Array(width).fill(0).map(() => new Array(height).fill(0)))

    useEffect(() => {
        setGrid((g) => generateNextGrid(g))
    }, [gen])

    const nextGen = () => {
        setGen(gen + 1)
    }

    const toggleCellValue = (rowIndex: number, columnIndex: number) => {
        const newGrid = [...grid]
        newGrid[rowIndex][columnIndex] = grid[rowIndex][columnIndex] === 0 ? 1 : 0
        setGrid(newGrid)
    }

    return (
        <div>
            <div className="text-lumoGreen mb-2">Current Gen: {gen}</div>
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
                            )
                        })}
                    </div>
                )
            })}

            <button
                className="mt-2 border-2 border-lumoGreen text-lumoGreen hover:bg-lumoGreen hover:text-offBlack-dark font-bold py-2 px-4 rounded"
                onClick={nextGen}
            >
                Next Gen
            </button>
        </div>
    )
}

export default GameOfLife

'use client'

import { useEffect, useState } from 'react'
import { generateNextGrid } from '../../logic/logic'
import { GameOfLifeProps } from '../../types/types'
import GameOfLifeGrid from './GameOfLifeGrid'
import GameOfLifeControls from './GameOfLifeControls'

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
        <div className="bg-offBlack border border-lumoGreen rounded-[18px] content-center justify-items-center overflow-hidden m-6 p-6">
            <div className="text-lumoGreen mb-4 w-full text-center">Current Gen: {gen}</div>
            <GameOfLifeGrid grid={grid} toggleCellValue={toggleCellValue} />
            <GameOfLifeControls onNextGen={nextGen} />
        </div>
    )
}

export default GameOfLife

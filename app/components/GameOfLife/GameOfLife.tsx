'use client'

import { useEffect, useState } from 'react'
import { generateNextGrid } from '../../logic/logic'
import { GameOfLifeProps } from '../../types/types'
import GameOfLifeGrid from './GameOfLifeGrid'
import GameOfLifeControls from './GameOfLifeControls'

const GameOfLife: React.FC<GameOfLifeProps> = ({ width, height }) => {
    const [gen, setGen] = useState<number>(0)
    const [grid, setGrid] = useState<boolean[][]>(
        new Array(width).fill(false).map(() => new Array(height).fill(false))
    )

    useEffect(() => {
        setGrid((g) => generateNextGrid(g))
    }, [gen])

    const nextGen = () => {
        setGen(gen + 1)
    }

    const toggleCellValue = (rowIndex: number, columnIndex: number) => {
        const newGrid = [...grid]
        newGrid[rowIndex][columnIndex] = !grid[rowIndex][columnIndex]
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

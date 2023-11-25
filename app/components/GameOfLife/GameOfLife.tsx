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
    const [gridHeightInCells, setGridHeightInCells] = useState<number>(10)
    const [cellHeightInPx, setCellHeightInPx] = useState<number>(38)

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

    const setGridSize = (newGridHeightInCells: number[]) => {
        if (newGridHeightInCells.length !== 1) return
        // TODO move to constants or initial calc setup
        const GRID_HEIGHT_IN_PIXELS = 380

        // TODO ensure only 1 rerender at end of all changes

        // Creates a new blank square grid of [height] x [height]
        const newGrid: boolean[][] = new Array(newGridHeightInCells[0])
            .fill(false)
            .map(() => new Array(newGridHeightInCells[0]).fill(false))

        const newCellHeight = Math.floor(GRID_HEIGHT_IN_PIXELS / newGridHeightInCells[0])

        console.log(newCellHeight)

        // TODO set state vars here - might have to group into 1 object
        setGrid(newGrid)
        setCellHeightInPx(newCellHeight)
        setGridHeightInCells(newGridHeightInCells[0])
        
    }

    return (
        <div className="w-[500px] h-[550px] flex flex-col bg-offBlack border border-lumoGreen rounded-[18px] content-center justify-items-center overflow-hidden m-6 p-6">
            <GameOfLifeGrid grid={grid} gridHeightInCells={gridHeightInCells} cellHeightInPx={cellHeightInPx} toggleCellValue={toggleCellValue} />
            <GameOfLifeControls onNextGen={nextGen} onGridSizeSliderChange={setGridSize} />
        </div>
    )
}

export default GameOfLife

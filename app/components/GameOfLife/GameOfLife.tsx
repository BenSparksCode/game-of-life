'use client'

import { useEffect, useState } from 'react'
import { generateNextGrid } from '../../logic/logic'
import { GameOfLifeProps } from '../../types/types'
import GameOfLifeGrid from './GameOfLifeGrid'
import GameOfLifeControls from './GameOfLifeControls'

const GameOfLife: React.FC<GameOfLifeProps> = ({ width, height }) => {
    const [grid, setGrid] = useState<boolean[][]>(
        new Array(width).fill(false).map(() => new Array(height).fill(false))
    )
    const [gridHeightInCells, setGridHeightInCells] = useState<number>(10)
    const [cellHeightInPx, setCellHeightInPx] = useState<number>(38)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    // Handles continuous grid gen progression when playing
    useEffect(() => {
        let interval: NodeJS.Timeout | undefined
        if (isPlaying) {
            interval = setInterval(() => {
                setGrid((g) => generateNextGrid(g))
            }, 250) // update interval in milliseconds
        } else if (interval !== undefined) {
            clearInterval(interval)
        }
        // Cleanup function to clear the interval when
        // component is unmounted or isPlaying changes to false.
        return () => clearInterval(interval)
    }, [isPlaying])

    // Handles changing the value of a specific cell between live/dead
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

    const handlePrevGen = () => {
        // TODO
    }

    const handleResetGrid = () => {
        setIsPlaying(false)
        setGrid((g) => g.map((row) => row.map(() => false)))
    }

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="w-[500px] h-[550px] flex flex-col bg-offBlack border border-lumoGreen rounded-[12px] content-center justify-items-center overflow-hidden m-4 p-4">
            <GameOfLifeGrid
                grid={grid}
                gridHeightInCells={gridHeightInCells}
                cellHeightInPx={cellHeightInPx}
                toggleCellValue={toggleCellValue}
            />
            <GameOfLifeControls
                onGridSizeSliderChange={setGridSize}
                handlePrevGen={handlePrevGen}
                handleResetGrid={handleResetGrid}
                handlePlayPause={handlePlayPause}
                isPlaying={isPlaying}
            />
        </div>
    )
}

export default GameOfLife

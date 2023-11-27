'use client'

import { useEffect, useState, useRef } from 'react'
import { generateNextGrid } from '../../logic/logic'
import { GameOfLifeProps } from '../../types/types'
import GameOfLifeGrid from './GameOfLifeGrid'
import GameOfLifeControls from './GameOfLifeControls'

const GameOfLife: React.FC<GameOfLifeProps> = ({ width, height }) => {
    const [grid, setGrid] = useState<boolean[][]>(
        new Array(width).fill(false).map(() => new Array(height).fill(false))
    )
    const gridRef = useRef<boolean[][]>(grid)
    const [gridHistory, setGridHistory] = useState<boolean[][][]>(new Array<boolean[][]>())
    const gridHistoryRef = useRef<boolean[][][]>(gridHistory)
    // TODO move these starting dimension values to constants or initial calc setup
    const [gridHeightInCells, setGridHeightInCells] = useState<number>(10)
    const [cellHeightInPx, setCellHeightInPx] = useState<number>(38)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    // Keep gridRef up to date with latest grid
    useEffect(() => {
        gridRef.current = grid
    }, [grid])

    // Keep gridHistoryRef up to date with latest gridHistory
    useEffect(() => {
        gridHistoryRef.current = gridHistory
    }, [gridHistory])

    // Handles continuous grid gen progression when playing
    useEffect(() => {
        let interval: NodeJS.Timeout | undefined
        if (isPlaying) {
            interval = setInterval(() => {
                updateGrid(gridRef.current, gridHistoryRef.current)
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

        // Creates a new blank square grid of [height] x [height]
        const newGrid: boolean[][] = new Array(newGridHeightInCells[0])
            .fill(false)
            .map(() => new Array(newGridHeightInCells[0]).fill(false))

        const newCellHeight = Math.floor(GRID_HEIGHT_IN_PIXELS / newGridHeightInCells[0])

        // Clear grid and history, set state height vars to latest values
        setGrid(newGrid)
        setGridHistory([])
        setCellHeightInPx(newCellHeight)
        setGridHeightInCells(newGridHeightInCells[0])
    }

    const updateGrid = (currentGrid: boolean[][], gridHistory: boolean[][][]) => {
        // First add current grid to gridHistory
        const newGridHistory = [...gridHistory, currentGrid]
        // Then store the updated gridHistory
        setGridHistory(newGridHistory)
        // Then generate next gen and set it as current grid
        setGrid(generateNextGrid(currentGrid))
    }

    const handlePrevGen = () => {
        // Do nothing if no prev grids stored in gridHistory array
        if (gridHistory.length === 0) return
        // Otherwise set current grid to last grid in gridHistory
        setGrid(gridHistory[gridHistory.length - 1])
        setGridHistory(gridHistory.slice(0, gridHistory.length - 1))
    }

    const handleResetGrid = () => {
        // Pause and reset grid and gridHistory
        setIsPlaying(false)
        setGrid((g) => g.map((row) => row.map(() => false)))
        setGridHistory([])
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

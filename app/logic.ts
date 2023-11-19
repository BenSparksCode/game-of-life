import { CellPosition } from './types'

// TODO update all neighbor Arrays to Sets

export const generateNextGrid = (prevGrid: number[][]): number[][] => {
    // Make a copy of the prev grid, to apply rules simultaneously
    const nextGrid = prevGrid.map((arr) => [...arr])
    // Store all neighbors searched during the alive cell check, for optimized revive search
    let discoveredNeighbors: CellPosition[] = []

    // Check if alive cells will survive or die
    for (let row = 0; row < prevGrid.length; row++) {
        for (let col = 0; col < prevGrid[row].length; col++) {
            console.log(row + ':' + col)
            // Check cell is currently alive
            if (prevGrid[row][col] === 1) {
                // Count alive neighbor
                // const liveNeighbors =
            }
        }
    }

    // Check if dead cells will revive
    // TODO use set (unique) of all neighbor indices from alive checks
    // Iterate through to see if 1) currently dead AND 2) should revive

    return nextGrid
}

// Returns an array of CellPositions representing the neighbors of a given cell.
// Excludes out-of-bounds neighbors and the cell itself.
const getArrayOfNeighbors = (
    cellRow: number,
    cellColumn: number,
    GRID_HEIGHT: number,
    GRID_WIDTH: number
): CellPosition[] => {
    let neighborPositions: CellPosition[] = []
    for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
        for (let colOffset = -1; colOffset < 2; colOffset++) {
            // Skip the cell itself
            if (rowOffset === 0 && colOffset === 0) {
                continue
            }
            // Skip out-of-bounds neighbors
            if (
                cellRow + rowOffset < 0 ||
                cellRow + rowOffset >= GRID_HEIGHT ||
                cellColumn + colOffset < 0 ||
                cellColumn + colOffset >= GRID_WIDTH
            ) {
                continue
            }
            // Add each neighbor
            neighborPositions.push({ row: cellRow + rowOffset, column: cellColumn + colOffset })
        }
    }
    console.log(neighborPositions)
    return neighborPositions
}

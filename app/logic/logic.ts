import { CellPosition } from '../types/types'

export const generateNextGrid = (prevGrid: boolean[][]): boolean[][] => {
    // Make a copy of the prev grid, to apply rules simultaneously
    const nextGrid = prevGrid.map((arr) => [...arr])
    // Store all neighbors searched during the alive cell check, for optimized revive search
    let discoveredNeighbors: CellPosition[] = []
    const GRID_HEIGHT = prevGrid.length
    const GRID_WIDTH = prevGrid[0].length

    // Handle currently alive cells first
    for (let row = 0; row < prevGrid.length; row++) {
        for (let col = 0; col < GRID_WIDTH; col++) {
            // Check cell is currently alive
            if (prevGrid[row][col]) {
                // Stores all valid neighbors of the current cell
                const allNeighbors: CellPosition[] = getArrayOfNeighbors(
                    row,
                    col,
                    GRID_HEIGHT,
                    GRID_WIDTH
                )
                // Counts the number of alive neighbors
                const liveNeighborCount: number = allNeighbors.reduce(
                    (acc: number, neighbor: CellPosition) => {
                        return acc + (prevGrid[neighbor.row][neighbor.column] === true ? 1 : 0)
                    },
                    0
                )

                // Cell dies if it has < 2 or > 3 live neighbors
                if (liveNeighborCount < 2 || liveNeighborCount > 3) {
                    nextGrid[row][col] = false
                }
                // Otherwise, cell survives. No need to change its value
                // Lastly, store the cell's neighbors for optimized revive search
                discoveredNeighbors = discoveredNeighbors.concat(allNeighbors)
            }
        }
    }

    // Now handle currently dead cells
    new Set(discoveredNeighbors).forEach((cell: CellPosition) => {
        // Check cell is currently dead
        if (!prevGrid[cell.row][cell.column]) {
            // Stores all valid neighbors of the current cell
            const allNeighbors: CellPosition[] = getArrayOfNeighbors(
                cell.row,
                cell.column,
                GRID_HEIGHT,
                GRID_WIDTH
            )
            // Counts the number of alive neighbors
            const liveNeighborCount: number = allNeighbors.reduce(
                (acc: number, neighbor: CellPosition) => {
                    return acc + (prevGrid[neighbor.row][neighbor.column] === true ? 1 : 0)
                },
                0
            )

            // Only revive dead cell if it has exactly 3 live neighbors
            if (liveNeighborCount === 3) {
                nextGrid[cell.row][cell.column] = true
            }
            // Otherwise cell remains dead. No changes to grid needed.
        }
    })

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
    return neighborPositions
}

export const areGridsEqual = (grid1: boolean[][], grid2: boolean[][]): boolean => {
    // Return false if not same dimension or not in [][] form
    if (grid1?.length != grid2?.length || !grid1) return false
    const HEIGHT = grid1.length
    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < HEIGHT; j++) {
            if (grid1[i][j] != grid2[i][j]) {
                return false
            }
        }
    }
    return true
}

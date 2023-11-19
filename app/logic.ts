import { CellPosition } from './types'

export const generateNextGrid = (prevGrid: number[][]): number[][] => {
    // Make a copy of the prev grid, to apply rules simultaneously
    const nextGrid = prevGrid.map((arr) => [...arr])

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

const getArrayOfNeighborIndices = (cellRow: number, cellColumn: number): CellPosition[] => {
    for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
        for (let colOffset = -1; colOffset < 2; colOffset++) {
            //TODO
        }
    }
    // TODO
    return [{ row: 0, column: 0 }]
}

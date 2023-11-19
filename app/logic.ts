import { CellPosition } from "./types";


export const generateNextGrid = (prevGrid: number[][]): number[][] => {
    // Make a copy of the prev grid, to apply rules simultaneously
    const nextGrid = prevGrid.map((arr) => [...arr]);

    // Check populated cells for survive or die
    for(let row = 0; row < prevGrid.length; row++){
        for(let col = 0; col < prevGrid[row].length; col++){
            console.log(row + ":" + col)
            // Check cell is currently alive
            if(prevGrid[row][col] === 1) {
                // Count alive neighbours
                // const liveNeighbours = 
            }
        }
    }

    return nextGrid;
}

const getArrayOfNeighbourIndices = (cellRow: number, cellColumn: number): CellPosition => {
    // TODO
    return {row: 0, column: 0}
}
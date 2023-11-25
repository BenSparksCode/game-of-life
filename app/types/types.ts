export interface GameOfLifeProps {
    width: number
    height: number
}

export interface GameOfLifeGridProps {
    grid: number[][]
    toggleCellValue: (rowIndex: number, columnIndex: number) => void
}

export interface CellProps {
    cellValue: number
    onClick: () => void
}

export interface GameOfLifeControlsProps {
    onNextGen: () => void
}

export interface CellPosition {
    row: number
    column: number
}

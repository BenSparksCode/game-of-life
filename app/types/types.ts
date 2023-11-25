export interface GameOfLifeProps {
    width: number
    height: number
}

export interface GameOfLifeGridProps {
    grid: boolean[][]
    toggleCellValue: (rowIndex: number, columnIndex: number) => void
}

export interface CellProps {
    cellValue: boolean
    onClick: () => void
}

export interface GameOfLifeControlsProps {
    onNextGen: () => void
}

export interface CellPosition {
    row: number
    column: number
}

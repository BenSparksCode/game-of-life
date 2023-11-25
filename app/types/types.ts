export interface GameOfLifeProps {
    width: number
    height: number
}

export interface GameOfLifeGridProps {
    grid: boolean[][]
    gridHeightInCells: number
    cellHeightInPx: number
    toggleCellValue: (rowIndex: number, columnIndex: number) => void
}

export interface CellProps {
    cellValue: boolean
    cellHeightInPx: number
    onClick: () => void
}

export interface GameOfLifeControlsProps {
    onNextGen: () => void
    onGridSizeSliderChange: (newGridHeightInCells: number[]) => void
}

export interface CellPosition {
    row: number
    column: number
}

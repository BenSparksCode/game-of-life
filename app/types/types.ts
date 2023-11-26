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
    onMouseDown: () => void
    onMouseEnter: () => void
    onMouseUp: () => void
}

export interface GameOfLifeControlsProps {
    onGridSizeSliderChange: (newGridHeightInCells: number[]) => void
    handlePrevGen: () => void
    handlePlayPause: () => void
    handleResetGrid: () => void
    isPlaying: boolean
}

export interface CellPosition {
    row: number
    column: number
}

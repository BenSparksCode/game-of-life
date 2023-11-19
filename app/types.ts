export interface GameOfLifeProps {
  width: number;
  height: number;
}

export interface CellProps {
  cellValue: number;
  onClick: () => void;
}

export interface CellPosition {
    row: number;
    column: number;
}

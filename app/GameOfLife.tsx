'use client'

interface GameOfLifeProps {
    width: number
    height: number
}

const GameOfLife: React.FC<GameOfLifeProps> = ({width, height}) => {
  return (
    <div>Game Of Life</div>
  )
}

export default GameOfLife
'use client'

import { GameOfLifeControlsProps } from '../../types/types'

const GameOfLifeControls: React.FC<GameOfLifeControlsProps> = ({ onNextGen }) => (
    <div className="flex w-full place-content-center">
        <button
            className="mt-4 border-2 border-lumoGreen text-lumoGreen hover:bg-lumoGreen hover:text-offBlack-dark font-bold py-2 px-4 rounded"
            onClick={onNextGen}
        >
            Next Gen
        </button>
    </div>
)

export default GameOfLifeControls

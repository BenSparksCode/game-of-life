'use client'

import { Slider } from '@/components/ui/slider'
import { GameOfLifeControlsProps } from '../../types/types'

const GameOfLifeControls: React.FC<GameOfLifeControlsProps> = ({ onNextGen, onGridSizeSliderChange }) => {
    return (
        <div className="flex w-full place-content-center mt-auto">
            <Slider defaultValue={[10]} min={8} max={30} onValueChange={onGridSizeSliderChange} />
            <button
                className="mt-4 border-2 border-lumoGreen text-lumoGreen hover:bg-lumoGreen hover:text-offBlack-dark font-bold py-2 px-4 rounded"
                onClick={onNextGen}
            >
                {'>>'}
            </button>
        </div>
    )
}

export default GameOfLifeControls

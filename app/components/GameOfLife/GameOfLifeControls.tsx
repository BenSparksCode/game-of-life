'use client'

import { Slider } from '@/components/ui/slider'
import { GameOfLifeControlsProps } from '../../types/types'

const GameOfLifeControls: React.FC<GameOfLifeControlsProps> = ({ onNextGen }) => {
    const logChange = (newValue: number[]) => {
        console.log(newValue)
    }

    return (
        <div className="flex w-full place-content-center">
            <Slider defaultValue={[10]} onValueChange={logChange} />
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

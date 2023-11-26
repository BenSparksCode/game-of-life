'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { PlayIcon, PauseIcon, ArrowLeftIcon, ResetIcon } from '@radix-ui/react-icons'
import { PiVideoCameraLight } from 'react-icons/pi'

import { GameOfLifeControlsProps } from '../../types/types'

const GameOfLifeControls: React.FC<GameOfLifeControlsProps> = ({
    onGridSizeSliderChange,
    handlePrevGen,
    handlePlayPause,
    handleResetGrid,
    isPlaying,
}) => {
    const [isRecording, setIsRecording] = useState(false)

    const toggleRecording = () => {
        setIsRecording(!isRecording)
    }

    return (
        <div className="flex flex-col place-content-center items-center w-full space-y-4 mt-auto mb-2">
            <div className="flex w-9/12 justify-center space-x-2 mb-4">
                <Slider
                    defaultValue={[14]}
                    min={6}
                    max={22}
                    onValueChange={onGridSizeSliderChange}
                />
            </div>
            <div className="flex w-full justify-center space-x-4">
                {/* Change this onClick to real back step when ready */}
                <button
                    className="border py-2 px-6 rounded border-lumoGreen text-lumoGreen hover:bg-lumoGreen hover:text-offBlack-dark font-bold"
                    onClick={handlePrevGen}
                >
                    <ArrowLeftIcon />
                </button>
                <button
                    className="border py-2 px-6 rounded border-lumoGreen text-lumoGreen hover:bg-lumoGreen hover:text-offBlack-dark font-bold"
                    onClick={handlePlayPause}
                >
                    {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <button
                    className="border py-2 px-6 rounded border-lumoGreen text-lumoGreen hover:bg-lumoGreen hover:text-offBlack-dark font-bold"
                    onClick={handleResetGrid}
                >
                    <ResetIcon />
                </button>
                <button
                    className="border py-2 px-6 rounded border-lumoGreen text-lumoGreen hover:bg-lumoGreen hover:text-offBlack-dark font-bold"
                    onClick={toggleRecording}
                >
                    <PiVideoCameraLight />
                </button>
            </div>
        </div>
    )
}

export default GameOfLifeControls

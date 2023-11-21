'use client'

import GameOfLife from './GameOfLife'
import AnimatedBackground from './AnimatedBackground'
import { TitleBar } from './TitleBar'
import { Footer } from './Footer'

const Home = () => {
    return (
        <div>
            <AnimatedBackground>
                <div className="relative z-10">
                    <TitleBar />
                    <main className="flex min-h-screen flex-col items-center justify-between p-2">
                        <GameOfLife width={10} height={10} />
                    </main>
                    <Footer />
                </div>
            </AnimatedBackground>
        </div>
    )
}

export default Home

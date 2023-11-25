'use client'

import GameOfLife from './components/GameOfLife/GameOfLife'
import AnimatedBackground from './components/AnimatedBackground'
import { TitleBar } from './components/TitleBar'
import { Footer } from './components/Footer'

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

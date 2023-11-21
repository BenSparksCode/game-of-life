'use client'

import { FaGithub, FaTwitter } from 'react-icons/fa' // Importing icons from React Icons
import GameOfLife from './GameOfLife'
import AnimatedBackground from './AnimatedBackground'

const Home = () => {
    return (
        <div>
            <AnimatedBackground>
                <div className="content">
                    <header className="bg-offBlack-dark text-center py-4">
                        <h1 className="text-xl text-lumoGreen font-bold">{`Conway's Game of Life`}</h1>
                    </header>
                    <main className="flex min-h-screen flex-col items-center justify-between p-2">
                        <GameOfLife width={10} height={10} />
                    </main>
                    <footer className="bg-offBlack-dark text-center py-4 text-sm sticky bottom-0">
                        <p className="text-lumoGreen">Built with ❤️ by Ben Sparks</p>
                        <div className="flex justify-center mt-2">
                            <a
                                href="https://github.com/BenSparksCode"
                                className="mx-2 text-lumoGreen"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://twitter.com/bensparks_"
                                className="mx-2 text-lumoGreen"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </footer>
                </div>
            </AnimatedBackground>
        </div>
    )
}

export default Home

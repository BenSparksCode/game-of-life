'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa' // Importing icons from React Icons

import GameOfLife from './GameOfLife'

const Home = () => {
    const backgroundRef = useRef(null)

    useEffect(() => {
        const bg = backgroundRef.current
        for (let i = 0; i < 50; i++) {
            let dot = document.createElement('div')
            dot.className = 'dot'
            dot.style.width = `${Math.random() * 8}px`
            dot.style.height = dot.style.width
            dot.style.top = `${Math.random() * 100}%`
            dot.style.left = `${Math.random() * 100}%`

            bg.appendChild(dot)
            animateDot(dot)
        }
    }, [])

    const animateDot = (dot) => {
        const fadeInterval = Math.random() * 3000 + 2000 // Random interval between 3 to 5 seconds for fading
        const moveInterval = Math.random() * 10000 + 5000 // Random interval between 10 to 15 seconds for moving

        // Initial fade in
        setTimeout(() => {
            dot.style.opacity = 0.5
        }, Math.random() * 2000) // Random delay for initial fade-in

        // Continuous fading
        setInterval(() => {
            dot.style.opacity = Math.random() < 0.5 ? 0 : 0.5
        }, fadeInterval)

        // Continuous moving
        setInterval(() => {
            moveDot(dot)
        }, moveInterval)
    }

    const moveDot = (dot) => {
        dot.style.transform = `translate(${Math.random() * 100 - 50}vw, ${
            Math.random() * 100 - 50
        }vh)`
    }

    return (
        <div ref={backgroundRef} className="starry-background flex flex-col min-h-screen">
            <div className="content">
                <header className="bg-offBlack-dark text-center py-4">
                    <h1 className="text-xl text-lumoGreen font-bold">Conway's Game of Life</h1>
                </header>
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        </div>
    )
}

export default Home

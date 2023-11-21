import React, { useEffect, useRef } from 'react'

const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
    const backgroundRef = useRef(null)

    useEffect(() => {
        const bg = backgroundRef.current
        for (let i = 0; i < 30; i++) {
            let dot = document.createElement('div')
            dot.className = 'dotAnimation absolute rounded-full bg-lumoGreen-dark opacity-0'
            dot.style.width = `${Math.random() * 6}px`
            dot.style.height = dot.style.width
            dot.style.top = `${Math.random() * 100}%`
            dot.style.left = `${Math.random() * 100}%`

            bg.appendChild(dot)
            animateDot(dot)
        }
    }, [])

    const animateDot = (dot: HTMLDivElement) => {
        const fadeInterval = Math.random() * 3000 + 2000
        const moveInterval = Math.random() * 10000 + 5000

        setTimeout(() => {
            dot.style.opacity = '0.5'
        }, Math.random() * 2000)

        setInterval(() => {
            dot.style.opacity = Math.random() < 0.5 ? '0' : '0.5'
        }, fadeInterval)

        setInterval(() => {
            moveDot(dot)
        }, moveInterval)
    }

    const moveDot = (dot: HTMLDivElement) => {
        dot.style.transform = `translate(${Math.random() * 100 - 50}vw, ${
            Math.random() * 100 - 50
        }vh)`
    }

    return (
        <div
            ref={backgroundRef}
            className="bg-offBlack-dark relative overflow-hidden w-full h-screen z-0 flex flex-col min-h-screen"
        >
            {children}
        </div>
    )
}

export default AnimatedBackground

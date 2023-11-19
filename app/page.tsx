import Image from 'next/image'

import GameOfLife from './GameOfLife'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <GameOfLife width={15} height={15} />
        </main>
    )
}

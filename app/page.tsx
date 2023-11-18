import Image from 'next/image'

import GameOfLife from './GameOfLife'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <GameOfLife width={10} height={10} />

     

    </main>
  )
}

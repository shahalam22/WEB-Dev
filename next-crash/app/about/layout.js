import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Next-Crash | About",
  description: "About Layout",
}

export default function AboutLayout({children}) {
  return (
    <main>
        <nav className='mt-6 mb-6'>
          <ul className="flex gap-6">
            <li><Link href={"/about/mission"}>Mission</Link></li>
            <li><Link href={"/about/vision"}>Vision</Link></li>
          </ul>
        </nav>
        {children}
    </main>
  )
}

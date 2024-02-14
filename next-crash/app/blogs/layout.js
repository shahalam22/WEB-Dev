import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Next-Crash | Blogs",
  description: "Blogs Layout",
}

export default function BlogsLayout
({children}) {
  return (
    <main>
        {children}
    </main>
  )
}

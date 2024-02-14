import Link from 'next/link'
import React from 'react'

export default function Blogs() {

    // throw new Error("There is an ERROR")

  const blogs = [
    { id: 1, title: "Blog 1" },
    { id: 2, title: "Blog 2" },
    { id: 3, title: "Blog 3" },
  ]

  return (
    <main className='mt-10'>
        <div>
            Blogs Page
            <hr/>
            <ul className='mt-3'>
                {blogs.map(blog => (
                    <li key={blog.id} className='mt-2'>
                      <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </main>
  )
}

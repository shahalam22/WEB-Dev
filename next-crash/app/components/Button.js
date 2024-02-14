"use client";

import React from 'react'

export default function Button() {
  return (
    <div className='mt-5'>
      <button className='bg-green-500 rounded-md p-2' onClick={() => console.log("I have Clicked")}>Click Me</button>
    </div>
  )
}

import { notFound } from 'next/navigation';
import React from 'react'

export default function blog({params}) {
    const {id} = params;

    if(id === '4'){
        notFound();
    }

  return (
    <div>This is blog : {id}</div>
  )
}

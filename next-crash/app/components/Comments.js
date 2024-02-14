import React from 'react'

export default async function Comments({promise}) {
    const postComments = await promise;
  return (
    <div className='mt-10'>            
        <h2>Comments</h2>
        <ul>
            {postComments.map(comment => (
                <li key={comment.id} className='mt-4'>{comment.email}: {comment.body}</li>
            ))}
        </ul>
    </div>
  )
}

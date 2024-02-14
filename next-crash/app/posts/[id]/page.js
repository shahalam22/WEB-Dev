import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllposts';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComments';
import React, { Suspense } from 'react'

export async function generateMetadata({params}){
    const {id} = params;
    const post = await getPost(id);
    return {
        title: post.title,
        description: post.body,
    }

}

export default async function Post({params}) {
    const {id} = params;
    const postPromise = getPost(id);
    const postCommentsPromise = getPostComments(id);

    // const [post, postComments] = await Promise.all([postPromise, postCommentsPromise]);
    const post = await postPromise;

    return (
    <div className='mt-6'>
        <h1>Post</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <hr/>
        <Suspense fallback="<h1>Loading Comments...</h1>">
            <Comments promise={postCommentsPromise}/>
        </Suspense>
    </div>
  )
}

export async function generateStaticParams(){
    const posts = await getAllPosts();

    return posts.map(post => ({
        params: {
            id: post.id.toString()
        }
    }));
}

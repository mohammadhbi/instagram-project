import React from 'react'
import PostCardUsername from './postCardUsername'
import PostCardMedia from './postCardMedia'
import PostCardLikeComments from './postCardLikeComments'
import PostCardCaption from './postCardCaption'
import PostCardComments from './postCardComments'

function PostCard() {
  return (
    <div className='border-b-1 pb-3 border-[#DBDBDB] mb-14'>
        <PostCardUsername />
        <PostCardMedia />
        <PostCardLikeComments />
        <PostCardCaption />
        <PostCardComments />
    </div>
  )
}

export default PostCard
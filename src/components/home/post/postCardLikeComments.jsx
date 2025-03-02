import React, { useState } from 'react'
import comment from '../../../assets/images/comment.svg'
import save from '../../../assets/images/save.svg'
import { GoHeart } from "react-icons/go";
import { FcLike } from "react-icons/fc";

function PostCardLikeComments() {

  const [ click , setClick] = useState(false)


  return (
    <div>
      <div className='mt-3 flex gap-3'>
        <div onClick={() => setClick(!click)}>
          {click ? <FcLike size={25} /> : <GoHeart size={24}/>}
        </div>
       
        <img src={comment} alt="comment" />

        <div className='ml-[373px]'>
          <img src={save} alt="" />
        </div>
      </div>
      <div className='mt-3'>
        <span className=' font-bold text-[#262626]'>741,368 likes</span>
      </div>
    </div>
  )
}

export default PostCardLikeComments
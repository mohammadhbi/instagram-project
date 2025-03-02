import React from 'react'
import emoji from '../../../assets/images/emoji.svg'
function PostCardComments() {
  return (
    <div className='mt-1.5'>
      <span className='text-[#8E8E8E] '>View all 13,384 comments</span>
      <div className='mt-2 flex justify-between'>
        <input className='text-[#262626] outline-0' placeholder='Add a comment…'/>
        <img src={emoji}  />
      </div>
    </div>
  )
}

export default PostCardComments
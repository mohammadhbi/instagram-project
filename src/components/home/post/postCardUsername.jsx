import React from 'react'
import blueTik from '../../../assets/images/blueTik.svg'
import profileImage from '../../../assets/images/profileImage.svg'
function PostCardUsername() {
  return (
    <div className='flex items-center mt-14'>
      <div>
        <img src={profileImage} alt="" />
      </div>
      <span className='mr-3'>lewishamilton</span>
      <img src={blueTik} alt="blue tick" />
      <span className='ml-3'>5h</span>
      
    </div>
  )
}

export default PostCardUsername
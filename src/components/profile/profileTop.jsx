import React, { useState } from 'react'
import { client } from '../../lib/axios'

function ProfileTop() {
    const [user , setuser] = useState()
    const getData = async () => {
        try {
            const response = await client.get("/api/user/u/johndoe")
            console.log(response);
            setuser(response)
            
        } catch (error) {
            
        }
    }
    return (
        <div>
            <div className='grid grid-cols-3'>
                <span>1,861 posts</span>
                <span>4M followers</span>
                <span>454 following</span>
            </div>
        </div>
    )
}

export default ProfileTop
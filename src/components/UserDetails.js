import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const{userId}=useParams()
  return (
    <div>
      <h2>UserDetails with ID {userId}</h2>
    </div>
  )
}

export default UserDetails

import React from 'react'

import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams()
  return (
    <div>
      <p>user  {params.userID} details</p>
    </div>
  )
}

export default UserDetails

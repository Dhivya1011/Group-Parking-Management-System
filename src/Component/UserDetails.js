import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const params=useParams()
  return (
    <div>
        Details of the user{params.userId}
    </div>
  )
}

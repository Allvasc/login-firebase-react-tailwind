import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {

  const { user, logout } = UserAuth()

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>
        Account
      </h1>
      <p>User Email: {user && user.email}</p>

      <button className='bolder px-6 py-2 my-4'>Log out</button>
    </div>
  )
}

export default Account
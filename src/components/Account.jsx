import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext'

const Account = () => {

  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try{
     await logout()
      navigate('/')
      console.log('Você está deslogado')
    }catch (e){
      console.log(e.message)
    }

  }

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <h1 className='text-2xl font-bold py-4'>
        Account
      </h1>
      <p>User Email: {user && user.email}</p>

      <button className='border px-6 py-2 my-4' onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Account
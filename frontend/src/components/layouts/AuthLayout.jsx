import React from 'react'
import UI_IMG from "../../assets/images/auth-img.png"

const AuthLayout = ({ children }) => {
  return (
    <div className='flex'>
      <div className='w-screen h-screen md:w-[60vw] px-12 pb-12'>
        <h2 className='text-lg font-medium text-black'>Task Manager</h2>
        {children}
      </div>
      <div className="hidden md:flex md:w-[40vw] items-center justify-center bg-[url('/bg-img.jpg')] bg-cover bg-no-repeat bg-center overflow-hidden pr-8">
        <img src={UI_IMG} className='w-64 lg:w-[80%]' />
      </div>
    </div>
  )
}

export default AuthLayout
import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'

const Signup = () => {
  return (
    <div className='bg-slate-200 h-[500px] w-[400px] mt-16  py-9 mx-auto border border-red-300'>
      <div>

      <Heading label={"SignIn"}/>
      <SubHeading label={"Enter you Information to create new Acccount"}/>
      </div>
    </div>
  )
}

export default Signup
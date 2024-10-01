import React from 'react'
import { Appbar } from './dashboard/Appbar'
import { Balance } from './dashboard/Balance'
import Users from './dashboard/Users'

const Dashboard = () => {
  return (
    <div className=''>
      <Appbar/>
      <Balance balance={"Your Balance is"} rs={" Rs. 10000.00"}/>
      <Users/>
    </div>
  )
}

export default Dashboard
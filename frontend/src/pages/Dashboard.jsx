import React from 'react'
import { Appbar } from './dashboard/Appbar'
import { Balance } from './dashboard/Balance'

const Dashboard = () => {
  return (
    <div>
      <Appbar/>
      <Balance balance={"Your Balance is"} rs={" Rs. 10000.00"}/>
    </div>
  )
}

export default Dashboard
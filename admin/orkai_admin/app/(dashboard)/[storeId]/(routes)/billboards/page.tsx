import React from 'react'
import { BillboardCilent } from './components/client'

const BillboardPage = () => {
  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <BillboardCilent/>
        </div>
    </div>
  )
}

export default BillboardPage
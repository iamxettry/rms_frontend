import Logo from '@/utils/Logo'
import React from 'react'
import NavCard from './NavCard'

const DashNav = () => {
  return (
    <div className='w-60  border-r h-screen'>
        <div className='w-full my-2 border-b px-4'>

        <Logo/>
        </div>
        <div className='px-4'>

            <NavCard/>

        </div>
    </div>
  )
}

export default DashNav
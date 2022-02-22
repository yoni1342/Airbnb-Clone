import React from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/solid'


function Heder() {
  return (
    <header className= 'sticky, z-10 top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        {/* Left */}
        <div className = 'relative h-10 flex cursor-pointer items-center'>
          <Image  
            src='https://links.papareact.com/qd3'
            layout = 'fill'
            objectFit = 'contain '
            objectPosition = 'left'
          />
        </div>
        {/* Middle */}
        <div className = 'flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
            <input type="text" placeholder = 'Start your Search'  className ='pl-5 bg-transparent outline-none flex-grow 
              text-sm text-gray-600 placeholder-gray-400
            ' />
            <SearchIcon className = ' hidden md:inline-flex w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2'/>
        </div>
        {/* Right */}
        <div className = 'flex items-center space-x-4 justify-end '>
          <p className= 'text-gray-500 cursor-pointer hidden md:inline-flex'>Become a host</p>
          <GlobeAltIcon className ='h-6 text-gray-500 cursor-pointer'/>
          <div className = 'flex border-2 p-2 rounded-full space-x-2 '>
            <MenuIcon className ='h-6  text-gray-500 cursor-pointer'/>
            <UserCircleIcon className = 'h-6 text-gray-500 cursor-pointer' />
          </div>
        </div>

    </header>
  )
}

export default Heder
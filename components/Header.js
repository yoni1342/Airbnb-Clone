import React from 'react'
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon }from '@heroicons/react/solid'
function Header() {
  return (
    <header className ='sticky z-10 p-5 shadow-md top-0 grid grid-cols-3 bg-white md:px-10'>
        {/* Left */}
        <div className = 'relative h-10 flex items-center cursor-pointer'>
            <Image
                src = 'https://links.papareact.com/qd3'
                layout = 'fill'
                objectFit ='contain'
                objectPosition ='left'
            />

        </div>
        {/* Middle */}
        <div className = 'py-2 md:shadow-sm md:border-2 flex items-center rounded-full px-3'>
            <input type="text" placeholder = 'Start yours Search' className ='pl-5 bg-transparent
             outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' />
            <SearchIcon className ='w-8 bg-red-400 text-white rounded-full p-2 hidden md:inline-flex
            mx-2 cursor-pointer
            ' />
        </div>
        {/* Right */}
        <div className ='flex text-gray-500 items-center space-x-4 justify-end'>
            <p className ='hidden md:inline-flex cursor-pointer'>Become a host</p>
            <GlobeAltIcon className ='h-6 cursor-pointer'/>
            <div className = 'flex items-center space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className ='h-6 cursor-pointer'/>
                <UserCircleIcon className = 'h-6 cursor-pointer'/>
            </div>
        </div>
    </header>
  )
}

export default Header
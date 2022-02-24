import { useState } from 'react'
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UsersIcon }from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Router from 'next/router';
import Link from 'next/link';
function Header({palce}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberGust, setNumberGust] = useState(1);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection',
    }
    const handelSelect = (ranges)=>{
        setStartDate(ranges.Selection.startDate)
        setEndDate(ranges.Selection.endDate)
    }
    const resetInput = ()=>{
        setSearchInput('');
    }
  return (
    <header className ='sticky z-10 p-5 shadow-md top-0 grid grid-cols-3 bg-white md:px-10'>
        {/* Left */}
        <Link href = '/'>
        <div className = 'relative h-10 flex items-center cursor-pointer'>
            <Image
                src = 'https://links.papareact.com/qd3'
                layout = 'fill'
                objectFit ='contain'
                objectPosition ='left'
            />

        </div>
        </Link>
        {/* Middle */}
        <div className = 'py-2 md:shadow-sm md:border-2 sm:border-2 flex items-center rounded-full px-3'>
            <input 
            value = {searchInput} 
            onChange = {(e)=>setSearchInput(e.target.value)}
            type="text" placeholder = {palce|| "Start your search"} className ='pl-5 bg-transparent
             outline-none flex-grow text-sm text-gray-600 placeholder-gray-400 sm: w-12'  />
            <SearchIcon className ='w-8 bg-red-400 text-white rounded-full p-2 hidden md:inline-flex
            mx-2 cursor-pointer
            ' />
        </div>
        {/* Right */}
        <div className ='flex text-gray-500 items-center space-x-4 justify-end'>
            <p className ='hidden md:inline-flex cursor-pointer'>Become a host</p>
            <GlobeAltIcon className ='h-6 cursor-pointer hidden md:inline-block'/>
            <div className = 'flex items-center space-x-2 border-2 p-2 rounded-full'>
                <MenuIcon className ='h-6 cursor-pointer'/>
                <UserCircleIcon className = 'h-6 cursor-pointer'/>
            </div>
        </div>
        {/* {searchInput!=''?<h1>Hello Calander</h1>:<h1></h1>} */}
        {/* Alternativ */}
        {searchInput &&
            (
                <div className = 'flex flex-col col-span-3 mx-auto mt-3'>
                    <DateRangePicker 
                        ranges = {[selectionRange]}
                        minDate ={new Date()}
                        rangeColors = {["#FD5B61"]}
                        onChange = {handelSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className = 'text-2xl p-2 flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className = 'h-5 '/>
                        <input type="number" className ='w-12 outline-none pl-2 text-lg text-red-400'min ='1' 
                        value = {numberGust}
                        onChange = {(e)=>setNumberGust(e.target.value)}
                        />
                    </div>
                    <div className = 'flex  text-sm  font-semibold'>
                        <button onClick  = {resetInput} className = 'flex-grow text-gray-500'>Cancel</button>
                        <Link href = {{
                            pathname: '/search',
                            query:{
                                location: searchInput,
                                startDate: startDate.toISOString(),
                                endDate: endDate.toISOString(),
                                numberGust: numberGust
                            }
                        }}>
                        <button className = 'flex-grow text-red-400'>Search</button>
                        </Link>
                    </div>
                </div>
            )
        }
    </header>
  )
}

export default Header
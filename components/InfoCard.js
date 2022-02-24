import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
function InfoCard({img, location, title, description, star, price, total}) {
  return (
    <div className = 'flex m-3 py-6 px-3 border-b hover:shadow-lg cursor-pointer hover:opacity-80 transition duration-200 ease-out first:border-t'>
        <div className ='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image 
                src = {img}
                layout = 'fill'
                objectFit = 'cover'
                className = 'rounded-xl'
            />
        </div>
        <div className = 'flex flex-col flex-grow pl-5'>
            <div className = 'flex justify-between'>
              <p className= 'text-sm text-gray-400 '>{location}</p>
              <HeartIcon className = 'h-7 cursor-pointer'/>
            </div>
            <h4 className= 'text-xl'>{title}</h4>

            <div className = 'border-b w-10 pt-2' />
            <p className = 'pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
            <div className = 'flex'>
              <p className ='flex items-center space-x-1 flex-grow'>
                <StarIcon className = 'h-4 text-yellow-400' />
                <p className = 'text-sm text-gray-500'>{star}</p>
              </p>
              <p>
                <p className = 'text-lg font-semibold p-2 lg:text-2xl'>{price}</p>
                <p className = 'text-right font-extralight text-xs text-gray-500'>{total}</p>
              </p>
            </div>
        </div>
    </div>
  )
}

export default InfoCard
import React from 'react'
import Header from '../components/Header'
function Search() {
  return (
    <div>
        <Header/>
        <main>
            <section className ='flex-grow py-14 px-6'>
                <p className = 'text-xs'>300+ Stays for 5 number of gusts </p>
                <h1 className = 'text-3xl font-semibold mt-2 mb-6'>Stayes in Mars</h1>
                <div className = 'hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className ='button'>Cancelation Flexbility</p>
                    <p className ='button'>Type of Place</p>
                    <p className ='button'>Price</p>
                    <p className ='button'>Rooms and Beds</p>
                    <p className ='button'>More filters</p>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Search
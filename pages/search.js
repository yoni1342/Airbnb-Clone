import React from 'react'
import Header from '../components/Header'
function Search() {
  return (
    <div>
        <Header/>
        <main>
            <section>
                <p className = 'text-xs'>300+ Stays for 5 number of gusts </p>
                <h1 className = 'text-3xl font-semibold mt-2 mb-6'>Stayes in Mars</h1>
                <div>
                    <button>Cancelation Flexbility</button>
                    <button>Type of Place</button>
                    <button>Price</button>
                    <button>Rooms and Beds</button>
                    <button>More filters</button>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Search
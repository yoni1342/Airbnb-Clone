import React from 'react'
import { GlobeAltIcon, } from '@heroicons/react/solid'

function Footer() {
  return (
    <footer className = 'gap-y-10 px-32 py-14 cursor-pointer bg-gray-100 grid grid-clos-1 md:grid-cols-4 text-gray-800'>
        <div className = 'space-y-4 text-xs text-gray-800'>
            <h3 className = 'font-bold'>ABOUT</h3>
            <p>How Airbnb works</p>
            <p>News room</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className = 'space-y-4 text-xs text-gray-800'>
            <h5 className = 'font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesomw clonw</p>
            <p>Referrals acceptes</p>
            <p>Yonatan Tesfaye</p>
        </div>
        <div className = 'space-y-4 text-xs text-gray-800'>
            <h3 className = 'font-bold'>HOST</h3>
            <p>Yonatan Tesfaye</p>
            <p>Presents</p>
            <p>Habesha TechCamp</p>
            <p>Thousands of subscribers</p>
            <p>Subscribe Now</p>
        </div>
        <div className = 'space-y-4 text-xs text-gray-800'>
            <h3 className = 'font-bold'>SUPPORT</h3>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Say Hi YouTube</p>
            <p>+251993534293</p>
            <p>yonatantesfaye30@gmail.com</p>
        </div>
        <hr />
        <div>
            <p>&copy; 2022 Yonatan Tesfaye</p>

        </div>
    </footer>
  )
}

export default Footer
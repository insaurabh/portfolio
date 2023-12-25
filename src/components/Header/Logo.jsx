import React from 'react'
// import logo from './../../assets/img/s-logo.png'
import logo from './../../assets/img/saurabh.png'
import { Link } from 'react-router-dom'

function Logo() {
    return (
        <div className='text-3xl font-medium  text-transparent bg-clip-text  bg-gradient-to-r from-teal-500 to-cyan-500'>
            {/* S.Ranjan */}
            <Link to="/">
                <img src={logo} className='h-12 -rotate-6' alt="Saurabh Ranjan logo" title='Saurabh Ranjan' />
            </Link>
        </div>
    )
}

export default Logo
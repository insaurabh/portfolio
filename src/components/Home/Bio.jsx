import React from 'react'
import { Link } from 'react-router-dom'

function Bio() {
    return (
        <div className='font-serif text-center'>
            <span className='font-bold text-[#4f4e4d] block italic text-2xl pb-5'>- Hello
                <span className=' inline-block animate-wave text-3xl'>👋</span>
            </span>
            <h1 className=' pb-5'><Link to="/about-us">I'm Saurabh Ranjan.</Link></h1>
            <h2 className='font-bold text-7xl block  pb-2'> I build websites 🚀</h2>
            {/* <h3 className='block'>I'm full-stack developer in India ( a.k.a Bharat ).</h3> */}
        </div >
    )
}

export default Bio
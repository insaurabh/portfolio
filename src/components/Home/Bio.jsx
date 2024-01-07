import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import me from './../../assets/img/highlighted-me.png'
// import me from './../../assets/img/highlighted-me-1f2937.png'
import me from './../../assets/img/s-dark.png'
import meLight from './../../assets/img/s-light.png'
import ThemeContext from '../../utils/ThemeContext'
// import { GlowingStarsBackgroundCard } from '../glowing-stars'

function Bio() {
    const { darkMode } = useContext(ThemeContext)

    return (

        <div className='font-serif text-center'>
            <span className='font-bold text-[#4f4e4d] block italic text-2xl pb-5'>- Hello
                <span className='inline-block animate-[wave_5s_ease-in-out_2] text-3xl'>👋</span> ,
            </span>
            <h1 className='pb-5 text-4xl'><Link to="/about-us">I'm
                <img className="w-10 inline pb-3" src={darkMode ? me : meLight} alt="" />
                <span className='-m-1'>aurabh Ranjan, a software engineer based in India</span>

            </Link></h1>
            <h2 className='font-bold text-7xl block  pb-2'> I build websites <span className='animate-pulse inline'> 🚀</span></h2>
            {/* <h3 className='block'>I'm full-stack developer in India ( a.k.a Bharat ).</h3> */}
        </div >

    )
}

export default Bio
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav className='w-40'>
            <ul className='flex justify-evenly'>
                <li className=''>
                    <NavLink to="about-us" >About Me </NavLink>
                </li>
                <li>
                    <NavLink to="projects" >Projects </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
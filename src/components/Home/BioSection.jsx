import React, { useContext } from 'react'
import Bio from './Bio'
import me from "./../../assets/img/me.jpg"
import mePattern from "./../../assets/img/me-pattern.jpg"
import mePatternWhite from "./../../assets/img/me-pattern-white.jpg"
import useDarkMode from '../../utils/hooks/useDarkMode'
import ThemeContext from './../../utils/ThemeContext';
function BioSection() {
    const { darkMode } = useContext(ThemeContext)

    console.log(darkMode)
    return (
        <div className='flex place-content-between m-20 '>
            <div>
                <Bio />
            </div>
            <div>
                <img src={darkMode ? mePattern : mePatternWhite} alt="Saurabh Ranjan" />
            </div>
        </div>
    )
}

export default BioSection
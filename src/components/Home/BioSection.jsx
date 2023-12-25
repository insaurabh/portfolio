import React, { useContext } from 'react'
import Bio from './Bio'
import me from "./../../assets/img/me.jpg"
import mePattern from "./../../assets/img/me-pattern.jpg"
import mePatternWhite from "./../../assets/img/me-pattern-white.jpg"
import useDarkMode from '../../utils/hooks/useDarkMode'
import ThemeContext from './../../utils/ThemeContext';
import HorizontalScroll from '../HorizontalScroll'
function BioSection() {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className='m-20 flex justify-center flex-col'>
            <Bio />

            <HorizontalScroll>
                <div>item 1</div>
                <div>item 2</div>
                <div>item 3</div>
                <div>item 4</div>
                <div>item 5</div>
                <div>item 6</div>
                <div>item 7</div>
                <div>item 8</div>
            </HorizontalScroll>
        </div>
    )
}

export default BioSection
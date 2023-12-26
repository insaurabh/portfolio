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
            {/* <HorizontalScroll>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 1</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 2</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 3</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 3</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 3</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 3</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 3</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 3</div>
                <div className="min-w-64 p-4 bg-gray-200 mr-4">Item 3</div>
            </HorizontalScroll> */}
        </div>
    )
}

export default BioSection
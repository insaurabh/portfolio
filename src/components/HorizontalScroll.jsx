import React from 'react'

function HorizontalScroll({ children }) {
    return (
        <div className='horizontal-scroll-wrapper h-24 w-[300]'>
            {children}
        </div>
    )
}

export default HorizontalScroll
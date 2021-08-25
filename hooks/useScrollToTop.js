import React, { useEffect, useState } from 'react'

export function useScrollToTop(a, b) {
    const [screenWidth, setScreenWidth] = useState()

    function getScreenWidth() {
        setScreenWidth(window.innerWidth)
    } 
    
    useEffect(() => {
        getScreenWidth()
        window.addEventListener('resize', getScreenWidth)
        if(screenWidth < 700){
            window.scrollTo(0,0)
        }     
        return ()=>window.removeEventListener('resize', getScreenWidth)
    })



}
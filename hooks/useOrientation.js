import React, {useEffect, useState} from 'react'

export function useOrientation(){
    const [isPortrait, setIsPortrait] = useState(false)
    
    function getScreenOrientation(){
        if(window.innerWidth<1025){
            setIsPortrait(window.innerHeight < window.innerWidth ? 
            false : true
            )
        }
    }
    
    useEffect(()=>{
        getScreenOrientation()
        window.addEventListener('resize', getScreenOrientation)
        return ()=>window.removeEventListener('resize', getScreenOrientation)
    })
    
    return isPortrait
} 
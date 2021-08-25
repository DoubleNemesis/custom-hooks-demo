import React, {useEffect} from 'react'
import {useScrollToTop} from './hooks/useScrollToTop.js'

function CustomType({children, ...props}){
    useScrollToTop()
    
    return(
        <>
        <h1>CustomType {props.title}</h1>
        <p>{children}</p>
        </>
    )
}

export default CustomType
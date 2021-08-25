import React, {useEffect} from 'react'
import {useScrollToTop} from './hooks/useScrollToTop.js'

function Page({children, ...props}){
    useScrollToTop()
    
    return(
        <>
        <h1>Page {props.title}</h1>
        <p>{children}</p>
        </>
    )
}

export default Page
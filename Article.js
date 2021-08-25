import React, {useEffect} from 'react'
import {useScrollToTop} from './hooks/useScrollToTop.js'

function Article({children, ...props}){
    useScrollToTop()
    
    return(
        <>
        <h1>Article {props.title}</h1>
        <p>{children}</p>
        </>
    )
}

export default Article
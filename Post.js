import React, {useEffect} from 'react'
import {useScrollToTop} from './hooks/useScrollToTop.js'

function Post({children, ...props}){
    useScrollToTop()
    
    return(
        <>
        <h1>Post {props.title}</h1>
        <p>{children}</p>
        </>
    )
}

export default Post
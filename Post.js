import React, { useEffect } from 'react'
import { useScrollToTop } from './hooks/useScrollToTop'


function Post({ children, ...props }) {
    
    useScrollToTop()
    
    return (
        <>
            <h1>{props.title}</h1>
            <p>{children}</p>
        </>
    )
}

export default Post
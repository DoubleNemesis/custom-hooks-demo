import React from 'react'
import { useScrollToTop } from './hooks/useScrollToTop'


function Page({ children, ...props }) {

    useScrollToTop()

    return (
        <>
            <h1>{props.title}</h1>
            <p>{children}</p>
        </>
    )
}

export default Page
import React from 'react'
import { useScrollToTop } from './hooks/useScrollToTop'
import { useOrientation } from './hooks/useOrientation'


function Game({ children, ...props }) {

    useScrollToTop()
    let betterOnLandscape = useOrientation()

    return (
        <>
            <h1>{props.title}</h1>
            {betterOnLandscape ? <p>This page would look better on landscape</p> : null}
            <img src="https://www.tomsclassroom.com/mc.jpg" />
            <p>{children}</p>
        </>
    )
}

export default Game
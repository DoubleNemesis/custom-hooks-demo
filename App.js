import React, { useState, useEffect } from 'react';
import {Link, Switch, Route} from "react-router-dom"
import Page from './Page.js'
import Post from './Post.js'
import Game from './Game.js'
import Photo from './Photo.js'
import { lorem, lorem1, lorem2, lorem3 } from './lorem.js'

function App() {

    return (
        <>
                <nav>
                    <Link to="/">home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/games">Games</Link>
                    <Link to="/photos">Photos</Link>
                    <Link to="/blog">Blog</Link>
                </nav>
            <Switch>
                <Route exact path="/">
                    <Page title="Home Page">
                   <strong>Welcome to my site!</strong><br/>
                   {lorem3}
                    </Page>
                </Route>
                <Route path="/about">
                    <Page title="About">{lorem}</Page>
                </Route>
                <Route path="/Games">
                    <Game title="Fun Games">{lorem1}</Game>
                </Route>
                <Route path="/photos">
                    <Photo title="My Photos">{lorem2}</Photo>
                </Route>
                <Route path="/blog">
                    <Post title="My Blog">{lorem3}</Post>
                </Route>
            </Switch>
        </>
    )
}

export default App
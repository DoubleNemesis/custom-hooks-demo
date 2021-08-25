import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Page from './Page.js'
import Post from './Post.js'
import Article from './Article.js'
import CustomType from './CustomType.js'
import { lorem, lorem1, lorem2, lorem3 } from './lorem.js'

function App() {

    return (
        <>
            <Router>
                <nav>
                    <Link to="/index.html">home</Link>
                    <Link to="/one">one</Link>
                    <Link to="/two">two</Link>
                    <Link to="/three">three</Link>
                    <Link to="/four">four</Link>
                </nav>

                <Route exact path="/index.html">
                    <Page title="">This is the HomePage</Page>
                </Route>


                <Route path="/one">
                    <Page title="One">{lorem}</Page>
                </Route>

                <Route path="/two">
                    <Article title="Two">{lorem1}</Article>
                </Route>

                <Route path="/three">
                    <CustomType title="Three">{lorem2}</CustomType>
                </Route>

                <Route path="/four">
                    <Post title="Four">{lorem3}</Post>
                </Route>

            </Router>
        </>
    )
}

export default App
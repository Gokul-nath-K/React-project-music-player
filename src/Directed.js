import './App.css';
import './styles.css';
import React from 'react'
import {  Switch, Route } from 'react-router-dom'
import Search from './Pages/Search';
import MusicControlBar from './components/MusicControlBar';
import SideBar from './components/sideBar';
import Settings from './Pages/settings';
import Home from './Pages/Home'

export default function Directed() {
    return (
        <>
            <div className='side-nav-bar'>
                <SideBar />
            </div>
            <div className='content-container'>
                <Switch>
                    <Route exact path='/home' > <Home /> </Route>
                    <Route path='/search' > <Search /> </Route>
                    <Route path='/settings' > <Settings /> </Route>
                </Switch>
            </div>
            <div className='music-control-bar'>
                <MusicControlBar />
            </div>
        </>
    )
}

import './App.css';
import './styles.css';
import React from 'react'
import {  Switch, Route } from 'react-router-dom'
import MusicControlBar from './components/MusicControlBar';
import SideBar from './components/sideBar';
import Settings from './Pages/settings';
import Home from './Pages/Home'
import AppTopBar from './components/AppTopBar';
import SearchPage from './Pages/SearchPage';

export default function Directed() {
    return (
        <>
            <div className='app-top-bar'>
                <AppTopBar />
            </div>
            <div className='side-nav-bar'>
                <SideBar />
            </div>
            <div className='content-container'>
                <Switch>
                    <Route path='/home' > <Home /> </Route>
                    <Route path='/search' > <SearchPage /> </Route>
                    <Route path='/settings' > <Settings /> </Route>
                </Switch>
            </div>
            <div className='music-control-bar'>
                <MusicControlBar />
            </div>
        </>
    )
}
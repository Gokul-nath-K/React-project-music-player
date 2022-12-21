import './App.css';
import './styles.css'
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SettingsPage from './Pages/SettingsPage';
import SignInPage from './Pages/SignInPage';
import SignupPage from './Pages/SignUpPage';
import SignIn from './Pages/signinDEMO';
import CurrentSongPage from './Pages/NowPlaying';
import Player from './components/Player';
import MediaControlCard from './MaterialUI/MusicCard';
import { useState, useEffect } from 'react';

function App() {

  const [issignin, setissignin] = useState(false);

  useEffect(() => {

    if (window.location.pathname === '/homepage/signIn') {

      console.log("useEffect ran");
      setissignin(true);
    }
    else {
      setissignin(false)
    }
  })

  console.log(window.location.pathname);

  return (
    <>
      <Switch>
        <Route exact path='/'> <HomePage /> </Route>
        <Route exact path='/homepage'> <HomePage /> </Route>
        <Route exact path='/homepage/search'> <SearchPage /> </Route>
        <Route exact path='/homepage/settings'> <SettingsPage /> </Route>
        <Route exact path='/signIn'> <SignInPage /> </Route>
        <Route exact path='/signUp'> <SignupPage /> </Route>
        <Route exact path='/signindemo'> <SignIn /> </Route>
        <Route exact path='/nowplaying'> <CurrentSongPage /> </Route>
      </Switch>
      {
        (!issignin) ? <></> : <> <div className="music-control-bar">
          <Player />
        </div> </>

      }
    </>
  );
}

export default App;   
import './App.css';
import './styles.css'
import {  Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SettingsPage from './Pages/SettingsPage';
import SignInPage from './Pages/SignInPage';

function App() {
  return (
   <>
    <Switch>
      <Route exact path='/'> <HomePage /> </Route>
      <Route exact path='/homepage'> <HomePage /> </Route>
      <Route exact path='/homepage/search'> <SearchPage /> </Route>
      <Route exact path='/homepage/settings'> <SettingsPage /> </Route>
      <Route exact path='/signIn'> <SignInPage /> </Route>
    </Switch>
   </>
  );
}

export default App; 
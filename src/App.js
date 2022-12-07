import './App.css';
import './styles.css'
import Directed from './Directed';
// import SignIn from './Pages/Sign-in';
// import {  Switch, Route } from 'react-router-dom'

function App() {
  return (
   <>
    {/* <Switch>
      <Route exact path='/'> <Directed /> </Route>
      <Route path='/signin'> <SignIn /> </Route>
    </Switch> */}
    <Directed />
   </>
  );
}

export default App; 
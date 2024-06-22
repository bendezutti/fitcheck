import { Route, Router, Switch, Redirect} from 'react-router-dom'
import Homepage from './HomePage/page/Homepage'
import Login from './Login/page/Login'
import Register from './Register/page/Register'

function App() {
  return (
    <div>
      <Switch>
      <Router>
        <Route path='/home'> <Homepage/> </Route>
        <Route path='/login'> <Login/> </Route>
        <Route path='/register'> <Login/> <Register/> </Route>
      </Router>
      <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;

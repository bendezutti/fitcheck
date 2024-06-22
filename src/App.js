import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Homepage from './HomePage/page/Homepage'
import Login from './Login/page/Login'
import Register from './Register/page/Register'

function App() {
  return <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path='/home'> <Homepage /> </Route>
        <Route path='/login'> <Login /> </Route>
        <Route path='/register'> <Login /> <Register /> </Route>
        <Redirect to='/'/>
      </Switch>
    </main>
  </Router>
}

export default App;

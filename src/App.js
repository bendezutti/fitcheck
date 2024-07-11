// Author: Benjamin DeZutti
// Web Programming - Summer 2024
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Homepage from './HomePage/page/Homepage'
import Login from './Login/page/Login'
import Register from './Register/page/Register'
import MakeFitPage from './MakeFit/page/MakeFitPage'
import MyFits from './MyFits/page/MyFits'

function App() {
  return <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path='/home' exact> <Homepage/> </Route>
        <Route path='/login' exact> <Login/> </Route>
        <Route path='/register' exact> <Register/> </Route>
        <Route path='/makefit' exact> <MakeFitPage/> </Route>
        <Route path= '/fits' exact> <MyFits/> </Route>
        <Redirect to='/'/>
      </Switch>
    </main>
  </Router>
}

export default App;

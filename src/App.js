// Author: Benjamin DeZutti
// Web Programming - Summer 2024
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Homepage from './HomePage/page/Homepage'
import Login from './Login/page/Login'
import Register from './Register/page/Register'
import MakeFitPage from './MakeFit/page/MakeFitPage'
import MyFits from './MyFits/page/MyFits'
import PantsUploadPage from './ClothesUpload/PantsUpload/page/PantsUploadPage'
import ShirtUploadPage from './ClothesUpload/ShirtUpload/page/ShirtUploadPage'
import ShoesUploadPage from './ClothesUpload/ShoesUpload/page/ShoesUploadPage'

function App() {
  return <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path='/home' exact> <Homepage/> </Route>
        <Route path='/login' exact> <Login/> </Route>
        <Route path='/register' exact> <Register/> </Route>
        <Route path ='/shirts' exact> <ShirtUploadPage/> </Route>
        <Route path ='/pants' exact> <PantsUploadPage/> </Route>
        <Route path ='/shoes' exact> <ShoesUploadPage/> </Route>
        <Route path='/makefit' exact> <MakeFitPage/> </Route>
        <Route path= '/fits' exact> <MyFits/> </Route>
        <Redirect to='/home'/>
      </Switch>
    </main>
  </Router>
}

export default App;

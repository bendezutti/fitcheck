// Author: Benjamin DeZutti
// Web Programming - Summer 2024
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { AuthContext } from './shared/context/auth-context'
import Navbar from './Navbar/Navbar'
import Homepage from './HomePage/page/Homepage'
import Login from './Login/page/Login'
import Register from './Register/page/Register'
import MakeFitPage from './MakeFit/page/MakeFitPage'
import MyFits from './MyFits/page/MyFits'
import PantsUploadPage from './ClothesUpload/PantsUpload/page/PantsUploadPage'
import ShirtUploadPage from './ClothesUpload/ShirtUpload/page/ShirtUploadPage'
import ShoesUploadPage from './ClothesUpload/ShoesUpload/page/ShoesUploadPage'
import MakeFit from './MakeFit/components/MakeFit'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //MANAGE token session state
  const [token, setToken] = useState(false)

  //pass token as callback
  const login = useCallback((token) => {
    setIsLoggedIn(true);
    //set the token state
    setToken(token);
  }, []);


  //do same TOKEN state for logout
  const logout = useCallback((token) => {
    setIsLoggedIn(false);
    setToken(null);
  }, []);

  let routes;
  //Checking if TOKEN is set in context
  //if (isLoggedIn) {
  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/makefit" exact>
          <MakeFit />
        </Route>
        <Route path="/uploadshirts" exact>
          <ShirtUploadPage/>
        </Route>
        <Route path="/uploadpants" exact>
          <PantsUploadPage/>
        </Route>
        <Route path="/uploadshoes" exact>
          <ShoesUploadPage/>
        </Route>
        <Route path="/myfits" exact>
          <MyFits/>
        </Route>
        <Route path="/makefit" exact> 
        <MakeFit/>
        </Route>


        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/home" exact>
          <Homepage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, login: login, token: token, logout: logout }}
    >
      <Router>
        <Navbar />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

// Author: Benjamin DeZutti
// Web Programming - Summer 2024
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { AuthContext } from './shared/context/auth-context'
import Navbar from './Navbar/Navbar'
import Homepage from './HomePage/page/Homepage'
import Login from './Login/page/Login'
import Register from './Register/page/Register'
import PantsUploadPage from './ClothesUpload/PantsUpload/page/PantsUploadPage'
import ShirtUploadPage from './ClothesUpload/ShirtUpload/page/ShirtUploadPage'
import ShoesUploadPage from './ClothesUpload/ShoesUpload/page/ShoesUploadPage'
import AllItems from './AllItems/components/AllItems'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [token, setToken] = useState(false)

  const login = useCallback((token) => {
    setIsLoggedIn(true);
    setToken(token);
  }, []);


  const logout = useCallback((token) => {
    setIsLoggedIn(false);
    setToken(null);
  }, []);

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/allitems" exact>
          <AllItems />
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

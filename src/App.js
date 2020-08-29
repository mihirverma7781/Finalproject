import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"../node_modules/bootstrap/dist/js/bootstrap.bundle";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route  exact path = '/' component={Home}/>
      <Route  exact path = '/Login' component={Login}/>
      <Route  exact path = '/Signup' component={Signup}/>
      <Redirect to='/'/>
    </Switch>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

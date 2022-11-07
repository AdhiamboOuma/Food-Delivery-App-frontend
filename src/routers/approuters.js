import React from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from '../Components/landing';
import Header from '../Components/header';
import SignUp from '../Components/signup';
import LogIn from '../Components/login';
import Order from '../Components/order'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <div>
    <Header></Header>
    <Switch>
      <Route exact path ="/" component={Landing}/>
      <Route path ="/login" component ={LogIn}/>
      <Route path ="/signup" component ={ SignUp}/>
      <Route path ="/order" component ={ Order}/>

    </Switch>
    </div>
    </BrowserRouter>
  );
};

export default AppRouter;

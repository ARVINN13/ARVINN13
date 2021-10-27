import React, { useEffect } from "react";
import Home from "./components/Home";
import Login from "./Login";
import LoginEmail from "./LoginEmail";
import LoginGmail from "./LoginGmail";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Contactus from "./Pages/Contactus";
import Pricing from "./Pages/Pricing";

import Demo from "./Pages/Demo";
import Profile from "./Pages/Profile";
import UserRoute from "./Pages/UserRoute";
import NouserRoute from "./Pages/NouserRoute";
import Error from "./Pages/Error";
import { setUser } from "./Redux/action";
import { useDispatch } from "react-redux";
import firebase from "firebase";




function App() {


  const dispatch = useDispatch();
  useEffect(() => {
    const user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        dispatch(setUser(user));
        console.log(user);
      }else{
        dispatch(setUser(null));
      }
     
       });
      },[dispatch]);





  
  return (   
    <BrowserRouter>
      <>
      <Switch>

      <NouserRoute  exact path="/" component={ Home } />
     
      <NouserRoute  exact path="/home" component={ Home } />
     
      <Route  exact path="/login" component={ Login } /> 
      <Route  exact path="/loginemail" component={ LoginEmail } />   
      <Route  exact path="/logingmail" component={ LoginGmail } />   
       
      <NouserRoute  exact path="/pricing" component={ Pricing } /> 
      <NouserRoute  exact path="/contact" component={ Contactus } /> 

      <UserRoute exact path="/demo" component={ Demo } />
      <UserRoute exact path="/profile" component={ Profile } />
      <Route  component={Error} />
    </Switch>
    </>
    </BrowserRouter>
  );
  
}

export default App;

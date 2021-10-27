import React, { useState, useEffect } from "react";
import firebase from "firebase";
import StyleFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Logo2 from './images/Logo2.png';
import { NavLink, Link } from "react-router-dom";
import LogoNavbar from "./images/LogoNavbar.png";
import AppBar from "@material-ui/core/AppBar";
import Headerwelcome from "./Pages/Headerwelcome";
import gicon from "./images/gicon.png";
import emailicon from "./images/emailicon.png";
import { loginInitiate, logoutInitiate} from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";






var uiConfig = {
  
  signInFlow: "popup",
  signInOptions: [ 
  //  firebase.auth.EmailAuthProvider.PROVIDER_ID,
  // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   firebase.auth.PhoneAuthProvider.PROVIDER_ID, 
   
 ],
callbacks: {
    signInSuccessWithAuthResult: async (authResult) => {
      const userInfo = authResult.additionalUserInfo;
      if (userInfo.isNewUser && userInfo.providerId === "password") {
        try {
          await authResult.user.sendEmailVerification();
          console.log("Check your email.");
        } catch (e) {
          console.log(e);
        }
      }
      return false;
    },
  },
};








const Login = () => {

 const [show, setShow] = useState(false);
 const dispatch = useDispatch();
 const user = firebase.auth().currentUser;
  useEffect(() => {
   if(user != null)  {  
   dispatch(loginInitiate(user));
   console.log("user",user);
  }
},[user]);


//const idToken = firebase.auth().currentUser.refreshToken;
//useEffect(()=>{
 // const getToken = firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
    // Send token to your backend via HTTPS
    // ...
 // }).catch(function(error) {
    // Handle error
 // });
//},[idToken]);






   //const [user, setUser] = useState(null);
//const dispatch = useDispatch();
//useEffect(() => {
  //const user = firebase.auth().currentUser;
  //const authObserver = firebase.auth().onAuthStateChanged((user) => {
//setUser(user);
//});
//console.log(authObserver)
//return authObserver;
//});

const Signout = () => {
  dispatch(logoutInitiate());
};
  
    
const {currentUser} = useSelector((state) => state.user);
console.log("currentUser",currentUser)







if (currentUser) {
   
  return (
      <>
      
       <AppBar position="Fixed">
         <section className="Navbar-bg">


    <nav class="navbar  navbar-expand-lg navbar-light">
        <div class="container-fluid">

              <a class="navbar-brand" href="#"><img src={ LogoNavbar } alt= "Logo"></img>
              </a>
              <h3>Welcome,  <small>{currentUser.displayName}</small> 
                      <small>{currentUser.phoneNumber}</small> </h3>
                     

             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
             aria-expanded="false" aria-label="Toggle navigation" onclick = { () => setShow(!show)}>

               <span class="navbar-toggler-icon "></span>
             </button>
    
             <div class={`collapse navbar-collapse ${show ? "show" : "" }`} 
                 id="navbarSupportedContent">

                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0" >
                       
                      
                      
                       

                       
                     </ul>



                     <div className="dropdown show">
            <button className="myaccount dropdown-toggle"  
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              My Account
             </button>
         
           <div className="dropdown-menu" >
           <NavLink className="nav-link" to="/profile"> 
               <h4 className="signout"><i class="far fa-user-circle"></i> My Profile</h4> </NavLink>  
               <NavLink className="nav-link" to="/">                 
                <h4 className="signout text-center" type="button" onClick={Signout}><i class="fas fa-sign-out-alt"></i> Logout </h4></NavLink>
           </div>
        </div>

                     
                    
                      
                       <NavLink className="nav-link" to="/demo">
                       <button className="btn  demo" type="submit">Demo</button>
                       </NavLink>
                      

                   
                       
                     
                     
             </div>
  </div>
</nav>
</section>
</AppBar>
<Headerwelcome />
         
         
         
        
      </>
    );
  } else {
    return (
      <>
     
      <section className="firebase-section ">
      <NavLink class="nav-link" aria-current="page" to="/">                
    <h4 className="text-left mt-4" style={{color:'#686868'}}> 
    <i className="fa fa-angle-double-left" aria-hidden="true"></i> back to Home</h4>
    </NavLink>
      <div className="container firebase-maincard  text-center" >
      
     
             <div className="row firebase-row  text-center">
               
                   
                      <div className="firebase-leftside col-12 col-lg-6  text-center mb-4">
                        
                         
  
                        <h1 className="firebase-head fw-bolder" style={{color:"#fff"}}>Welcome to Optimal</h1>
                  
                  <NavLink class="nav-link" aria-current="page" to="/home">                     
                    <img src={ Logo2 } alt="contactUsImg" className="img-fluid " />                                      
                 </NavLink>
                 <h2 className="firebase-let fw-bolder">Let's Get Started</h2>
                 </div>
                
                

                   <div className="firebase-rightside col-12 col-lg-6 mb-4 text-center " >    
                  
                  
                   
                      <h1 className="main-heading fw-bold ">  Sign In <i class="fas fa-sign-in-alt"></i> </h1>

                     
               
                      <StyleFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> 
                     
                   <h4 className="mt-4  text-center " style={{color:"#686868"}}>or join with us</h4>
                  <div className="firebase-btn text-center mb-4"> 
                  <NavLink className="nav-link" to="/LoginGmail">
                    <img src={ gicon } id="gicon" alt="google-icon"/></NavLink>

                  <Link className="nav-link" to="/LoginEmail">
                     <img src={ emailicon }  alt="email-icon"/></Link>
                  </div>
                     
               
               
                </div>   

              </div>
            </div>       
        
       </section>
    </>
    );
  }
};

export default Login;

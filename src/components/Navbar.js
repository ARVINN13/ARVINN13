import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo.png";
import AppBar from "@material-ui/core/AppBar";


const Navbar = () => {

    const [show, setShow] = useState(false);
 
return(
        <>
        <AppBar position="Fixed">
         <section className="Navbar-bg">


    <nav class="navbar  navbar-expand-lg navbar-light">
        <div class="container-fluid">

              <a class="navbar-brand" href="#"><img src={ Logo } alt= "Logo"></img>
              </a>

             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
             aria-expanded="false" aria-label="Toggle navigation" onclick = { () => setShow(!show)}>

               <span class="navbar-toggler-icon "></span>
             </button>
    
             <div class={`collapse navbar-collapse ${show ? "show" : "" }`} 
                 id="navbarSupportedContent">

                     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <NavLink class="nav-link" aria-current="page" to="/">Home</NavLink>
                      </li>

                      <li class="nav-item">
                        <NavLink class="nav-link" to="/pricing">Pricing</NavLink>
                      </li>

                       

                        <li class="nav-item">
                            <NavLink class="nav-link" to="/contact">Contact us</NavLink>
                          </li>
                     </ul>

                     
                     <NavLink class="nav-link" to="/login">
                       <button class="btn  demo" type="submit">Demo</button>
                       </NavLink>

                   
                           <NavLink class="nav-link" to="/login">
                               <button class="btn  login ">Login</button>
                           </NavLink>

                       
                  
                     
                     
             </div>
  </div>
</nav>
</section>
</AppBar>


        </>
    );
};



export default Navbar;
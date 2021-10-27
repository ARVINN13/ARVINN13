import React from "react";
import B3 from "../images/B3.jpg";
import { NavLink } from "react-router-dom";


const Header = () => {

    return(
        <>
      <header>

          <div class="banner">
                
                <div className="slider">
                  <img src={ B3 } id="slideImg"></img>
                </div>

             <div className="overlay">
                <div class="content">
                   
                  <h6>Profit Insights for Amazon Sellers</h6>

                   <NavLink class="nav-link" aria-current="page" to="/login">  
                  
                   <button class="btn startsJourney " type="submit">START YOUR JOURNEY NOW</button>  
                   </NavLink>       
                 </div>
               
             </div>
          </div>           
        </header>
      
       
        </>
    );

};



export default Header;

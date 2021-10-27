import React from "react";
import B5 from "../images/B5.jpg"
import { NavLink } from "react-router-dom";

const Headerwelcome = () => {

    return(
        <>
      <header>

          <div class="banner">
                
                <div className="slider">
                  <img src={ B5 } id="slideImg"></img>
                </div>

             
          </div>           
        </header>
      
       
        </>
    );

};



export default Headerwelcome;

import React from "react";
import { NavLink } from "react-router-dom";





const Error = () => {
  return (
    <>
     <div className="text-center mt-5" style={{background: "white" }}>
       <img src="https://www.simpliowebstudio.com/wp-content/uploads/2016/02/joomla-404-error-page.png" alt /><br/>
       <NavLink class="nav-link" aria-current="page" to="/"> 
       <button className="btn btn-primary">Go Back To Home</button>
       </NavLink>
       </div>
  
    </>
  );


};

export default Error;

import React, { useState } from "react";
import FeaturesApi from "../Api/FeaturesApi";

const Features=() => {
    const [productData, setProductData] = useState(FeaturesApi);


    return(
        <>
         <div className="container-fluid triangle"></div>
        <section className="features-main-container">

            <div className="container features-container ">
                <h1 className="main-heading text-center fw-bold">
                     Features</h1>


                     <div className="row">
                         {productData.map((curElem) => {
                              const{id, logo, title, info }=curElem;
                              return(
                                  <>
                                  <div className="col-11 col-lg-4 col-xxl-4 text-center features-container-subdiv">
                                  <i className={`fontawesome-style ${logo}`}></i>
                             <h2 className="subHeading">{ title }</h2>
                             <p className="paraStyle w-100">{ info }</p>
                         </div>

                                  </>
                              );
                         })}

                         

                     </div>

            </div>
            
            </section>


        </>
    );
};




export default Features;
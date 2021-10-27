import React, { useState } from "react";
import DataAmazonApi from "../Api/DataAmazonApi.js";
import Amazon from "../images/Amazon.jpg";

const DataAmazon = () => {

    const [AmazonData, setAmazonData] = useState(DataAmazonApi);


    return(
        <>
        <section className="data-amazon data-service" >
            <div className="container mb-5">
                <div className="row">      
                <div className="col-12 col-lg-5  data-services-leftside-img ">
                        <img src={ Amazon } alt="dataamazonImg"  />                     
                     </div>              

                    <div className="col-12 col-lg-6 data-service-details">

                         <h1 className="main-heading ">Amazon Sales Estimates Tool</h1>

                         {AmazonData.map((curElem) => {
                             const{id, info }=curElem;
                             return(
                                 <>

                                 <div className="row data-service-info  ">

                                    <div className="col-1  data-service-number">{ id }</div>
                                    <div className="col-11 data-service-heading"><h2>{ info }</h2> </div>
                                   
                                 </div>

                                 </>
                             );
                         })}
                        
                     </div>

                    


                </div>

            </div>

        </section>

       
       
        
        
        


        </>
    );
};
export default DataAmazon;
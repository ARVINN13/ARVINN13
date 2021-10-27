import React, { useState } from "react";
import WorkApi from "../Api/WorkApi";

const AboutProduct = () => {

    const [workData, setWorkData] = useState(WorkApi);


    return(
        <>
        <section>
            <div className="work-container container-fluid">
                <h1 className="main-heading text-center">"Why Optimal..?"</h1>
                <div className="row">
                    {workData.map((curElem) => {
                        const{id, title, info }=curElem;
                        return(
                            <>
                             <div className="col-12 col-lg-3 text-center work-container-subdiv-about">
                        
                        <h2 className="subHeading">{ title }</h2>
                        <p className="paraStyle w-100"> { info }  </p>
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


export default AboutProduct;
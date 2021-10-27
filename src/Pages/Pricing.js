import React from "react";
import { NavLink } from "react-router-dom";
import "./Pricing.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Pricing = () => {
    return (
        <>
         <Navbar/>
         
        <section className="Packages-section">
           
            <div className="container">
            <h1 >Build better customer experiences</h1>
            <p className="ptext">Choose a plan. Get started today. Understand and engage your customers to grow like never before.</p>
                 <div className="container">
                   
                     
                    <div className="row">                  
                   
                     
                         <div className="col-12 col-lg-3">
                            <div className="card pricing-card">
                               <div className="title">                                    
                                    <div className="row">
                                      <div className="col-4 col-lg-4">
                                      
                                      <i className="first-icon fa fa-user-circle" aria-hidden="true"></i>

                                        </div>
                                          <div className="col-8 col-lg-8">
                                            <h3 className="head-1">Core</h3>
                                            <p className="subhead-1">Learn & Experiment</p>
                                          </div>
                                          
                                        </div>            
                                            <h2>Free</h2>                
                                 </div> 
                              
                                <div ClassName="option">                                
                                   
                                       <p> <i className="fa fa-check" aria-hidden="true">10 GB Space</i></p><br/>
                                       <p> <i className="fa fa-check" aria-hidden="true">10 GB Space</i></p><br/>
                                      <p>  <i className="fa fa-check" aria-hidden="true">10 GB Space</i></p><br/>
                                      <p>  <i className="fa fa-check" aria-hidden="true">10 GB Space</i></p><br/>                               
                                      
                                </div>  
                                <NavLink class="first-button nav-link" aria-current="page" to="/">
                                    Get Started
                                </NavLink>  
                                    
                            </div>                
                        </div>    


                         <div className="col-12 col-lg-3">
                            <div className="card pricing-card">
                               <div className="title">                                    
                                    <div className="row">
                                      <div className="col-4 col-lg-4">
                                      <i className="second-icon fa fa-handshake" aria-hidden="true"></i>
                                     
                                        </div>
                                          <div className="col-8 col-lg-8">
                                            <h3 className="head-2">Startup</h3>
                                            <p className="subhead-2" >Analytics Power</p>
                                          </div>
                                        </div>            
                                        <h2 >
                                          <sup style={{fontzize:'5px'}}><i class="fas fa-rupee-sign" ></i></sup>349/mo</h2>    
                                 </div> 
                              
                                 <div ClassName="option">                                
                                   
                                 <p> <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                       <p> <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p>  <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p>  <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>                               
                                      
                           </div>   
                                <NavLink class="second-button nav-link" aria-current="page" to="/">
                                    Start Trial
                                </NavLink>          
                            </div>                
                        </div>    


                         <div className="col-12 col-lg-3">
                            <div className="card pricing-card">
                               <div className="title">                                    
                                    <div className="row">
                                      <div className="col-4 col-lg-4">
                                            <i className="thired-icon fa fa-chess-king" aria-hidden="true"></i>
                                        </div>
                                          <div className="col-8 col-lg-8">
                                            <h3 className="head-3">Pro</h3>
                                            <p className="subhead-3">Journey Architect</p>
                                          </div>
                                        </div>            
                                            <h2 style={{color:"#fff"}}><sup><i className="fas fa-rupee-sign"></i></sup>949/mo</h2>                
                                 </div> 
                              
                                 <div ClassName="option " >                                
                                   
                                      <p style={{color:'#fff'}}> <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p style={{color:'#fff'}}> <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p style={{color:'#fff'}}>  <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p style={{color:'#fff'}}>  <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>                               
                                      
                                </div>    
                                <NavLink class="thired-button nav-link" aria-current="page" to="/">
                                   Start Trial
                                </NavLink>          
                            </div>                
                        </div>     


                        <div className="col-12 col-lg-3">
                            <div className="card pricing-card">
                               <div className="title">                                    
                                    <div className="row">
                                      <div className="col-4 col-lg-4">
                                            <i className="fourth-icon fa fa-paper-plane" aria-hidden="true"></i>
                                        </div>
                                          <div className="col-8 col-lg-8">
                                            <h3 className="head-4">Enterprise</h3><p className='subhead-4'>Mission Control</p>
                                          </div>
                                        </div>            
                                            <h2 style={{color:'rgb(209, 188, 188)'}}>Contact</h2>                
                                 </div> 
                              
                                 <div ClassName="option">                                
                                   
                                 <p style={{color:'#f8c484'}}> <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p style={{color:'#f8c484'}}> <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p style={{color:'#f8c484'}}>  <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>
                                      <p style={{color:'#f8c484'}}>  <i className="fa fa-check " aria-hidden="true">10 GB Space</i></p><br/>                               
                                                                     
                             
                           </div>   
                                <NavLink class="fourth-button nav-link" aria-current="page" to="/">
                                    Contact Us
                                </NavLink>          
                            </div>                
                        </div>                 



                       
                       
                      




                    </div>               
                </div>
            </div>      
        </section>  
        <Footer/>
        </>
    );
};

export default Pricing;
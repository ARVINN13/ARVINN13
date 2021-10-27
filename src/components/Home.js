import React, { Suspense, lazy } from "react";
//import Navbar from"./Navbar";
//import Header from "./Header";
//import AboutProduct from "./AboutProduct";
//import DataAmazon from "./DataAmazon";
//import Contact from "./Contact";
//import Footer from "./Footer";
//import VdoPlay from "./VdoPlay";
//import Features from "./Features";
const Navbar = lazy(() => import('./Navbar'))
const Header = lazy(() => import('./Header'))
const AboutProduct = lazy(() => import('./AboutProduct'))
const DataAmazon = lazy(() => import('./DataAmazon'))
const Contact = lazy(() => import('./Contact'))
const Footer = lazy(() => import('./Footer'))
const VdoPlay = lazy(() => import('./VdoPlay'))
const Features = lazy(() => import('./Features'))


const Home = () => {
  return (
    <>
     <Suspense fallback={<div>loading....please wait</div>}>
    <Navbar />
    </Suspense>

    <Suspense fallback={<div>loading....please wait </div>}>
    <Header/>  
    </Suspense>  

    <Suspense fallback={<div>loading....please wait </div>}>
    <AboutProduct/>   
    </Suspense>  

    <Suspense fallback={<div>loading....please wait </div>}> 
    <Features /> 
    </Suspense>  

    <Suspense fallback={<div>loading....please wait </div>}>     
    <DataAmazon />
    </Suspense>     

    <Suspense fallback={<div>loading....please wait </div>}>  
    <VdoPlay />
    </Suspense>  

    <Suspense fallback={<div>loading....please wait </div>}> 
    <Contact />
    </Suspense>  

    <Suspense fallback={<div>loading....please wait </div>}> 
    <Footer /> 
    </Suspense>      
    
    </>
  );


};

export default Home;

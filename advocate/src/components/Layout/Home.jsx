
import React from "react";
// import web from "../src/images/black.jpg";
import { NavLink } from "react-router-dom";
export const Home = () => {
    return (
        <>
        <section> 
            <div className="home" id="home">
            <div  id="header" className="d-flex align-items-center">
         
         <div className="container-fluid nav_bg">
                 <div className="row">
                 <div className="col-10 mx-auto">
                     <div className="row">
                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                         <h1>Advocate diary a perfect tool for your case managements. Simplified, easy to use, user friendly. We will help you get more efficient, organized and productive in a systemic way. Get access to your case information like client details, next hearing date, documents, remarks and many more anywhere and at any time. </h1>
            <div className="mt-3">
                <NavLink to="/features" className="btn-get-started text-primary">
                    Get Started
                    </NavLink>  
                
            </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src ='/assets/img/hero/hero-img' className="img-fluid animated" alt="home img" />
                </div>
            </div>
            </div>
            </div>
            </div>

        </div>           </div> </section>
        </>
    );
};


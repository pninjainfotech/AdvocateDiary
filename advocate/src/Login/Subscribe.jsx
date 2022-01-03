import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Subscribe extends React.Component {
 
  render() {
   
    return (
     
      <div className="prices" id="prices">
       <section>
          <div class="container py-5">

            
            <header class="text-center mb-5 text-black">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h1>Price</h1>
                  
                </div>
              </div>
            </header>
           



            <div class="row text-center align-items-end">
             
              
             
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                 {/*} <h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>*/}
                  <h2 class="h1 font-weight-bold">Rs.2000<span class="text-small font-weight-normal ml-2">/ month</span></h2>

                  <div class="custom-separator my-4 mx-auto ">

                  </div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Unlimited case Entries</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Document Management</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Case Management</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Regular Email and Message notifications of your case Hearings</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Multiple Users</li>
                    <li class="mb-3 ">
                      <i class="fa fa-times mr-2"></i>
                      Easy accessible Dashboard
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Data Security</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>24*7 Support</li>
                    
                  </ul>
                  <a href="/signup" class="btn btn-primary text-white btn-block p-2 shadow rounded-pill">Subscribe</a>
                  <div class="">Terms and Conditions apply</div>
                </div>
              </div>
            

               
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                 {/*<h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>*/}
                  <h2 class="h1 font-weight-bold">Rs.10000<span class="text-small font-weight-normal ml-2">/year</span></h2>

                  <div class="custom-separator my-4 mx-auto"></div>

                  <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Unlimited case Entries</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Document Management</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Case Management</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Regular Email and Message notifications of your case Hearings</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Multiple Users</li>
                    <li class="mb-3 ">
                      <i class="fa fa-times mr-2"></i>
                      Easy accessible Dashboard
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>Data Security</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>24*7 Support</li>
                    
                  </ul>
                  <a href="/signup" class="btn btn-primary text-white btn-block p-2 shadow rounded-pill">Subscribe</a>
                  <div class=" ">Terms and Conditions apply</div>
                </div>
              </div>
            
             
            </div>
          </div>
        </section>

      </div>
     
      
)
};
}

export default Subscribe;
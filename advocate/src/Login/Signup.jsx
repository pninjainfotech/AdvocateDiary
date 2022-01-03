import React,{ useState } from "react";

const Signup = () => {

    const[user,setUser] =useState({

      name:"",
      phone:"",
      email:"",
      password:"",
      cpassword:""
    })

const handleChange =e =>{
const{name,value}=e.target
setUser({
    ...user,
    [name]:value
})

}


    return (
        <>
        <section className="signup" id="signup">
            {console.log("User",user)}
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h1 className="form-title">SignUp</h1>
                        
                        <form className="register-form" id="register-form"> 
                        <div class="col-md-6 form-group">
    <label for="exampleInputPassword1">First Name</label>
    <input type="text" name="name" value={user.name} class="form-control"  autocomplete="off" placeholder="Enter First Name"required  onChange={handleChange}/>
  </div>

  <label for="exampleInputPassword1">Last Name</label>
  <div class="col-md-6 form-group mt-3 mt-md-0">
                          <input type="text" class="form-control" name="lname" value={user.lname} placeholder="Enter Last Name" onChange={handleChange} required />
                        </div>
  <div class="col-md-6 form-group">
    <label htmlfor="phone">Phone</label>
    <input type="tel" name="phone" value={user.phone}
    class="form-control"  autocomplete="off" placeholder="Enter Phone" onChange={handleChange} required/>
  </div>

  <div class="col-md-6 form-group">
    <label for="email">Email</label>
    <input type="email" name="email" value={user.email} class="form-control"   autocomplete="off" placeholder="Enter Email" onChange={handleChange} required/>
  </div>



  <div class="col-md-6 form-group">
    <label for="password">Password</label>
    <input type="password" name="password" value={user.password} class="form-control" autocomplete="off" placeholder="Password"onChange={handleChange} required/>
  </div>
 
  <div class="col-md-6 form-group">
    <label for="password">Confirm Password</label>
    <input type="password" name="cpassword" value={user.cpassword} class="form-control"  autocomplete="off" placeholder="Confirm Password" onChange={handleChange} required/>
  </div>
       
   <div className="signup_form_button offset py-lg-4">
  <button type="submit" className="btn btn-primary ">SignUp</button>
  </div>
  <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Already have an account? <a href="/login" >Login</a>.</div>
              </div>            
  
</form>

                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Signup;

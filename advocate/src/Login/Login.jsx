import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {useNavigate} from 'react-router';

const Login =() =>{
  const navigate= useNavigate()
  const[user,setUser] =useState({

    email:"",
    password:"",
    
  })

const handleChange =e =>{
const{name,value}=e.target
setUser({
  ...user,
  [name]:value
})

}

const handleSubmit = (e)=>{
  // history.push
  e.preventDefault() 
  navigate("/dashboard")
  localStorage.setItem('isLogedIn', 'true')
}
    return (
    <div className="login" id="login">
     {console.log(user)}
     <div className="page-holder align-items-center py-4 bg-gray-100 vh-100">
      <div className="container ">
        <div className="row align-items-center">
          
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary">Login</div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4">Hi, welcome back!</h3>
                <form id="loginForm" onSubmit = {handleSubmit}>
                  <div className="form-floating mb-3">
                    <input   name="email" value={user.email} onChange={handleChange} className="form-control" id="floatingInput" type="email" placeholder="name@example.com" required />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input  name="password" value={user.password} onChange={handleChange} className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                    <label className="form-check-label" for="remember">Remember me</label>
                  </div>
                  <button className="btn btn-primary" type="Submit" >Login</button>
                
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Don't have an account? <a href="/signup">Register</a>.
                </div>
              </div>
            
            </div>
          
       </div>
    </div>
    </div>
    </div>
)

}
export default Login;
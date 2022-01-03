 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 import { MenuItems } from "./MenuItems"
 import './Navbar.css' 

 export const Navbar = ()=> {
     const isLogedIn = localStorage.getItem("isLogedIn");
     const [clicked, handleClick] = useState(false)
    

         return(
             <nav className="NavbarItems">
                 <h1 className="navbar-logo">AdvocateDiary<i className=""></i></h1>
                  <div className="menu-icon" onClick={()=>handleClick(!clicked)}>
                      <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                  </div>
                  <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                      {MenuItems.map((item, index) => {
                          return(
                             <> 
                                { item.isPrivateRoute && isLogedIn && <Link className={item.cName} to={item.url}>{item.title}</Link>}
                                { !item.isPrivateRoute && !isLogedIn &&  <Link className={item.cName} to={item.url}>{item.title}</Link>}
                            </>
                          )
                      })}   
                  </ul>
             </nav>
         )
 }

 export default Navbar
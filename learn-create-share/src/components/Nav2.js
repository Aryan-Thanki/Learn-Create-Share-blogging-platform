import React from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/NavBar.css";



function Nav2() {
   return (
      <>
      <nav class="navbar navb2 navbar-expand-sm ">
         <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Example Student @ Example School</span>
            <div>
               <ul class="navbar-nav">
                  <li class="nav-item">
                     <Link class="navbtn nav-link" to="/CreatePost">Create Post</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="navbtn nav-link" to="/CreatePost">Draft Post</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="navbtn nav-link" to="/CreatePost">Publish Post</Link>
                  </li>
                  <li class="nav-item">
                     <Link class="navbtn nav-link" to="/Detail">About</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <Outlet />
      </>
   )
}

export default Nav2
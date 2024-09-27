import React from "react";
import { Link } from "react-router-dom";

function Footer() {    
    return (

    <footer className="container-fluid">
        <br />
        <hr />
        <div className="container">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
            <li class="nav-item"><a href="/faq" class="nav-link px-2 text-muted">FAQs</a></li>
            <li class="nav-item"><Link to={`/aboutUs`} class="nav-link px-2 text-muted">About Us</Link></li>
            <li class="nav-item"><Link to={`/contactUs`} class="nav-link px-2 text-muted">Contact Us</Link></li>
            </ul>
            <p class="text-center text-muted">© 2022 Didactic Solutions, Inc</p>
        </div>
    </footer>
    );
  }
  
  export default Footer;
  
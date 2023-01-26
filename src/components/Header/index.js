import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min";

function Header(){
    return(
        <div className='header'>
           <nav class="navbar navbar-expand-lg header ">
                <div class="container-fluid">
                    <a class="navbar-brand shor" href="#">Shortly</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse caixa navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav lista me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class=" branco " aria-current="page" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                            <a class=" branco" href="#">Pricing</a>
                            </li>
                            <li class="nav-item dropdown">
                            </li>
                            <li class="nav-item">
                            <a class=" branco  " href="#" tabindex="-1" aria-disabled="true">Resources</a>
                             <hr></hr>
                            </li>
                        </ul>
                        <form class="d-flex formul ">
                            <button className='login'>Login</button>
                            <button class="  sgn nav-item " type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
           </nav>
        </div>
    )
}

export default Header


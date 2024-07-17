import React from 'react';
import logo from '../assets/img/Main-logo.svg'
export default function Header(){
	return(
		<>
  <div class="logo_align">
		<div class="logo">
			<a href="/">
				<img class="main_logo" src={logo} alt=""/>
			</a>
    </div>
  </div>
    <div class="navbaralign">    
     <nav class="navbar">
			          <ul class="nav-links">
                <li class="nav-link">
                    <a href="/">Home</a>
                </li>
				          <li class="nav-link">
                    <a href="/service">Services</a>
                 </li>
                  <li class="nav-link services">
                    <a href='/'>About
                        <span class="material-icons dropdown-icon">
                            arrow_drop_down
                        </span>
                    </a>
                    <ul class="drop-down">
                    <a href='/about'> <li>About Us</li></a>
                        <li>Expert Adviser</li>
                        <li>Disclaimer</li>
						            <li>FAQ</li>
                         </ul>
                       </li>
				              <li class="nav-link">
                    <a href="/performance">Performance</a>
                    </li>
                      <li class="nav-link services">
                      <a href="/pricing">Pricing
                          <span class="material-icons dropdown-icon">
                            arrow_drop_down
                        </span>
                    </a>
                    <ul class="drop-down">
                      <li>Plan</li>
                      <li>Payment Method</li>
                      
                    </ul>
                </li>
                  <li class="nav-link">
                      <a href="/contact">Contact Us</a>
                  </li>
                  
                  
                
                <li class="LoginAlign">
                  <a href="/login"><button class="loginButton"> Login
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>
                
                    </div></button></a>
                  </li>
                  <li class="LoginAlign">
                    <a href="/register"><button class="loginButton"> Sign up
                      <div class="arrow-wrapper">
                          <div class="arrow"></div>
                  
                      </div></button></a>
                    </li>
                  
               </ul>
    </nav>
  </div>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    <ul class="menu__box">
      <li><a class="menu__item" href="/index.html">Home</a></li>
      <li><a class="menu__item" href="/services.html">Services</a></li>
      <li><a class="menu__item" href="/about.html">About</a>
        <ul>
            <li><a class="aboutus_hamburger-menu" href="/about.html">About Us</a></li>
            <li><a class="aboutus_hamburger-menu" href="/expertadvisor.html">Expert Adviser</a></li>
            <li><a class="aboutus_hamburger-menu" href="/disclaimer.html">Disclaimer</a></li>
            <li><a class="aboutus_hamburger-menu" href="/faq.html">Faq</a></li>
        </ul>
    </li>
      <li><a class="menu__item" href="/historicalgraphics.html">Backtesting and live Results</a></li>
      <li><a class="menu__item" href="/price">Price and payment</a></li>
      <ul>
        <li><a class="aboutus_hamburger-menu" href="/price.html">Price Plan</a></li>
          </ul>
          <li><a class="menu__item" href="/contact.html">Contact Us</a></li>
          <li><a class="menu__item" href="/login">Login</a></li>

          <li><a class="menu__item" href="/register">Register</a></li>
        </ul>
        
        
  </div>  
  </>




	)
}


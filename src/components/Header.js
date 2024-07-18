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
                    <a>About
                        <span class="material-icons dropdown-icon">
                            arrow_drop_down
                        </span>
                    </a>
                    <ul class="drop-down">
                    <a href='/about'> <li>About Us</li></a>
                    <a href='/expertadviser'> <li>Expert Adviser</li></a>
                    <a href='/disclaimer'> <li>Disclaimer</li></a>
                    <a href='/faq'> <li>FAQ</li></a>
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
                    <a href='/priceplan'> <li>Plan</li></a>
                    <a href='/paymentmethod'> <li>Payment Method</li></a>
                      
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
      <li><a class="menu__item" href="/">Home</a></li>
      <li><a class="menu__item" href="/service">Services</a></li>
      <li><a class="menu__item" href="/">About</a>
        <ul>
            <li><a class="aboutus_hamburger-menu" href="/about">About Us</a></li>
            <li><a class="aboutus_hamburger-menu" href="/expertadviser">Expert Adviser</a></li>
            <li><a class="aboutus_hamburger-menu" href="/disclaimer">Disclaimer</a></li>
            <li><a class="aboutus_hamburger-menu" href="/faq">Faq</a></li>
        </ul>
    </li>
      <li><a class="menu__item" href="/historicalgraphics">Backtesting and live Results</a></li>
      <li><a class="menu__item" href="/price">Price and payment</a></li>
      <ul>
        <li><a class="aboutus_hamburger-menu" href="/price">Price Plan</a></li>
          </ul>
          <li><a class="menu__item" href="/contact">Contact Us</a></li>
          <li><a class="menu__item" href="/login">Login</a></li>

          <li><a class="menu__item" href="/register">Register</a></li>
        </ul>
        
        
  </div>  
  </>




	)
}


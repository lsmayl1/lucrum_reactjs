import React from 'react';
import about from '../assets/img/about.svg'
import logo from '../assets/img/Main-logo.svg'
export default function About(){
 return(
	    <>
          <div className="about">
        <h1>About Us</h1>
     
        <div className="about-info">
            <div className="about-img">
                <img src={logo} alt="logo"/>
            </div>
            <div>
            <p> As a FinTech team with more than 16 years trading and 25 years coding and development experience, we automate most popular trading strategies on the market. Our tools make the trading process less time consuming and consistently profitable.
            </p>
                <button className="readmore">Read More...</button>
            </div>
        </div>
    </div>
	    </>


 )
}

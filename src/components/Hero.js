import React from 'react';
import logo from '../assets/img/hero_logo.png'
import Discord from '../assets/img/social/Discord.svg'
import Facebook from '../assets/img/social/Facebook.svg'
import instagram from '../assets/img/social/instagram.svg'
import Telegram from '../assets/img/social/Telegram.svg'
import whatsapp from '../assets/img/social/whatsapp.svg'
import Youtube from '../assets/img/social/Youtube.svg'

import alpari from '../assets/img/partner/alpari.svg'
import bluesuisse_partner from '../assets/img/partner/bluesuisse_partner.png'
import fbs from '../assets/img/partner/fbs.svg'
import hfm_logo from '../assets/img/partner/hfm_logo.svg'
import skilling from '../assets/img/partner/skilling.svg'
import spectraglobal_partner from '../assets/img/partner/spectraglobal_partner.svg'
import swissquote from '../assets/img/partner/swissquote.png'
import XMLogo from '../assets/img/partner/XMLogo-2021_homepage.svg'

export default function Header(){
	return(
		<>
  
  <div class="hero">
            <div class="main_text">
                <h1>We Provide The Best<span> Expert Adviser</span> <br/>
                     To Help You Manage Your Accounts</h1>
            </div>
            <div class="try_demo_btn">
                <a href="#"> <button class="trydemo">Try Demo</button></a>
                <div class="social">
                  <ul class="social_list">
                  <li><a href="#"><img src={instagram} alt=""/></a></li>
                    <li><a href="#" id="rotate"><img src={Facebook} alt=""/></a></li>
                    <li><a href="#" id="rotate"><img src={Telegram} alt=""/></a></li>
                    <li><a href="#" id="rotate"><img src={whatsapp} alt=""/></a></li>
                    <li><a href="#" id="rotate"><img src={Discord} alt=""/></a></li>
                    <li><a href="#" id="rotate"><img src={Youtube} alt=""/></a></li>
                    
                  </ul>
              </div>
            </div>
           
           
            <div class="image_hero">
                <img src={logo} class="shake" alt=""/>
            </div>
          

        </div> 



        <div className="carolusel">
          <div className="logos">
            <div className="logos-slide">
              <a href="#"><img src={alpari} /></a>
              <a href="#">   <img src={fbs} /></a>
                <a href="#"><img src={swissquote} /></a>
                  <a href="#"><img src={skilling} /></a>
                    <a href="#"><img src={bluesuisse_partner} /></a>
                      <a href="#"><img src={hfm_logo} /></a>
                        <a href="#"> <img src={XMLogo} /></a>
                          <a href="#"> <img src={spectraglobal_partner} /></a>
            </div>
      
            <div className="logos-slide">
              <a href="#"><img src={alpari} /></a>
              <a href="#">   <img src={fbs} /></a>
                <a href="#"><img src={swissquote} /></a>
                  <a href="#"><img src={skilling} /></a>
                    <a href="#"><img src={bluesuisse_partner} /></a>
                      <a href="#"><img src={hfm_logo} /></a>
                        <a href="#"> <img src={XMLogo}/></a>
                          <a href="#"> <img src={spectraglobal_partner} /></a>
            </div>
          </div>
      </div>
      </>




	)
}


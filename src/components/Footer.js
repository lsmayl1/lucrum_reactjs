import React from 'react';
import darklogo from "../assets/img/logo-dark.png"
export default function Footer(){
  return (
	<>
      <div class="container1">
        <div class="footer__wrapper">
          <div class="footer__top footer__top--style1">
            <div class="row gy-5 gx-4 linkfooter">
              <div class="col-md-6">
                <div class="footer__about">
                  <a href="/index.html" class="footer__about-logo"><img width="40%" src={darklogo}
                      alt="Logo"/></a>
                      <div class="banner__content-social">
                        <p></p>
                        <ul class="social54">
                          
                            <li class="social__item45">
                            <a   href="https://www.instagram.com/lucrumea/" class="social__link social__link--style2"><i class="fab fa-instagram"></i></a>
                          </li>
                          <li class="social__item45">
                            <a   href="https://t.me/lucrumea_FX_service" class="social__link social__link--style2"><i class="fab fa-telegram"></i></a>
                          </li>
                          <li class="social__item45">
                            <a   href="https://www.youtube.com/channel/UCq0G_paJ_MlSokUVEiS0AhA" class="social__link social__link--style2"><i class="fab fa-youtube"></i></a>
                          </li>
                          <li class="social__item45">
                            <a   href="https://www.facebook.com/groups/865104532053243/?ref=share&mibextid=NSMWBT" class="social__link social__link--style2 "><i class="fab fa-facebook-f"></i></a>
                          </li>
                          <li class="social__item45">
                            <a   href="https://discord.gg/h53NvcjA" class="social__link social__link--style2 "><i class="fab fa-discord"></i></a>
                          </li>
                          <li class="social__item45">
                            <a   href="https://whatsapp.com/channel/0029VaXiH8MKLaHxjtvhGD3H" class="social__link social__link--style2 "><i class="fab fa-whatsapp"></i></a>
                          </li>
                        </ul>
                      </div>
                  <p class="footer__about-moto ">We provide the best Expert Adviser to help you manage 
                    your accounts</p>
                </div>
              </div>
              <div class="col-md-2 col-sm-4 col-6">
                <div class="footer__links">
                  <div class="footer__links-tittle">
                    <h6>Quick links</h6>
                  </div>
                  <div class="footer__links-content">
                    <ul class="footer__linklist">
                      <li class="footer__linklist-item"> <a href="/about.html">About Us</a>
                      </li>
                      <li class="footer__linklist-item"> <a href="/services.html">Services</a> </li>
                      
                      <li class="footer__linklist-item"> <a href="/expertadvisor.html">Expert Adviser</a></li>
                    
                    <li class="footer__linklist-item"> <a href="/partner.html">Partners</a> </li>
                    
                
                  <li class="footer__linklist-item"> <a href="/disclaimer.html">Disclaimer</a> </li>
                 
                    </ul>
                  </div>
                </div>
    
              </div>
              <div class="col-md-2 col-sm-4 col-6 SupportFooter">
                <div class="footer__links">
                  <div class="footer__links-tittle">
                    <h6>Support</h6>
                  </div>
                  <div class="footer__links-content">
                    <ul class="footer__linklist">
                      <li class="footer__linklist-item"> <a href="/historicalgraphics.html">Backtesting Results</a></li>
                      <li class="footer__linklist-item"> <a href="/price.html">Price Plan</a></li>
                      <li class="footer__linklist-item"> <a href="/payment.html">Payment Method</a></li>
                      <li class="footer__linklist-item"> <a href="/faq.html">FAQs</a></li>
                      <li class="footer__linklist-item"> <a href="/contact.html">Contact Us</a> </li>
                    </ul>
                  </div>
                </div>
    
              </div>
            </div>
          </div>
          <div class="footer__bottom">
            <div class="footer__end">
              <div class="footer__end-copyright">
                <p class=" mb-0">© 2024 All Rights Reserved By <a href="/index.html"
                    target="_blank">LucrumEA</a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>




	</>
  );
};

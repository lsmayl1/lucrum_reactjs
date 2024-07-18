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
                <a href="/getstarted"> <button class="trydemo">Try Demo</button></a>
                <div class="social">
                  <ul class="social_list">
                    <li><a  target="_blank" href="https://www.instagram.com/lucrumea/"><img id="rotate"  src={instagram} alt=""/></a></li>
                    <li><a  target="_blank" href="https://www.facebook.com/groups/865104532053243/?ref=share&mibextid=NSMWBT" id="rotate"><img src={Facebook} alt=""/></a></li>
                    <li><a  target="_blank" href="https://t.me/lucrumea_FX_service" id="rotate"><img src={Telegram} alt=""/></a></li>
                    <li><a  target="_blank" href="https://whatsapp.com/channel/0029VaXiH8MKLaHxjtvhGD3H" id="rotate"><img src={whatsapp} alt=""/></a></li>
                    <li><a  target="_blank" href="https://discord.gg/h53NvcjA" id="rotate"><img src={Discord} alt=""/></a></li>
                    <li><a  target="_blank" href="https://www.youtube.com/channel/UCq0G_paJ_MlSokUVEiS0AhA" id="rotate"><img src={Youtube} alt=""/></a></li>
                    
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
              <a  target="_blank"  href="https://myreg.click/?partner_id=170005511"><img alt='alpari' src={alpari} /></a>
              <a  target="_blank" href="https://fbs.partners?ibl=442242&ibp=8458004"><img alt='fbs' src={fbs} /></a>
                <a  target="_blank" href="https://trade.swissquote.ch/signup/public/form/full/fx/com/individual?lang=en&partnerid=ec49cc61-2642-4e62-8421-68131f53dd15#full/fx/com/individual/step1"><img alt='swissquote' src={swissquote} /></a>
                  <a  target="_blank" href="https://skilling.com/?utm_source=a260f241-c9a1-4775-a464-8916116b689a&utm_medium=ib"><img alt='skilling' src={skilling} /></a>
                    <a  target="_blank" href="https://www.bluesuisse.com/adm.php?Adm=6708&RD=https://bluesuisse.com/register.php"><img alt='bluesuisse_partner' src={bluesuisse_partner} /></a>
                      <a  target="_blank" href="https://www.hfm.com/sv/en/?refid=332995"><img alt='hfm'  src={hfm_logo} /></a>
                        <a  target="_blank" href="http://clicks.pipaffiliates.com/c?c=212759&l=ru&p=0"> <img alt='XM' src={XMLogo} /></a>
                          <a  target="_blank" href="https://client.spectragloballtd.com/register?ibid=1617"> <img alt='spectraglobal_partner' src={spectraglobal_partner} /></a>
            </div>
      
            <div className="logos-slide">
              <a   target="_blank" href="https://myreg.click/?partner_id=170005511"><img alt='alpari'  src={alpari} /></a>
              <a  target="_blank" href="https://fbs.partners?ibl=442242&ibp=8458004">   <img alt='fbs' src={fbs} /></a>
                <a  target="_blank"  href="https://trade.swissquote.ch/signup/public/form/full/fx/com/individual?lang=en&partnerid=ec49cc61-2642-4e62-8421-68131f53dd15#full/fx/com/individual/step1"><img alt='swissquote' src={swissquote} /></a>
                  <a  target="_blank" href="https://skilling.com/?utm_source=a260f241-c9a1-4775-a464-8916116b689a&utm_medium=ib"><img alt='skilling' src={skilling} /></a>
                    <a target="_blank" href="https://www.bluesuisse.com/adm.php?Adm=6708&RD=https://bluesuisse.com/register.php"><img alt='bluesuisse_partner' src={bluesuisse_partner} /></a>
                      <a  target="_blank"  href="https://www.hfm.com/sv/en/?refid=332995"><img alt='hfm' src={hfm_logo} /></a>
                        <a  target="_blank" href="http://clicks.pipaffiliates.com/c?c=212759&l=ru&p=0"> <img alt='XM'  src={XMLogo}/></a>
                          <a  target="_blank"  href="https://client.spectragloballtd.com/register?ibid=1617"> <img alt='spectraglobal_partner' src={spectraglobal_partner} /></a>
            </div>
          </div>
      </div>
      </>




	)
}


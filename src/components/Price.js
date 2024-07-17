import React from 'react';

export default function Price(){
  function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
    
    for (var i = 0; i < text1.length; i++) {
     
      if (checkBox.checked == true) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      } else if (checkBox.checked == false) {
   
      text1[i].style.display = "block";
      text2[i].style.display = "none";
      }
    }
    }
    check();
	return(
		<>
<div className="top">
        <h1>Plans & Pricing</h1>
        <div className="toggle-btn">
          <span className='monthly' >Monthly</span>
          <label className="switch">
             <input type="checkbox" id="checbox" onClick={check}  />  
            <span className="slider round"></span>
          </label>
          <span className='monthly' >Annually</span></div>
      </div>
  
      <div className="package-container">
        <div className="packages">
          <h1>Expert Adviser</h1>
          <h2 className="text1">9.99</h2>
          <h2 className="text2">10.000</h2>
          <ul className="list">
            <li className="first">2000 Subscribers</li>
            <li>12,000 Emails/month</li>
            <li>Multi-User Accounts</li>
            <li>Email Support</li>
          </ul>
          <a href="#" className="button button1">Start Now</a>
        </div>
        <div className="packages">
          <h1>Robot</h1>
          <h2 className="text1">19.99</h2>
          <h2 className="text2">239.99</h2>
          <ul className="list">
            <li className="first">Basic +</li>
            <li>Landing Pages</li>
            <li>Pop-up Forms</li>
            <li>Premium Support</li>
          </ul>
          <a href="#" className="button button2">Start Now</a>
        </div>
        <div className="packages">
          <h1>SIGNAL</h1>
          <h2 className="text1">29.99</h2>
          <h2 className="text2">359.99</h2>
          <ul className="list">
            <li className="first">Professional +</li>
            <li>Marketing Automation</li>
            <li>Instagram Ads</li>
            <li>Facebook Ads</li>
          </ul>
          <a href="#" className="button button3">Start Now</a>
        </div>
      
		</div>
</>


	)
}

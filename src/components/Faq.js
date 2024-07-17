import React from 'react';


export default function Faq(){
  var  button1 = document.getElementById('accordion-button-1');
	var  button2 = document.getElementById('accordion-button-2');
	var  button3 = document.getElementById('accordion-button-3');
	var  button4 = document.getElementById('accordion-button-4');
	var  button5 = document.getElementById('accordion-button-5');
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var count5 = 0;
	function OnClick1(){
		
		count1++;
		button1.setAttribute('aria-expanded', 'true');
		if (count1 %2 == 0)
			button1.setAttribute('aria-expanded', 'false');
		

	}
	function OnClick2(){
		count2++;
		button2.setAttribute('aria-expanded', 'true');
		if (count2 %2 == 0)
			button2.setAttribute('aria-expanded', 'false');

	}	
	function OnClick3(){
		count3++;
		button3.setAttribute('aria-expanded', 'true');
		if (count3 %2 == 0)
			button3.setAttribute('aria-expanded', 'false');

	}	
	function OnClick4(){
		count4++;
		button4.setAttribute('aria-expanded', 'true');
		if (count4 %2 == 0)
			button4.setAttribute('aria-expanded', 'false');

	}
	function OnClick5(){
		count5++;
		button5.setAttribute('aria-expanded', 'true');
		if (count5 %2 == 0)
			button5.setAttribute('aria-expanded', 'false');

	}
 
  
    return (
		<>
	          <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button  id="accordion-button-1" onClick={OnClick1}   aria-expanded="false"><span className="accordion-title">Why is the moon sometimes out during the day?</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2"onClick={OnClick2}  aria-expanded="false"><span className="accordion-title">Why is the sky blue?</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-3" onClick={OnClick3} aria-expanded="false"><span className="accordion-title">Will we ever discover aliens?</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-4"onClick={OnClick4} aria-expanded="false"><span className="accordion-title">How much does the Earth weigh?</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-5" onClick={OnClick5}  aria-expanded="false"><span className="accordion-title">How do airplanes stay up?</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
          </div>
        </div>
        <div className="faq_image">
          <img src="assets/img/1.png" alt=""/>
        </div>
     
	</>
  );
};

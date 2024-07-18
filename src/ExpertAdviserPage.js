import React from 'react';
import Header from './components/Header'
import expertimg from './assets/img/3.png'
export default function ExpertAdviserPage(){
  return (
	<>
	<div className='container'>
	  <Header/>
	  <ExpertAdviserCard/>
	  </div>
	</>
  );
};


function ExpertAdviserCard(){
	return (
	  <>
		<div className="expertpage">
			<div className='expertpageimg'>
				<img src={expertimg} />
			</div>
			<div className='experttitle'>
			<div class="about__content-inner" >
                <h4 class="Howit">How it works</h4>
                <h6 class="mt-25 fntsz">Running as trading robot:</h6>
                <p class="mb-10">The EA uses strong reversal candlestick patterns and checks it with RSI levels. If
                  conditions met it opens the trade with TP and SL. If the signal fails it uses the grid to close order
                  in predetermined profit (close on profit). It should be run on a Demo account and copied (by trade
                  copier) to the real account, because candle accuracy on a demo account is more accurate than on real.
                  It works on each time frame separately.</p>
                <h6 class="mt-25 fntsz"> Running as EA:
                </h6>
                <p class="mb-0">EA should be used as a signal provider. It gives alert/notification when the reverse situation appears
                  on the time frame where it works.</p>
                <p class="mb-20 padt" > <b></b></p>
                <a class="morebtnn"  href="/contact">Contact Us</a>
              </div>
			</div>
		</div>
	  </>
	);
  };
  
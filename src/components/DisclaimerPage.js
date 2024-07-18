import React from 'react';
import Header from './components/Header'
export default function DisclaimerPage(){
  return (
	<>\
	<div className=''>
	  <Header/>
	 < DisclaimerPagePlace/>	
	  </div>
	</>
  );
};

function DisclaimerPagePlace(){
	return (
		<>
		    <div class="team team--details padding-top padding-bottom bg-color-3">
    <div class="container">
      <div class="team__wrapper">
        <div class="row g-5 align-items-center justify-content-center" style="text-align: justify;">
          <div class="col-md-7">
            <div class="team__content">
              <h3 class="text-center">Disclaimer</h3>
              <p class="designation mt-15">Trading FX or CFDs on leverage is high risk and your losses could exceed deposits.
                LucrumEA.com has advertising and affiliate relationships with some of the companies mentioned on this site and may be compensated if readers follow links and sign up. We are committed to the fair handling of reviews and posts regardless of such relations.
              </p>
              <p class="info">Disclaimer - Trading foreign exchange on margin carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to invest in foreign exchange you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading, and seek advice from an independent financial advisor if you have any doubts.</p>
              <p>
                The purchase, sale or advice regarding a currency can only be performed by a licensed Broker/Dealer. Neither us, nor our affiliates or associates involved in the production and maintenance of these products or this site, is a registered Broker/Dealer or Investment Advisor in any State or Federally-sanctioned jurisdiction. All purchasers of products referenced at this site are encouraged to consult with a licensed representative of their choice regarding any particular trade or trading strategy. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this website. The past performance of any trading system or methodology is not necessarily indicative of future results.</p>
              <p>
                Clearly understand this: Information contained in this product is not an invitation to trade any specific investments. Trading requires risking money in pursuit of future gain. That is your decision. Do not risk any money you cannot afford to lose. This document does not take into account your own individual financial and personal circumstances. It is intended for educational purposes only and NOT as individual investment advice. Do not act on this without advice from your investment professional, who will verify what is suitable for your particular needs & circumstances. Failure to seek detailed professional personally tailored advice prior to acting could lead to you acting contrary to your own best interests & could lead to losses of capital.
              </p>
              <p>*<span style="color: blue;">CFTC RULE 4.41</span> - HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS HAVE CERTAIN LIMITATIONS. UNLIKE AN ACTUAL PERFORMANCE RECORD, SIMULATED RESULTS DO NOT REPRESENT ACTUAL TRADING. ALSO, SINCE THE TRADES HAVE NOT BEEN EXECUTED, THE RESULTS MAY HAVE UNDER-OR-OVER COMPENSATED FOR THE IMPACT, IF ANY, OF CERTAIN MARKET FACTORS, SUCH AS LACK OF LIQUIDITY. SIMULATED TRADING PROGRAMS IN GENERAL ARE ALSO SUBJECT TO THE FACT THAT THEY ARE DESIGNED WITH THE BENEFIT OF HINDSIGHT. NO REPRESENTATION IS BEING MADE THAT ANY ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFIT OR LOSSES SIMILAR TO THOSE SHOWN.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
		</>
	  );
}
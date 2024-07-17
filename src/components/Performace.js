import React from 'react';

export default function Performance(){
  return (
	<>
	    
<div className="continer_45">
<h6 className="title_45">Backtesting Results</h6>
<div className='backtestingitems'>
	  <div className="select-wrapper_45" onclick="toggleDropdown(event)">
		<select id="dropdown1">
		  <option value="">Entry Type</option>
		  <option value="Aggressive">Aggressive</option>
		  <option value="Conservative">Conservative</option>
		  </select>
	  </div>
		<div className="select-wrapper_45" onclick="toggleDropdown(event)">
		<select id="dropdown2">
		  <option value="">Instrument</option>
      	  <option value="AUDUSD">AUD/USD</option>
		  <option value="EURUSD">EUR/USD</option>
		  <option value="GBPUSD">GBP/USD</option>
		  <option value="NZDUSD">NZD/USD</option>
       	  <option value="USDCAD">USD/CAD</option>
          <option value="USDCHF">USD/CHF</option>
          <option value="XAUUSD">XAU/USD</option>
          <option value="EURCHF">EUR/CHF</option>
          <option value="EURCAD">EUR/CAD</option>
          <option value="EURGBP">EUR/GBP</option>
		</select>
	<div className="select-wrapper_45" onclick="toggleDropdown(event)">
			<select id="dropdown3">
			  <option value="">Time Frame</option>
			  <option value="M15">M15</option>
			  <option value="M30">M30</option>
			  <option value="H1">H1</option>
        	  <option value="H4">H4</option>
			</select>
		  </div>
	  </div>
	<button  className="button_results" onclick="openLink()">Show Result</button>
	</div>
	</div>
	<div class="backtest_body"></div>

	</>
  );
};

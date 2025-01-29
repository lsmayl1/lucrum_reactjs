import React from "react";

export const AboutUs = () => {
  return (
    <div className="container mt-[80px]">
      <div className="flex gap-10 flex-col items-center justify-center">
        <h1 className="text-center text-[40px] font-poppins">AboutUs</h1>
        <div className="flex gap-5 justify-center items-center ">
          <img src="/img/Main-logo.svg" alt="" className="w-1/3" />
          <div className="w-3/4 flex flex-col gap-5">
            <p className="font-poppins text-[20px] text-[#323030]">
              As a FinTech team with more than 16 years trading and 25 years
              coding and development experience, we automate most popular
              trading strategies on the market. Our tools make the trading
              process less time consuming and consistently profitable.
            </p>
			<button className="text-center py-2 rounded text-[20px] bg-slate-500 text-white w-1/4"> Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

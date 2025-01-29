import React from "react";
import "../assets/css/style.css";

export default function Services() {
  const services = [
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z" />
        </svg>
      ),
    },
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z" />
        </svg>
      ),
    },
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5l0 132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400l320 0 28.9-159c2.1-11.3 3.1-22.8 3.1-34.3l0-14.7C416 86 330 0 224 0L83.8 0C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512l370.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432 64 432 22.6 473.4z" />
        </svg>
      ),
    },
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M576 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352c0-17.7 14.3-32 32-32zM352 224l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32zM96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
        </svg>
      ),
    },
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
        </svg>
      ),
    },
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
        </svg>
      ),
    },
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z" />
        </svg>
      ),
    },
    {
      name: "Expert Adviser",
      desc: "Our EA gives the exact entry signals based on the given settings",
      src: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className="container gap-10 flex flex-col mt-[80px] justify-center items-center">
        <h1 className="text-[36px]">Services</h1>
        <div className="flex">
          <ul className="flex gap-5 flex-wrap justify-center">
            {services.map((servics, index) => (
              <li
                key={index}
                className="rounded-lg shadow-xl flex flex-col justify-center items-center py-10 px-20 gap-5"
              >
                <div className="flex justify-center flex-col items-center bg-00FF66 rounded-full p-5 ">
                  <span className="w-10">{servics.src}</span>
                </div>
                <div>
                  <h1 className="text-[20px] font-poppins font-semibold text-00FF66">
                    {servics.name}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[15px] max-w-[200px] text-center font-poppins font-semibold text-black">
                    {servics.desc}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

{
  /* <section>
		
<div className="row1">
  <h2 className="section-heading"> Services</h2>
</div>
<div className="row">
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-robot"></i>
	  </div>
	  <h3>Expert Adviser</h3>
	  <p>
		Our EA gives the exact entry signals based on the given settings
	  </p>
	</div>
  </div>
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-robot"></i>
	  </div>
	  <h3>Trading Robot</h3>
	  <p>Our robot trades automatically based on given settings</p>
	</div>
  </div>
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-chess-knight"></i>
	  </div>
	  <h3>Strategy</h3>
	  <p>
		Strategy which used to create the robot and EA which may help
		you to trade manually
	  </p>
	</div>
  </div>
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-signal"></i>
	  </div>
	  <h3>Signal</h3>
	  <p>
		We provide signals to enter the market when shooting star/hammer
		candle sticks are confirmed with RSI levels
	  </p>
	</div>
  </div>
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-terminal"></i>
	  </div>
	  <h3>EA coding</h3>
	  <p>For coding the any strategy please contact us</p>
	</div>
  </div>
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-user"></i>
	  </div>
	  <h3>Account management with profit sharing </h3>
	  <p>For the account management please contact us</p>
	</div>
  </div>
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-copy"></i>
	  </div>
	  <h3>Trade Copy </h3>
	  <p>We give you investor access to our master account</p>
	</div>
  </div>
  <div className="column">
	<div className="card">
	  <div className="icon-wrapper">
		<i className="fa-solid fa-book"></i>
	  </div>
	  <h3>Online Training </h3>
	  <p>
		You will get 3 hours online traning and our Expert Adviser as a
		bonus
	  </p>
	</div>
  </div>
</div>
</section> */
}

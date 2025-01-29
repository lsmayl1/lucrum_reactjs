import React from "react";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function Header() {
  return (
    <div className="container py-10 flex justify-between items-center">
      <div>
        <img src="/img/Main-logo.svg" />
      </div>
      <div className="mx-auto">
        <ul className="flex gap-6 font-poppins font-medium text-[24px]">
          <li>Home</li>
          <li className="relative">Services</li>
          <li className=" group flex items-center relative">
            <div>About</div>
            <span className=" items-center ">
              <MdOutlineKeyboardArrowDown />
              <ul className="absolute left-0 top-full group-hover:block hidden cursor-pointer bg-slate-100 rounded-[10px]  space-y-2 text-center items-center gap-2 text-[18px]">
                <li className="hover:bg-gray-600 w-full  hover:text-white px-6 py-3">
                  About Us
                </li>
                <li className="hover:bg-gray-600 w-full  hover:text-white px-5 py-3 truncate">
                  Expert Adviser
                </li>
                <li className="hover:bg-gray-600 w-full  hover:text-white px-5 py-3 truncate">
                  Disclaimer
                </li>
                <li className="hover:bg-gray-600 w-full  hover:text-white px-5 py-3">
                  FAQ
                </li>
              </ul>
            </span>
          </li>
          <li>Performance</li>
          <li className=" group flex items-center relative">
            <div>Pricing</div>
            <span className=" items-center ">
              <MdOutlineKeyboardArrowDown />
              <ul className="absolute left-0 top-full group-hover:block hidden cursor-pointer bg-slate-100 rounded-[10px]  space-y-2 text-center items-center gap-2 text-[18px]">
                <li className="hover:bg-gray-600 w-full  hover:text-white px-6 py-3">
                  Plan{" "}
                </li>
                <li className="hover:bg-gray-600 w-full  hover:text-white px-5 py-3 truncate">
                  Payment Method
                </li>
              </ul>
            </span>
          </li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

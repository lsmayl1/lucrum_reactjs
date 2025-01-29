import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Header() {
  const partners = [
    { name: "Alpari", src: "../assets/img/partner/alpari.svg" },
  ];
  return (
    <div className="container mt-[80px]">
      <div className="flex justify-between">
        <div className="p-10 flex flex-col gap-10">
          {" "}
          <h1 className="text-[32px]">
            We Provide The Best Expert Adviser 
            <br />
             To Help You Manage Your Accounts
          </h1>
          <button className="text-center w-1/3 p-3 rounded-[10px] bg-00cc99">
            Try Demo
          </button>
          <div>
            <ul className="flex gap-2">
              <li className="">
                <IoLogoInstagram className="size-8" />
              </li>
              <li className="">
                <FaFacebook className="size-8" />
              </li>

              <li className="">
                <FaTelegram className="size-8" />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="/img/hero_logo.png" alt="" />
        </div>
      </div>
    </div>
  );
}

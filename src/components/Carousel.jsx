import React from "react";

export const Carousel = () => {
  const partners = [
    { name: "Alpari", src: "/img/partner/alpari.svg" },
    { name: "Bluesuisse", src: "/img/partner/bluesuisse_partner.png" },
    { name: "Hfm", src: "/img/partner/hfm_logo.svg" },
    { name: "Skilling", src: "/img/partner/skiling.svg" },
    { name: "Skilling", src: "/img/partner/skiling.svg" },
    { name: "spectraglobal", src: "/img/partner/spectraglobal_partner.svg" },
    { name: "swissquote", src: "/img/partner/swissquote.png" },
    { name: "Xm", src: "/img/partner/Xm.svg" },
  ];
  return (
    <div className="container mt-[80px]  ">
      <div className="flex justify-center ">
        <ul className="flex items-center gap-10  ">
          {partners.map((partners, index) => (
            <li key={index}>
              <img src={partners.src} className="w-40" alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

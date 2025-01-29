import Header from "../components/Header";
import Hero from "../components/Hero";

import "../assets/css/index.css";
import { Carousel } from "../components/Carousel";
import { AboutUs } from "../components/AboutUs";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        <Carousel />
        <AboutUs />
        <Services />
        <Pricing />
        {children}
      </body>
    </html>
  );
}

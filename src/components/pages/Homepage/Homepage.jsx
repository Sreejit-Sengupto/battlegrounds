import React from "react";
import HeroSection from "./HeroSection";
import SubHero from "./SubHero";
import NewsSection from "./NewsSection";
import Carousel from "./Carousel/Carousel";
import DownloadSection from "./DownloadSection";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <SubHero />
      <NewsSection />
      <Carousel />
      <DownloadSection />
    </>
  );
}

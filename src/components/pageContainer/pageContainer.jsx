import React from "react";
import { Work } from "../about-work/work";
import { Header } from "../header/header";
import { NavTop } from "../navTop/navTop";
import { Bam } from "../bam/bam";
import Solve from "../solve-problem/solve";
import WorkMap from "../workMap/workMap";
import InstagramFeed from "../instagramFeed/instagramFeed";
import ReactMultiCaorusel from "../ReactMultiCarousel/ReactMultiCarousel";
import Calculator from "../calculator/Calculator"

const PageContainer = () => {
  return (
    <>
      <NavTop />
      <Header />
      <Bam />
      <Work />
      <Solve />
      <WorkMap />
      <ReactMultiCaorusel/>
      <InstagramFeed />
      <Calculator/>
    </>
  );
};

export default PageContainer;

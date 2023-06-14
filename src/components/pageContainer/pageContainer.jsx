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
import SpecialOffer  from '../SpecialOffer/SpecialOffer'
import ProyektExample from "../ProyektExample/ProyektExample";

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
      <SpecialOffer/>
      <ProyektExample/>
    </>
  );
};

export default PageContainer;

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
import Partnyorlar from "../partnyorlar/partnyorlar";
import Vedio from "../videoAll/Videoo";
import NoisePrice from "../NoisePrice/NoisePrice";
import Accordion from "../Accordion/Accordion";
import FormValidation from "../FormValidation/FormValidation";
import Footer from "../Footer/Footer";
import FormMap from "../FormValidation/FormMap/FormMap";

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
      <Partnyorlar/>
      <Vedio/>
      <NoisePrice/>
      <Accordion/>
      <FormValidation/>
      <Partnyorlar/>
      <FormMap/>
      <Footer/>
    </>
  );
};

export default PageContainer;

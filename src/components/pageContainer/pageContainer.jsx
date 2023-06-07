import React from "react";
import { Work } from "../about-work/work";
import { Header } from "../header/header";
import { NavTop } from "../navTop/navTop";
import { Bam } from "../bam/bam";
import Solve from "../solve-problem/solve";

const   PageContainer = () => {
  return (
    <>
      <NavTop />
      <Header />
      <Bam />
      <Work />
      <Solve />
    </>
  );
};

export default PageContainer;

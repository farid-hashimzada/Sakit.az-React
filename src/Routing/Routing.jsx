import React from "react";
import About from "../Pages/About";
import HowWork from "../Pages/HowWork";
import HowWorkWe from "../Pages/HowWorkWe";
import Discount from "../Pages/Discount";
import Project from "../Pages/Project";
import Video from "../Pages/Video";
import Price from "../Pages/Price";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/HowWorkWe" element={<HowWork />} />
        <Route path="/ HowWork" element={<HowWorkWe />} />
        <Route path="/Discount" element={<Discount />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Price" element={<Price />} />
      </Routes>
    </>
  );
};

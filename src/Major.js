import React from "react";
import Navbar from "./modules/navbar";
import Banner from './modules/banner'
import Application from './modules/application';
import Approach from "./modules/approach";
import Architecture from './modules/architecture';
import Code from './modules/code';
import FutureScope from "./modules/futureScope";
import Footer from "./modules/footer";
import "./index.css";

const Major = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Application/>
      <Approach />
      <Architecture/>
      <Code/>
      <FutureScope/>
      <Footer/>
    </>
  );
};
export default Major;

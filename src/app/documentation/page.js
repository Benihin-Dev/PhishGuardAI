import React from "react";
import Header from "../components/Header";
import Documentaion from "../components/Documentation";
import Footer from "../components/Footer";

export default function page() {
  return (
    <div className=" w-full ">
      <div className=" bg-black fixed left-0 top-0 w-full">
        <Header />
      </div>
      <Documentaion />
      <Footer />
    </div>
  );
}

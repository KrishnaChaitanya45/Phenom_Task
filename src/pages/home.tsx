"use client";
import AccordianAndGraph from "@/components/AccordianAndGraph/AccordianAndGraph";
import Banner from "@/components/Banner/Banner";
import CarousalContainer from "@/components/CarousaContainer/CarousalContainer";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import MultiCardContainer from "@/components/MultiCardContainer/MultiCardContainer";
import Navbar from "@/components/Navbar/Navbar";
import PhenomInAction from "@/components/PhenomInAction/PhenomInAction";
import Quote from "@/components/Quote/Quote";
import Resources from "@/components/Resources/Resources";
import React from "react";
import type { Metadata } from "next";
import { RootState, useAppSelector } from "@/redux/store";

export const metadata: Metadata = {
  title: "Recruiters | Phenom People",
};
const Home = () => {
  const data = useAppSelector((state: RootState) => state.data);
  console.log(data);
  return (
    <div style={{ background: "black" }}>
      <Banner />
      <Navbar />
      <Hero title="" subtitle="" />
      <Quote />
      <AccordianAndGraph />
      <MultiCardContainer />
      <Resources />
      <CarousalContainer />
      <PhenomInAction />
      <Footer />
    </div>
  );
};

export default Home;

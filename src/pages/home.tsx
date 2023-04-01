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
import React, { useEffect } from "react";
import type { Metadata } from "next";
import { RootState, useAppSelector } from "@/redux/store";
import Aos from "aos";
import "aos/dist/aos.css";
export const metadata: Metadata = {
  title: "Recruiters | Phenom People",
};
const Home = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });

  const data = useAppSelector((state: RootState) => state.data);
  const homeData = data.map((item) => {
    return item.id === "home" ? item : null;
  })[0];
  console.log(homeData);
  return (
    <div style={{ background: "black", width: "100%", overflowX: "hidden" }}>
      <Banner />
      <Navbar />
      <Hero
        title={homeData?.hero.title}
        subtitle={homeData?.hero.subtitle}
        dropdown="recruiters"
      />
      <div data-aos="fade-up" data-aos-duration="5000">
        <Quote />
      </div>
      <div data-aos="fade-down-right" data-aos-duration="5000">
        <AccordianAndGraph questions={homeData?.thirdSection.questions} />
      </div>
      <div data-aos="fade-down-left" data-aos-duration="5000">
        <MultiCardContainer />
      </div>
      <div data-aos="fade-down" data-aos-duration="5000">
        <Resources />
      </div>
      <div data-aos="fade" data-aos-duration="5000">
        <CarousalContainer />
      </div>
      <div data-aos="fade-up" data-aos-duration="5000">
        <PhenomInAction />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

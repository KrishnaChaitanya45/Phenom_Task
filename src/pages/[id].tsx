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
import React, { useEffect, useState } from "react";
import type { Metadata } from "next";
import Aos from "aos";
import "aos/dist/aos.css";
import { RootState, useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";
export const metadata: Metadata = {
  title: "Recruiters | Phenom People",
};
const DynamicPage = () => {
  const [location, setLocation] = useState<string | undefined>("");
  const [homeData, setHomeData] = useState<any>(null);
  const data = useAppSelector((state: RootState) => state.data);
  useEffect(() => {
    console.log(window.location.pathname.split("/")[1]);
    const homeData = data.map((item) => {
      if (item.id === window.location.pathname.split("/")[1]) {
        return item;
      }
    });
    console.log(homeData);
    homeData.map((item) => {
      if (item !== null && item !== undefined) {
        setHomeData(item);
      } else {
        return;
      }
    });
    console.log(homeData);
  }, []);
  //   if (location !== undefined) {
  //     setLocationString(location.toString());
  //   }
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div style={{ background: "black", width: "100%", overflowX: "hidden" }}>
      <Banner />
      <Navbar />
      <Hero
        title={homeData?.hero.title}
        subtitle={homeData?.hero.subtitle}
        dropdown={homeData?.id}
        image={homeData?.hero.image}
      />
      <div data-aos="fade-up" data-aos-duration="5000">
        <Quote quote={homeData?.quote} />
      </div>
      <div data-aos="fade-down" data-aos-duration="5000">
        <AccordianAndGraph
          title={homeData?.thirdSection.title}
          questions={homeData?.thirdSection.questions}
          image={homeData?.thirdSection.image}
        />
      </div>
      <div data-aos="fade-up-right" data-aos-duration="5000">
        <MultiCardContainer />
      </div>
      <div data-aos="fade-down-right" data-aos-duration="5000">
        <Resources article={homeData?.fifthSection} />
      </div>
      <div data-aos="fade-down-left" data-aos-duration="5000">
        <CarousalContainer />
      </div>
      <div data-aos="fade-up-left" data-aos-duration="5000">
        <PhenomInAction />
      </div>
      <Footer />
    </div>
  );
};

export default DynamicPage;

"use client";
import Image from "next/image";
import React from "react";
import styles from "./CarousalContainer.module.css";
const CarousalContainer = () => {
  const [carousalSlide, setCarousalSlide] = React.useState<string>("");
  const [firstCardHover, setFirstCardHover] = React.useState<boolean>(false);
  const [secondCardHover, setSecondCardHover] = React.useState<boolean>(false);
  const [thirdCardHover, setThirdCardHover] = React.useState<boolean>(false);
  const [fourCardHover, setFourCardHover] = React.useState<boolean>(false);
  const slideRight = () => {
    if (carousalSlide !== "left") {
      const carousal = document.getElementById("carousal");
      console.log(carousal);
      setCarousalSlide("left");
      if (carousal) {
        carousal.style.left = "0%";
        console.log("done");
      }
    }
  };
  const slideLeft = () => {
    if (carousalSlide !== "right") {
      const carousal = document.getElementById("carousal");
      console.log(carousal);
      setCarousalSlide("right");
      if (carousal) {
        carousal.style.left = "-30%";
        console.log("done");
      }
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.mainHeading}>How recruiters experience Phenom</h1>
        <div
          style={{ display: "flex", gap: "1vw" }}
          className={styles.arrowsContainer}
        >
          <img
            src="/asessts/arrow.svg"
            alt="left arrow"
            width={20}
            height={20}
            className={styles.arrowOne}
            onClick={() => slideRight()}
          />
          <img
            src="/asessts/arrow.svg"
            alt="left arrow"
            width={20}
            height={20}
            className={styles.arrowTwo}
            onClick={() => slideLeft()}
          />
        </div>
      </div>
      <div className={styles.carousalContainer}>
        <div className={styles.carousal} id="carousal">
          <div
            className={styles.card}
            onMouseEnter={(e) => {
              setFirstCardHover(true);
            }}
            onMouseLeave={(e) => {
              setFirstCardHover(false);
            }}
          >
            <div className={styles.cardHeading}>
              <div className={styles.imageContainer}>
                {firstCardHover ? (
                  <img
                    src="/asessts/Recruiters_front_1.png"
                    alt="Recruiters_front_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                ) : (
                  <img
                    src="/asessts/Recruiters_side_1.png"
                    alt="Recruiters_side_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                )}
              </div>
              <h1>Candidate Experience</h1>
              <p>Candidates find and choose you faster.</p>
            </div>
          </div>
          <div
            className={styles.card}
            onMouseEnter={(e) => {
              setSecondCardHover(true);
            }}
            onMouseLeave={(e) => {
              setSecondCardHover(false);
            }}
          >
            <div className={styles.cardHeading}>
              <div className={styles.imageContainer}>
                {secondCardHover ? (
                  <img
                    src="/asessts/Recruiter_front_2.png"
                    alt="Recruiters_side_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                ) : (
                  <img
                    src="/asessts/Recruiter_side_2.png"
                    alt="Recruiters_side_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                )}
              </div>
              <h1>Recruiter Experience</h1>
              <p>Recruiters become wildly productive</p>
            </div>
          </div>
          <div
            className={styles.card}
            onMouseEnter={(e) => {
              setThirdCardHover(true);
            }}
            onMouseLeave={(e) => {
              setThirdCardHover(false);
            }}
          >
            <div className={styles.cardHeading}>
              <div className={styles.imageContainer}>
                {thirdCardHover ? (
                  <img
                    src="/asessts/Carousal_3_after.png"
                    alt="Recruiters_side_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                ) : (
                  <img
                    src="/asessts/Carosual_3_before.png"
                    alt="Recruiters_side_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                )}
              </div>
              <h1>Artificial Intelligence</h1>
              <p>The AI that powers an intelligent talent experience</p>
            </div>
          </div>
          <div
            className={styles.card}
            onMouseEnter={(e) => {
              setFourCardHover(true);
            }}
            onMouseLeave={(e) => {
              setFourCardHover(false);
            }}
          >
            <div className={styles.cardHeading}>
              <div className={styles.imageContainer}>
                {fourCardHover ? (
                  <img
                    src="/asessts/Carousal_last_before.png"
                    alt="Recruiters_side_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                ) : (
                  <img
                    src="/asessts/Carousal_last_after.png"
                    alt="Recruiters_side_1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                )}
              </div>
              <h1>Talent Experience Management</h1>
              <p>
                The AI powered platform to hire, retain, and develop talent
                faster
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarousalContainer;

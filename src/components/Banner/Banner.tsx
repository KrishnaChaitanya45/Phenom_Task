import Image from "next/image";
import React from "react";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bannerContainer}>
        <Image
          src="/asessts/BannerThread1.svg"
          alt="Phenom Logo"
          width={200}
          height={200}
          className={styles.upperStrip}
        />
        <div className={styles.imageDiv}>
          <Image
            src="/asessts/IAM_logo.png"
            alt="Phenom Logo"
            width={200}
            height={200}
            className={styles.bannerImage}
          />
        </div>
        <div className={styles.bannerTextContainer}>
          <span>In Person.</span>
          <span>In Philadelphia.</span>
          <p>MARCH 28-30</p>
        </div>
        <div className={styles.bannerButtonContainer}>
          <button className={styles.bannerButton}>
            <p>Register Now &rarr;</p>{" "}
          </button>
        </div>
      </div>
      <Image
        src="/asessts/buildings.svg"
        alt="Phenom Logo"
        width={400}
        height={400}
        className={styles.buildings}
      />
    </div>
  );
};

export default Banner;

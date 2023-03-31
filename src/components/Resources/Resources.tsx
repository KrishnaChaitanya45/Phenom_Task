import Image from "next/image";
import React from "react";
import styles from "./Resource.module.css";
const Resources = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Resources</h1>
      <button className={styles.navbarButtonOne} id="navbar-button">
        View all
      </button>
      <div className={styles.cardsContainer}>
        <div className={styles.upperParentContainer}>
          <div className={styles.firstUpperChildContainer}>
            <div className={styles.firstUpperChildCard}>
              <div className={styles.firstUpperChildCardImageContainer}>
                <Image
                  src="/asessts/man-smiling.webp"
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>Customer Story. 6 min read</span>
                <h1>Johnsonville's Recruiter Handbook for Hyper Hiring</h1>
                <p>March 02, 2022</p>
              </div>
            </div>
          </div>
          <div className={styles.secondUpperChildContainer}>
            <div className={styles.secondUpperChildCard}>
              <div className={styles.firstUpperChildCardImageContainer}>
                <Image
                  src="/asessts/man-smiling.webp"
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>Customer Story. 6 min read</span>
                <h1>Johnsonville's Recruiter Handbook for Hyper Hiring</h1>
                <p>March 02, 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lowerParentContainer}>
          <div className={styles.firstLowerChildContainer}>
            <div className={styles.firstLowerChildCard}>
              <div className={styles.firstUpperChildCardImageContainer}>
                <Image
                  src="/asessts/man-smiling.webp"
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>Customer Story. 6 min read</span>
                <h1>Johnsonville's Recruiter Handbook for Hyper Hiring</h1>
                <p>March 02, 2022</p>
              </div>
            </div>
          </div>
          <div className={styles.secondLowerChildContainer}>
            <div className={styles.secondLowerChildCard}>
              <div className={styles.firstUpperChildCardImageContainer}>
                <Image
                  src="/asessts/man-smiling.webp"
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>Customer Story. 6 min read</span>
                <h1>Johnsonville's Recruiter Handbook for Hyper Hiring</h1>
                <p>March 02, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

import Image from "next/image";
import React from "react";
import styles from "./Resource.module.css";
interface Props {
  article?: article[];
}
interface article {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  date: string;
}
const Resources = (props: Props) => {
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
                <img
                  src={
                    props.article
                      ? props.article[0].image
                      : "/asessts/recruiters/article_one.webp"
                  }
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>
                  {props.article
                    ? props.article[0].subtitle
                    : "Customer Story. 6 min read"}
                </span>
                <h1>
                  {props.article
                    ? props.article[0].title
                    : "Johnsonville's Recruiter Handbook for Hyper Hiring"}
                </h1>
                <p>
                  {props.article ? props.article[0].date : "March 02, 2022"}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.secondUpperChildContainer}>
            <div className={styles.secondUpperChildCard}>
              <div className={styles.firstUpperChildCardImageContainer}>
                <img
                  src={
                    props.article
                      ? props.article[1].image
                      : "/asessts/recruiters/article_one.webp"
                  }
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>
                  {props.article
                    ? props.article[1].subtitle
                    : "Customer Story. 6 min read"}
                </span>
                <h1>
                  {props.article
                    ? props.article[1].title
                    : "Johnsonville's Recruiter Handbook for Hyper Hiring"}
                </h1>
                <p>
                  {props.article ? props.article[1].date : "March 02, 2022"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lowerParentContainer}>
          <div className={styles.firstLowerChildContainer}>
            <div className={styles.firstLowerChildCard}>
              <div className={styles.firstUpperChildCardImageContainer}>
                <img
                  src={
                    props.article
                      ? props.article[2].image
                      : "/asessts/man-smiling.webp"
                  }
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>
                  {props.article
                    ? props.article[2].subtitle
                    : "Customer Story. 6 min read"}
                </span>
                <h1>
                  {props.article
                    ? props.article[2].title
                    : "Johnsonville's Recruiter Handbook for Hyper Hiring"}
                </h1>
                <p>
                  {props.article ? props.article[2].date : "March 02, 2022"}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.secondLowerChildContainer}>
            <div className={styles.secondLowerChildCard}>
              <div className={styles.firstUpperChildCardImageContainer}>
                <img
                  src={
                    props.article
                      ? props.article[3].image
                      : "/asessts/recruiters/article_one.webp"
                  }
                  width={100}
                  height={100}
                  alt="article_image"
                  className={styles.firstUpperChildCardImage}
                />
              </div>
              <div className={styles.firstUpperChildCardText}>
                <span>
                  {props.article
                    ? props.article[3].subtitle
                    : "Customer Story. 6 min read"}
                </span>
                <h1>
                  {props.article
                    ? props.article[3].title
                    : "Johnsonville's Recruiter Handbook for Hyper Hiring"}
                </h1>
                <p>
                  {props.article ? props.article[3].date : "March 02, 2022"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

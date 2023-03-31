import React from "react";
import styles from "./MultiCardContainer.module.css";
import Image from "next/image";
const MultiCardContainer = () => {
  const cardData = [
    {
      id: 1,
      image: "/asessts/recruiters_card_1.svg",
      title: "Phenom CRM",
      description:
        "Build, engage, and track talent pipelines. Enhance productivity with the AI-powered CRM using dynamic lists, actionable insights, fit scoring, and more.",
    },
    {
      id: 2,
      image: "/asessts/recruiters_card_2.svg",
      title: "Phenom Campaigns",
      description:
        "Customize and automate personalized campaigns that convert target candidates into applicants.",
    },
    {
      id: 3,
      image: "/asessts/recruiters_card_3.svg",
      title: "Phenom AI Scheduling",
      description:
        "Automate the process of scheduling and rescheduling interviews with potential hires, giving your team valuable time back to focus on strategic initiatives.",
    },
    {
      id: 4,
      image: "/asessts/recruiters_card_4.svg",
      title: "Phenom Video Assessments",
      description:
        "Reduce the amount of time it takes to screen, qualify, and hire talent with Video Assessments that afford a better candidate experience and improved collaboration with hiring managers.",
    },
    {
      id: 5,
      image: "/asessts/recruiters_card_5.svg",
      title: "Phenom SMS",
      description:
        "Communicate with candidates the way they prefer — through 1:1 text exchanges and popular messaging apps.",
    },
    {
      id: 6,
      image: "/asessts/recruiters_card_6.svg",
      title: "Phenom Talent Analytics",
      description:
        "Use real-time insights to see where leads are coming from, understand why applications are being completed, and know how campaigns are performing.",
    },
    {
      id: 7,
      image: "/asessts/recruiters_card_7.svg",
      title: "Phenom AI Insights",
      description:
        "Deliver actionable insights to help recruiters discover and rediscover best-fit candidates and fill critical roles, faster.",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Built for recruiters</h1>
      <div className={styles.cardContainer}>
        <div className={styles.mainCardContainer}>
          {cardData &&
            cardData.map((card) => (
              <div className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={card.image}
                    alt="recruiter1"
                    width={50}
                    height={50}
                  />
                </div>
                <span>{card.title}</span>

                <p>{card.description}</p>
              </div>
            ))}
          \
        </div>
      </div>
    </div>
  );
};

export default MultiCardContainer;

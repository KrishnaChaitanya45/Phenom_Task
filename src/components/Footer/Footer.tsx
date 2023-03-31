import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const gridData = [
    {
      title: "Platform",
      data: [
        "Platform Overview",
        "Employee Experience",
        "Candidate Experience",
        "Recruiter Experience",
        "Manager Experience",
        "HR Experience",
        "HRIS Experience",
        "Phenom AI",
      ],
    },

    {
      title: "Solutions",
      data: [
        "Role",
        "Recruiters",
        "Talent Marketers",
        "Hiring Managers",
        "Talent Acquisition",
        "Talent Management",
        "HRIS",
        "CHRO",
      ],
    },
    {
      title: "Company",
      data: [
        " About Phenom",
        "Customers",
        "About",
        "Newsroom",
        "Careers",
        "Security & Compliance",
        "Contact Us",
      ],
    },
    {
      title: "Resources",
      data: [
        "Resources",
        "All Resources",
        "Phenom Blog",
        "Webinars & Product Tours",
        "Talent Experience Live",
        "eBooks & Reports",
        "Community",
      ],
    },
    {
      title: "Featured Products",
      data: [
        "High-Volume Hiring",
        "Career Site",
        "Talent Marketplace",
        "Chatbot",
        "Talent CRM",
        "Campaigns",
        "SMS & 1:1 Messaging",
        "View All Products",
      ],
    },
    {
      title: "Industry",
      data: [
        "Healthcare",
        "Technology & IT",
        "Transportation & Logistics",
        "Retail & Hospitality",
        "Manufacturing",
        "Financial Services",
        "Energy & Utilities",
      ],
    },
    {
      title: "Client Services",
      data: [
        "Customer Hub",
        "Customer Success",
        "Training & Certification",
        "Global Customer Care",
        "Partners",
      ],
    },
    {
      title: "Case Studies",
      data: [
        "All Case Studies",
        "Lumen",
        "Sweetwater",
        "LLS",
        "Land O'Lakes",
        "SASR Workforce Solutions",
      ],
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <Image
          src="/asessts/Phenom_Logo_White.png"
          alt="phenom-logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <p>Helping a billion people find the right job.</p>
      </div>
      <div className={styles.gridContainer}>
        {gridData &&
          gridData.map((item) => (
            <div className={styles.gridItem} key={item.title}>
              <h3>{item.title}</h3>
              {item.data && item.data.map((data) => <p key={data}>{data}</p>)}
            </div>
          ))}
      </div>
      <div className={styles.lastSection}>
        <div className={styles.lastSectionLeft}>
          <button>Privacy</button>
          <button>Terms of Use</button>
          <button>Security Policy</button>
          <button>Vulnerability Disclosure Policy</button>
        </div>
        <div className={styles.lastSectionRight}>
          <Image
            src="/asessts/facebook_logo.svg"
            alt="facebook-logo"
            width={30}
            height={30}
            className={styles.SocialLogo}
          />
          <Image
            src="/asessts/twitter_logo.svg"
            alt="facebook-logo"
            width={30}
            height={30}
            className={styles.SocialLogo}
          />
          <Image
            src="/asessts/linkedin_logo.svg"
            alt="facebook-logo"
            width={30}
            height={30}
            className={styles.SocialLogo}
          />
          <Image
            src="/asessts/youtube_logo.svg"
            alt="facebook-logo"
            width={30}
            height={30}
            className={styles.SocialLogo}
          />
          <Image
            src="/asessts/insta_logo.svg"
            alt="facebook-logo"
            width={30}
            height={30}
            className={styles.SocialLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

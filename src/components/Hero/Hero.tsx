"use client";
import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
const Hero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const roles = [
    {
      name: "Recruiters",
      image: "/asessts/hero_section_right.webp",
    },
    {
      name: "Talent Marketers",
      image: "/asessts/first_card.png",
    },
    {
      name: "Hiring Managers",
      image: "/asessts/megamenu/second_card.png",
    },
    {
      name: "Talent Acquisition",
      image: "/asessts/megamenu/third_card.png",
    },
    {
      name: "Talent Management",
      image: "/asessts/megamenu/four_card.png",
    },
    {
      name: "HRIS",
      image: "/asessts/megamenu/fifth_card.png",
    },
    {
      name: "CHRO",
      image: "/asessts/megamenu/last_card.png",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.firstContainer}>
        <div className={styles.first}>
          <div className={styles.parentDropDownContainer}>
            <div
              className={styles.dropDownContainer}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                if (!isOpen) {
                  setIsHovered(false);
                }
              }}
            >
              <div className={styles.DropDownImage}>
                <Image
                  src="/asessts/hero_section_right.webp"
                  alt="First"
                  width={35}
                  height={35}
                  className={styles.InnerImage}
                />
              </div>
              <p>Recruiters</p>
              <Image
                src="/asessts/arrow_white.svg"
                alt="Down"
                width={30}
                height={30}
              />
            </div>
            <div
              className={styles.hiddenDropDown}
              style={isHovered ? { height: "70vh" } : { height: 0, padding: 0 }}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={styles.hiddenDropDownHeader}>
                <p>Role</p>
                <Image
                  src="/asessts/arrow.svg"
                  alt="Down"
                  width={30}
                  height={30}
                  className={styles.upArrow}
                />
              </div>
              {roles &&
                roles.map((role) => {
                  return (
                    <div className={styles.indDivDropDown} key={role.name}>
                      <div className={styles.DropDownImage}>
                        <Image
                          src={role.image}
                          alt="First"
                          width={35}
                          height={35}
                          className={styles.InnerImageHidden}
                        />
                      </div>
                      <p>{role.name}</p>
                    </div>
                  );
                })}
              {/* <div className={styles.indDivDropDown}>
                <div className={styles.DropDownImage}>
                  <Image
                    src="/asessts/hero_section_right.webp"
                    alt="First"
                    width={35}
                    height={35}
                    className={styles.InnerImage}
                  />
                </div>
                <p>Recruiters</p>
              </div> */}
            </div>
          </div>
          <h1 className={styles.heading}>Phenom for</h1>
          <h1 className={styles.headingColored}>Recruiters</h1>
        </div>
        <div className={styles.second}>
          <p>
            Discover, engage and hire phenomenal people - with speed and
            velocity
          </p>
          <button className={styles.navbarButtonOne} id="navbar-button">
            Book Demo
          </button>
        </div>
      </div>
      <div className={styles.secondContainer}></div>
    </div>
  );
};

export default Hero;

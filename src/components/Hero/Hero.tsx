"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Hero.module.css";
const Hero = ({
  title,
  subtitle,
  dropdown,
  image,
}: {
  title?: string;
  subtitle?: string;
  dropdown?: string;
  image?: string;
}) => {
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
  ];

  const dropdownText = roles.map((role) => {
    if (role.name.replace(" ", "_").toLowerCase() === dropdown?.toLowerCase()) {
      return role.name;
    }
  });
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
              <p>{dropdownText}</p>
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
                    <Link
                      href={`/${
                        role.name.toLowerCase() === "recruiters"
                          ? "home"
                          : role.name.replace(" ", "_").toLowerCase()
                      }`}
                    >
                      {" "}
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
                    </Link>
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
          <h1 className={styles.heading}>
            {title ? title : "Phenom for Recruiters"}
          </h1>
          {/* <h1 className={styles.headingColored}>Recruiters</h1> */}
        </div>
        <div className={styles.second}>
          <p>
            {subtitle
              ? subtitle
              : ` Discover, engage and hire phenomenal people - with speed and
            velocity`}
          </p>
          <button className={styles.navbarButtonOne} id="navbar-button">
            Book Demo
          </button>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <Image
          src={image ? image : "/asessts/hero_section_right.webp"}
          alt="First"
          width={500}
          height={500}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Hero;

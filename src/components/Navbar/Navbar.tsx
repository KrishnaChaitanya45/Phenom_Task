"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  let theEnd: number = 0;
  const [scrollDown, setScrollDown] = useState<boolean>(false);
  const scrollHandler = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > theEnd) {
      setScrollDown(false);
    } else {
      setScrollDown(true);
    }
    theEnd = scrollTop <= 0 ? 0 : scrollTop;
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const megaMenuOpen = (id: string) => {
    setOpen(true);
    console.log(id);
    setId(id);
  };
  const megaMenuClose = () => {
    if (!inMegaMenu) {
      setOpen(false);
      setId("");
    }
  };

  const articlesData = [
    {
      id: "one",
      text: "The Total Economic Impact Of Phenom Intelligent",
      image: "/asessts/first_article.jpg",
    },
    {
      id: "two",
      text: "Buyer's Guide: Choosing a Talent Marketplace",
      image: "/asessts/second_article.png",
    },
    {
      id: "three",
      text: "Fine-Tune Your Strategy High-Volume Hiring",
      image: "/asessts/third_article.webp",
    },
  ];
  const [open, setOpen] = React.useState<boolean>(false);
  const [inMegaMenu, setInMegaMenu] = React.useState<boolean>(false);
  const [id, setId] = React.useState<string>("");
  return (
    <div
      className={styles.navAndMegaMenuWrapper}
      style={scrollDown ? { top: 0 } : { top: "-15vh" }}
    >
      <div
        className={styles.mainContainer}
        style={
          scrollDown ? { backgroundColor: "white" } : { background: "black" }
        }
      >
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLogo}>
            {scrollDown ? (
              <Image
                src="/asessts/Phenom_Symbol_Black.png"
                alt="Phenom Logo"
                width={50}
                height={50}
              />
            ) : (
              <Image
                src="/asessts/Phenom_Logo_White.png"
                alt="Phenom Logo"
                width={150}
                height={50}
              />
            )}
          </div>
          <div className={styles.navbarLinks}>
            <div
              className={styles.indLinkOne}
              onMouseEnter={() => megaMenuOpen("one")}
              onMouseLeave={() => megaMenuClose()}
            >
              <span
                style={scrollDown ? { color: "black" } : { color: "white" }}
              >
                Platform
              </span>
              {scrollDown ? (
                <Image
                  src="/asessts/arrow.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "one" ? { transform: "rotate(180deg)" } : {}
                  }
                />
              ) : (
                <Image
                  src="/asessts/arrow_white.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "one" ? { transform: "rotate(180deg)" } : {}
                  }
                />
              )}
            </div>
            <div
              className={styles.indLinkTwo}
              onMouseEnter={() => megaMenuOpen("two")}
              onMouseLeave={() => megaMenuClose()}
            >
              <span
                style={scrollDown ? { color: "black" } : { color: "white" }}
              >
                Solutions
              </span>
              {scrollDown ? (
                <Image
                  src="/asessts/arrow.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "two" ? { transform: "rotate(180deg)" } : {}
                  }
                />
              ) : (
                <Image
                  src="/asessts/arrow_white.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "two" ? { transform: "rotate(180deg)" } : {}
                  }
                />
              )}
            </div>
            <div
              className={styles.indLinkThree}
              onMouseEnter={() => megaMenuOpen("three")}
              onMouseLeave={() => megaMenuClose()}
            >
              <span
                style={scrollDown ? { color: "black" } : { color: "white" }}
              >
                Company
              </span>
              {scrollDown ? (
                <Image
                  src="/asessts/arrow.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "three"
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                />
              ) : (
                <Image
                  src="/asessts/arrow_white.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "three"
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                />
              )}
            </div>
            <div
              className={styles.indLinkFour}
              onMouseEnter={() => megaMenuOpen("four")}
              onMouseLeave={() => megaMenuClose()}
            >
              <span
                style={scrollDown ? { color: "black" } : { color: "white" }}
              >
                Resources
              </span>
              {scrollDown ? (
                <Image
                  src="/asessts/arrow.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "four" ? { transform: "rotate(180deg)" } : {}
                  }
                />
              ) : (
                <Image
                  src="/asessts/arrow_white.svg"
                  alt="arrow"
                  width={30}
                  className={styles.arrowOne}
                  height={30}
                  style={
                    open && id === "four" ? { transform: "rotate(180deg)" } : {}
                  }
                />
              )}
            </div>
          </div>
          <div className={styles.navbarButtons}>
            <Link href="/dashboard">
              {" "}
              <button className={styles.navbarButtonOne} id="navbar-button">
                Dashboard
              </button>
            </Link>
            <button
              className={
                scrollDown
                  ? styles.navbarButtonTwoWhite
                  : styles.navbarButtonTwo
              }
            >
              Log Out
            </button>
            <div className={styles.threeLines}>
              <div
                className={styles.line}
                style={
                  scrollDown
                    ? { background: "black" }
                    : { backgroundColor: "white" }
                }
              ></div>
              <div
                className={styles.line}
                style={
                  scrollDown
                    ? { background: "black" }
                    : { backgroundColor: "white" }
                }
              ></div>
              <div
                className={styles.line}
                style={
                  scrollDown
                    ? { background: "black" }
                    : { backgroundColor: "white" }
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={open ? styles.megaMenuOpened : styles.megaMenuClosed}>
        <div
          className={styles.megaMenuContainer}
          onMouseEnter={() => setInMegaMenu(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {id === "one" ? (
            <div className={styles.firstContainer}>
              <div className={styles.firstColumn}>
                <div className={styles.firstColumnCardColored}>
                  <div className={styles.firstColumnCardContent}>
                    <b>Intelligent Talent Experience</b>
                    <p>
                      The AI-powered platform to hire, retain, and develop
                      talent faster.
                    </p>
                    <button className={styles.buttonContainer}>
                      <p>Platform Overview</p>
                      <Image
                        src="/asessts/right-arrow.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.secondColumnCard}>
                  <div className={styles.firstColumnCardContent}>
                    <p>
                      Get a comprehensive overview of the products that support
                      each talent experience
                    </p>
                    <button className={styles.buttonContainer}>
                      <p>All Phenom Products</p>
                      <Image
                        src="/asessts/right-arrow.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.thirdColumnCard}>
                  <div className={styles.firstColumnCardContent}>
                    <p>
                      Shrink the time between "hello" to hire from days to
                      minutes
                    </p>
                    <button className={styles.buttonContainer}>
                      <p>High-Volume Hiring</p>
                      <Image
                        src="/asessts/right-arrow.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.secondColumn}>
                <div className={styles.purpleCardGrid}>
                  <div className={styles.purpleCard}>
                    <div className={styles.purpleCardContent}>
                      <p>Best-fit candidates find and choose you faster.</p>
                      <b>Candidate Experience</b>
                      <Image
                        src="/asessts/first_card.png"
                        alt="firstCard"
                        width={100}
                        height={100}
                        className={styles.purpleCardImageOne}
                      />
                      <div className={styles.horizontalStrip}></div>
                      <div className={styles.verticalStrip}></div>
                    </div>
                  </div>
                  <div className={styles.purpleCard}>
                    <div className={styles.purpleCardContent}>
                      <p>
                        Employees develop their skills & evolve their careers.
                      </p>
                      <b>Employee Experience</b>
                      <Image
                        src="/asessts/megamenu/second_card.png"
                        alt="firstCard"
                        width={100}
                        height={100}
                        className={styles.purpleCardImageTwo}
                      />
                      <div className={styles.horizontalStrip}></div>
                      <div className={styles.verticalStrip}></div>
                    </div>
                  </div>
                  <div className={styles.purpleCard}>
                    <div className={styles.purpleCardContent}>
                      <p>Recruiters become wildly productive.</p>
                      <b>Recruiter Experience</b>
                    </div>
                    <Image
                      src="/asessts/megamenu/third_card.png"
                      alt="firstCard"
                      width={100}
                      height={100}
                      className={styles.purpleCardImageThree}
                    />
                    <div className={styles.horizontalStrip}></div>
                    <div className={styles.verticalStrip}></div>
                  </div>
                  <div className={styles.purpleCard}>
                    <div className={styles.purpleCardContent}>
                      <p>Managers build stronger-performing teams.</p>
                      <b>Manager Experience</b>
                      <Image
                        src="/asessts/megamenu/four_card.png"
                        alt="firstCard"
                        width={100}
                        height={100}
                        className={styles.purpleCardImageFour}
                      />
                    </div>
                    <div className={styles.horizontalStrip}></div>
                    <div className={styles.verticalStrip}></div>
                  </div>
                  <div className={styles.purpleCard}>
                    <div className={styles.purpleCardContent}>
                      <p>
                        HR aligns employee development goals with company goals.
                      </p>
                      <b>Candidate Experience</b>
                      <Image
                        src="/asessts/megamenu/fifth_card.png"
                        alt="firstCard"
                        width={100}
                        height={100}
                        className={styles.purpleCardImageFive}
                      />
                      <div className={styles.horizontalStrip}></div>
                      <div className={styles.verticalStrip}></div>
                    </div>
                  </div>
                  <div className={styles.purpleCard}>
                    <div className={styles.purpleCardContent}>
                      <p>Connect Phenom to your existing HR tech stack.</p>
                      <b>HRIS Experience</b>
                      <Image
                        src="/asessts/megamenu/last_card.png"
                        alt="firstCard"
                        width={100}
                        height={100}
                        className={styles.purpleCardImageSix}
                      />
                    </div>
                    <div className={styles.horizontalStrip}></div>
                    <div className={styles.verticalStrip}></div>
                  </div>
                </div>
                <div className={styles.lastCard}>
                  <div className={styles.lastCardContent}>
                    <b>Phenom AI</b>
                    <p>
                      Explore how intelligent data and machine learning bring
                      personalization and automation to all.
                    </p>
                  </div>
                  <button>
                    <p>Phenom AI</p>
                    <Image
                      src="/asessts/arrow_white.svg"
                      alt="arrow"
                      width={10}
                      height={10}
                      className={styles.rightArrowLastCard}
                    />
                  </button>
                </div>
              </div>
            </div>
          ) : id === "two" ? (
            <div className={styles.secondContainer}>
              <div className={styles.columnOne}>
                <span className={styles.columnHeader}> Role </span>
                <b>Recruiters</b>
                <b>Talent Marketers</b>
                <b>Hiring Marketers</b>
                <b>Talent Acquisition</b>
                <b>HRIS</b>
                <b>CHRO</b>
              </div>
              <div className={styles.columnTwo}>
                <span className={styles.columnHeader}> Industry </span>
                <b>Healthcare</b>
                <b>Technology & IT</b>
                <b>Transportation & Logistics</b>
                <b>Retail & Hospitality</b>
                <b>Manufacturing</b>
                <b>Financial Services</b>
                <b>Energy & Utilities</b>
              </div>
              <div className={styles.columnThree}>
                <span className={styles.columnHeader}> Partnership </span>
                <b>Workday</b>
                <b>SAP Success Factors</b>
                <b>Cornerstone OnDemand</b>
                <b>ADP</b>
                <b>Sell All Partners</b>
              </div>
            </div>
          ) : id === "three" ? (
            <div className={styles.thirdContainer}>
              <div className={styles.columnOne}>
                <b>Customers</b>
                <b>About</b>
                <b>Newsroom</b>
                <b>Careers</b>
                <b>Security & Compliance</b>
                <b>Contact Us</b>
              </div>
              <div className={styles.columnTwo}>
                <b>Customer Hub</b>
                <b>Customer Success</b>
                <b>Training & Certification</b>
                <b>Global Customer Care</b>
                <b>Partners</b>
              </div>
              <div className={styles.imageContainer}>
                <div>
                  <h1>We're Growing Fast !</h1>
                  <h1>Check Our Our</h1>
                  <h1>Open Jobs.</h1>
                </div>
                <button>Phenom Careers</button>
              </div>
            </div>
          ) : id === "four" ? (
            <div className={styles.fourthContainer}>
              <div className={styles.fourthContainerfirstColumn}>
                <span className={styles.columnHeader}>Resources</span>
                <b>All Resources</b>
                <b>Phenom Blog</b>
                <b>Webinars & Product Tours</b>
                <b>Talent Experience Live</b>
                <b>eBooks & Reports</b>
                <b>Community</b>
              </div>
              <div className={styles.fourthContainersecondColumn}>
                <span className={styles.columnHeader}>Case Studies</span>
                <b>All Case Studies</b>
                <b>Lumen</b>
                <b>Sweetwater</b>
                <b>LLS</b>
                <b>Land O'Lakes</b>
                <b>SASR Workforce Solutions</b>
              </div>
              <div className={styles.fourthContainerthirdColumn}>
                <span className={styles.columnHeader}>Featured Reads</span>
                <div className={styles.articlesContainer}>
                  {articlesData &&
                    articlesData.map((article) => (
                      <div className={styles.article} key={article.id}>
                        <Image
                          src={article.image}
                          alt="firstCard"
                          width={100}
                          height={100}
                          className={styles.articleImage}
                        />
                        <div className={styles.articleContent}>
                          <b> {article.text}</b>
                          <button>
                            <p>Read more</p>
                            <Image
                              src="/asessts/arrow_white.svg"
                              width={10}
                              height={10}
                              alt="button"
                              className={styles.rightArrow}
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

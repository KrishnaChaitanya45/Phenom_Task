"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import styles from "./AccordianAndGraph.module.css";
const AccordianAndGraph = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>
        Discover eligible candidates and find the right fit for open roles.
      </h1>
      <div className={styles.twoDivContainer}>
        <div className={styles.leftDiv}>
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className={styles.accordionDetailsContainer}
              >
                <Typography
                  sx={{ flexShrink: 0 }}
                  className={styles.accordionTitle}
                >
                  Find the Best Fit, Faster
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.accordionDetail}>
                  Prioritize outreach to candidates that meet qualifications
                  such as skills, title, experience, and location.
                </Typography>
                <button className={styles.accordionButton}>
                  Learn more {">"}{" "}
                </button>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                className={styles.accordionDetailsContainer}
                id="panel2bh-header"
              >
                <Typography
                  sx={{ flexShrink: 0 }}
                  className={styles.accordionTitle}
                >
                  Fill Talent Pipeline Faster
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.accordionDetail}>
                  Gain visibility into your career site traffic with
                  comprehensive analytics. Begin engaging with potential
                  candidates, even those who did not submit an application.
                </Typography>
                <button className={styles.accordionButton}>
                  Learn more {">"}{" "}
                </button>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                className={styles.accordionDetailsContainer}
                id="panel3bh-header"
              >
                <Typography
                  sx={{ flexShrink: 0 }}
                  className={styles.accordionTitle}
                >
                  Build Meaningful Relationships
                </Typography>
                \
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={styles.accordionDetail}>
                  Nurture, engage, and convert talent with email and SMS
                  communications that turn job seekers into applicants.
                </Typography>
                <button className={styles.accordionButton}>
                  Learn more {">"}{" "}
                </button>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={styles.rightDiv}></div>
      </div>
    </div>
  );
};

export default AccordianAndGraph;

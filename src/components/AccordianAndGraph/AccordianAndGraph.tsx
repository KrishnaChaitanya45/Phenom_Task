"use client";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import styles from "./AccordianAndGraph.module.css";
import Image from "next/image";
interface question {
  id: number;
  question: string;
  answer: string;
}
interface Props {
  title?: string;
  questions?: question[];
  image?: string;
}
const AccordianAndGraph = (props: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>
        {props.title
          ? props.title
          : " Discover eligible candidates and find the right fit for open roles."}
      </h1>
      <div className={styles.twoDivContainer}>
        <div className={styles.leftDiv}>
          <div>
            {props.questions &&
              props.questions.map((question) => (
                <Accordion
                  key={question.id}
                  expanded={expanded === `panel${question.id}}`}
                  onChange={handleChange(`panel${question.id}}`)}
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
                      {question.question
                        ? question.question
                        : "Find the Best Fit, Faster"}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={styles.accordionDetail}>
                      {question.answer
                        ? question.answer
                        : `Prioritize outreach to candidates that meet qualifications
                  such as skills, title, experience, and location.`}
                    </Typography>
                    <button className={styles.accordionButton}>
                      Learn more {">"}{" "}
                    </button>
                  </AccordionDetails>
                </Accordion>
              ))}
            {/* <Accordion
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
            </Accordion> */}
          </div>
        </div>
        <div className={styles.rightDiv}>
          <Image
            src={props.image ? props.image : "/asessts/Fit_Score.png"}
            alt="Fit Score"
            width={500}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccordianAndGraph;

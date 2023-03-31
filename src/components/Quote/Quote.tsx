import React from "react";
import styles from "./Quote.module.css";
const Quote = ({ quote }: { quote?: string }) => {
  return (
    <div className={styles.mainContainer}>
      <h1>
        {quote
          ? quote
          : "You need to focus on strategic initiatives, not repetitive, mundane tasks."}
      </h1>
    </div>
  );
};

export default Quote;

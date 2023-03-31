import React from "react";
import styles from "./PhenomInAction.module.css";
const PhenomInAction = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1>See Phenom in action</h1>
        <p>
          Get a personalized demo to see how you can improve productivity and
          fill open roles faster.
        </p>
        <button className={styles.navbarButtonOne} id="navbar-button">
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default PhenomInAction;

import BarChart from "@/components/Charts/BarChart";
import DoughnutChart from "@/components/Charts/DoughnutChart";
import React, { useState } from "react";
import styles from "../styles/dashboard.module.css";
const dashboard = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.barChartContainer}>
        <BarChart chartData={" "} />
        <div className={styles.contentDiv}>
          <h1>Bar Chart</h1>
          <p>
            Bar charts are widely used in various fields, from business to
            academia, to visualize data and highlight trends. For example, in
            business, bar charts can be used to show sales figures or revenue
            for different products or services, making it easy to compare and
            identify which items are most profitable.{" "}
          </p>
        </div>
      </div>
      <div className={styles.doughnutChartContainer}>
        <DoughnutChart />
        <div className={styles.contentDiv}>
          <h1>Doughnut Chart</h1>
          <p>
            Doughnut charts are also useful in a variety of contexts,
            particularly when it comes to visualizing proportions or
            percentages. For example, in marketing, doughnut charts can be used
            to display the market share of different companies in a given
            industry, making it easy to see which companies dominate the market.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default dashboard;

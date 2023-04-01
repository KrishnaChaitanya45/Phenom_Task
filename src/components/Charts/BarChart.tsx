import React from "react";
import { Bar } from "react-chartjs-2";
import { data } from "../../Data/Data";
import styles from "../../styles/dashboard.module.css";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  CategoryScale,
  LinearScale,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  BarController,
  CategoryScale,
  LinearScale,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
);
const BarChart = ({ chartData }: { chartData: any }) => {
  return (
    <div className={styles.barChart}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;

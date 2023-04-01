import React from "react";
import { Bar } from "react-chartjs-2";
import { data } from "../../Data/Data";
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
    <div
      style={{
        width: "50vw",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexShrink: 0,
      }}
    >
      <Bar data={data} />
    </div>
  );
};

export default BarChart;

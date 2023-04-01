import { Doughnut } from "react-chartjs-2";
import { data1 } from "../../Data/Data";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  CategoryScale,
  LinearScale,
  ArcElement,
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
  ArcElement,

  Legend,
  Filler
);
const DoughnutChart = () => {
  return (
    <div
      style={{
        width: "40vw",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexShrink: 0,
      }}
    >
      <Doughnut data={data1} />
    </div>
  );
};

export default DoughnutChart;

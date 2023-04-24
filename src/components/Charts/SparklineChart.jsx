import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const SparklineChart = ({ sparklineData }) => {
  console.log(sparklineData);

  return;
  <>
    <Line>SparklineChart</Line>;
  </>;
};
export default SparklineChart;

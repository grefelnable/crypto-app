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
import styled, { useTheme } from "styled-components";
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

const SparklineChart = ({ sparklineData, weeklyChange }) => {
  const theme = useTheme();

  // Display of the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    // Spread the line drawn in the chart
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    tension: 0.5,
  };
  const labels = sparklineData.price.map((index) => index);
  // Chart's Data
  const data = {
    // x-axis
    labels,
    datasets: [
      {
        fill: false,
        label: "",
        data: sparklineData.price.map((value) => value),
        borderColor: weeklyChange > 0 ? "#00FF5F" : "#FE1040",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
};
export default SparklineChart;

const Container = styled.div`
  width: 192px;
  height: 50px;
`;

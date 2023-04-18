import { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
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

const url =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily";
const ChartsOverview = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [coinData, setCoinData] = useState([{}]);
  // Fetch data for charts
  useEffect(() => {
    const fetchBitcoinData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const items = data.prices.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
      }));
      setIsLoaded(true);
      setCoinData(items);
    };
    fetchBitcoinData().catch(console.error);
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
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

  const data = {
    // x-axis
    labels: coinData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: "Bitcoin",
        data: coinData.map((value) => value.y),
        borderColor: "#00FF5F",
        // backgroundColor: "rgba(0, 255, 95,.5)",
        // gradient background
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 1000);
          gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
        pointRadius: 0,
      },
    ],
  };

  // loading screen
  if (!isLoaded) {
    return <div className="loading"></div>;
  }
  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
};
export default ChartsOverview;

const Container = styled.article``;

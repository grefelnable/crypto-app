import { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";
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

const ChartsOverview = ({
  coinData,
  isLoaded,
  lastUpdate,
  btcCurrentPrice,
}) => {
  const theme = useTheme();

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
    labels: coinData.map((value) => moment(value.x).format("DD")),
    datasets: [
      {
        fill: true,
        label: "Bitcoin",
        data: coinData.map((value) => value.y),
        borderColor: theme.chartBorderColor,
        // gradient background
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 680);
          gradient.addColorStop(0, theme.chartsGradient.end);
          gradient.addColorStop(1, theme.chartsGradient.start);
          return gradient;
        },
        pointRadius: 0,
      },
    ],
  };

  return (
    <Container>
      <ChartInformation>
        <h2>Bitcoin</h2>
        <BtcPrice>$ {btcCurrentPrice}</BtcPrice>
        <LastUpdate>{lastUpdate}</LastUpdate>
      </ChartInformation>
      {!isLoaded ? (
        <div className="loading"></div>
      ) : (
        <Line options={options} data={data} />
      )}
    </Container>
  );
};
export default ChartsOverview;

const Container = styled.article`
  border-radius: var(--borderRadius);
  background-color: ${({ theme }) => theme.background};
`;
const ChartInformation = styled.div`
  padding: 1em;
  margin-bottom: -2em;
  h2 {
    font-size: 1.375rem;
    margin-bottom: 0;
  }
  span {
    display: block;
  }
`;

const BtcPrice = styled.span`
  font-size: 2.75rem;
`;

const LastUpdate = styled.span`
  font-size: 1.375rem;
`;

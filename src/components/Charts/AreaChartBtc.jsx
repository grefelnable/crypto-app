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
import { useSelector } from "react-redux";
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

const AreaChartBtc = ({ coinData, isLoaded, lastUpdate, btcCurrentPrice }) => {
  // user's selected currency
  const currency = useSelector((store) => store.currency);

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
        ticks: {
          autoSkip: true,
          maxTicksLimit: 20,
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
        <BtcPrice>
          {currency.symbol} {btcCurrentPrice}
        </BtcPrice>
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
export default AreaChartBtc;

const Container = styled.article`
  border-radius: var(--borderRadius);
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  .loading {
    border-top: 3px solid ${({ theme }) => theme.text};
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1em;
  }
`;
const ChartInformation = styled.div`
  padding: 1em;
  margin-bottom: -2em;
  h2 {
    font-size: 1.375rem;
    font-weight: 300;
    margin-bottom: 0;
  }
  span {
    display: block;
  }
`;

const BtcPrice = styled.span`
  font-size: 2.75rem;
  font-weight: 400;
  margin-bottom: -20px;
`;

const LastUpdate = styled.span`
  font-size: 1.375rem;
  font-weight: 300;
`;

import styled, { useTheme } from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartBtc = ({
  isLoaded,
  coinVolume,
  btcCurrentVolume,
  volumeLastUpdate,
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
  };

  const data = {
    // x-axis
    labels: coinVolume.map((value) => moment(value.x).format("DD")),
    datasets: [
      {
        fill: true,
        label: "Bitcoin Volume",
        data: coinVolume.map((value) => value.y),
        backgroundColor: theme.chartBarColor,
      },
    ],
  };

  return (
    <Container>
      <ChartInformation>
        <h2>Volume 24h</h2>
        <BtcVolume>$ {btcCurrentVolume}</BtcVolume>
        <LastUpdate>{volumeLastUpdate}</LastUpdate>
      </ChartInformation>
      {!isLoaded ? (
        <div className="loading"></div>
      ) : (
        <Bar options={options} data={data} />
      )}
    </Container>
  );
};

export default BarChartBtc;

// CSS
const Container = styled.article`
  border-radius: var(--borderRadius);
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  .loading {
    border-top: 3px solid ${({ theme }) => theme.text};
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

const BtcVolume = styled.span`
  font-size: 2.75rem;
  margin-bottom: -20px;
`;

const LastUpdate = styled.span`
  font-size: 1.375rem;
  font-weight: 300;
`;

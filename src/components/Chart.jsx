import React, { useMemo } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Chart = React.memo(({ arr = [], currency, days }) => {
  const data = useMemo(() => {
    const prices = [];
    const date = [];

    for (let i = 0; i < arr.length; i++) {
      days === '24h' ? date.push(new Date(arr[i][0]).toLocaleTimeString()) : date.push(new Date(arr[i][0]).toLocaleDateString());
      prices.push(arr[i][1]);
    }

    return {
      labels: date,
      datasets: [
        {
          label: `Price in ${currency}`,
          data: prices,
          color: 'black',
          backgroundColor: "red",
          opacity: "0.5",
        },
      ]
    };
  }, [arr, currency, days]);


  return (
    <Line 
      options={{
        responsive: true,
      }}
      data={data}
    />
  );
});

export default Chart;

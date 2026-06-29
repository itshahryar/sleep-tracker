'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Record {
  date: string;
  amount: number;
}

const BarChart = ({ records }: { records: Record[] }) => {
  const data = {
    labels: records.map((record) => new Date(record.date).toLocaleDateString()),
    datasets: [
      {
        data: records.map((record) => record.amount),
        backgroundColor: records.map((record) =>
          record.amount < 7
            ? 'rgba(239, 68, 68, 0.7)'
            : 'rgba(59, 130, 246, 0.7)'
        ),
        borderColor: records.map((record) =>
          record.amount < 7 ? 'rgba(239, 68, 68, 1)' : 'rgba(59, 130, 246, 1)'
        ),
        borderWidth: 2,
        borderRadius: 6,
        hoverBackgroundColor: records.map((record) =>
          record.amount < 7
            ? 'rgba(239, 68, 68, 0.85)'
            : 'rgba(59, 130, 246, 0.85)'
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        titleColor: '#f8fafc',
        bodyColor: '#f8fafc',
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            family: 'system-ui, sans-serif',
          },
          color: '#64748b',
          maxRotation: 45,
          minRotation: 0,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
            family: 'system-ui, sans-serif',
          },
          color: '#64748b',
          padding: 8,
        },
        grid: {
          color: '#e2e8f0',
          drawBorder: false,
        },
        border: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 12,
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;

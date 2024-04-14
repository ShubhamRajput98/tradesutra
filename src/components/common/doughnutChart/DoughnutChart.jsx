import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom', // Adjust the legend position as needed
            labels: {
                padding: 20,
            },
        },
        datalabels: {
            color: 'white', // Text color
            font: {
                weight: 'bold',
            },
            formatter: (value, context) => {
                console.log(value, context)
                // Customize the label text as needed
                const label = context.chart.data.labels[context.dataIndex];
                return `hello: ${value}%`;
            },
        },
    },
};

export const data = {
    labels: ['Red', 'Blue', 'Yellow',],
    datasets: [
        {
            data: [12, 19, 13,],
            backgroundColor: [
                '#5B93FF',
                '#FFD66B',
                '#FF8F6B',
            ],
            hoverOffset: 10
        },
    ],
};

export const DoughnutChart = () => {
    return <Doughnut data={data} options={options} />;
}

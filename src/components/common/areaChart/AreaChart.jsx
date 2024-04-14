
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
} from 'chart.js';

import { Line } from 'react-chartjs-2';
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

export const options = {
    responsive: true,
    parsing: {
        xAxisKey: 'rowMonth',
        yAxisKey: 'score'
    },
    plugins: {
        legend: {
            display: false,
        },
        // title: {
        //     display: true,
        //     text: 'Chart.js Line Chart',
        // },
    },

    scales: {
        y: {
            ticks: {
                callback: function (value, index, values) {
                    return value.toLocaleString() + 'k'; // Add 'k' to tick values
                },
            },
        },
        x: {
            grid: {
                display: false, // Set to false to remove X-axis gridlines
                drawOnChartArea: false,
            },
        },
    },
};

// const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'];
const charData = [
    {
        score: 430,
        rowMonth: "Jan",
        phase: "A"
    },
    {
        score: 191,
        rowMonth: "Feb",
        phase: "B"
    },
    {
        score: 254,
        rowMonth: "Mar",
        phase: "C"
    },
    {
        score: 124,
        rowMonth: "Apr",
        phase: "D"
    },
    {
        score: 474,
        rowMonth: "May",
        phase: "E"
    },
    {
        score: 51,
        rowMonth: "June",
        phase: "F"
    },
    {
        score: 247,
        rowMonth: "July",
        phase: "G"
    },
    {
        score: 135,
        rowMonth: "Aug",
        phase: "H"
    },
    {
        score: 354,
        rowMonth: "Sep",
        phase: "I"
    },
    {
        score: 671,
        rowMonth: "Oct",
        phase: "J"
    },
    {
        score: 225,
        rowMonth: "Nov",
        phase: "K"
    },
    {
        score: 632,
        rowMonth: "Des",
        phase: "L"
    },
];



const data = {
    // labels,
    datasets: [
        {
            fill: true,
            data: charData,
            borderWidth: 7,
            borderColor: "rgba(94, 195, 255, 0.5)",
            // borderImage: gradientStroke,
            lineTension: 0.3,
            pointBorderWidth: 3,
            pointRadius: 6,
            pointBackgroundColor: ['transparent', '#FFFF', '#FFFF', '#FFFF', '#FFFF', '#FFFF', '#FFFF', '#FFFF', '#FFFF', '#FFFF', '#FFFF', 'transparent'],
            pointBorderColor: ['transparent', '#AE8FF7', '#AE8FF7', '#AE8FF7', '#AE8FF7', '#AE8FF7', '#AE8FF7', '#AE8FF7', '#AE8FF7', '#AE8FF7', '#AE8FF7', 'transparent'],
            pointHoverBackgroundColor: 'rgba(135, 132, 214, 0.8)',
            pointHoverBorderColor: 'rgba(135, 132, 214, 0.8)',
            borderCapStyle: 'round', // Add rounded edges to line start and end
            borderJoinStyle: 'round',
            backgroundColor: (context) => {
                const bgColor = [
                    "rgba(94, 195, 255, 0.35)",
                    "rgba(253, 93, 239, 0.15)",
                ]
                if (!context?.chart?.chartArea) {
                    return;
                }
                const { ctx, chartArea: { left, right } } = context?.chart;
                const gradientBg = ctx.createLinearGradient(left, 0, right, 0);
                gradientBg.addColorStop(0, bgColor[0])
                gradientBg.addColorStop(1, bgColor[1])
                return gradientBg;
            },
            segment: {
                borderColor: ((ctx) => {
                    const phaseColor = {
                        A: "#5BC4FF",
                        B: "#83abfb",
                        C: "#9a9bf9",
                        D: "#a990f7",
                        E: "#b890f7",
                        F: "#c381f5",
                        G: "#cc7cf4",
                        H: "#cd7bf4",
                        I: "#e47cf3",
                        J: "#e06ff2",
                        K: "#ea68f1",
                        L: "#fb5def"

                    }
                    return phaseColor[ctx?.p0?.raw?.phase]
                })
            }
        },
    ],
};


export const AreaChart = () => {
    return <Line options={options} data={data} />;
}
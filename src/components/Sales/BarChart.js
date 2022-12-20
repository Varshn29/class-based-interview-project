import { Bar } from "react-chartjs-2";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Box } from "@mui/material";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: false,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Store Sales Trend',
        },
    },
};

const labels = ['Men clothing', 'Women clothing', 'Electronics', 'Jewelery'];

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => Math.random(5)),
            backgroundColor: '#58afff',
        },
    ],
};

export function BarChart() {
    return (
        <Box>
            <Bar options={options} data={data} style={{ width: '500px', height: '250px', marginLeft: '200px'}} />
        </Box>
    );
}

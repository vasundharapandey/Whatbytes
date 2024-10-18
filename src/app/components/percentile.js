"use client";
import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';

const data = [
    { name: '0%', value: 2 },
    { name: '10%', value: 3 },
    { name: '20%', value: 5 },
    { name: '30%', value: 15 },
    { name: '40%', value: 25 },
    { name: '50%', value: 50 },
    { name: '60%', value: 35 },
    { name: '70%', value: 20 },
    { name: '80%', value: 10 },
    { name: '90%', value: 5 },
    { name: '100%', value: 2 }
];

const PercentileChart = ({ userPercentile }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={true} />
                <ReferenceLine x={`${userPercentile}%`} stroke="gray" label={{ position: 'insideRight', value: 'your percentile', fill: 'gray' }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default PercentileChart;

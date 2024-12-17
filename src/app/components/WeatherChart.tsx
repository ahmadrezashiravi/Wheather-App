import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Sun", temperature: 20 },
  { name: "Mon", temperature: 22 },
  { name: "Tue", temperature: 18 },
  { name: "Wed", temperature: 25 },
  { name: "Thu", temperature: 24 },
  { name: "Fri", temperature: 28 },
  { name: "Sat", temperature: 30 },
];

const WeatherChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;

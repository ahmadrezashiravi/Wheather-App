import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"; // Import Recharts components

interface WeatherCardProps {
  weatherData: { date: string; temp: number; humidity: number }[]; // Accept the weather data as a prop
}

const WeatherCard = ({ weatherData }: WeatherCardProps) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      {/* Render the chart with weather data */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weatherData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Temperature Line */}
          <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* Humidity Line */}
          <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

      {/* Display individual weather details below the chart */}
      {weatherData.map((entry) => (
        <div key={entry.date}>
          <p className="text-lg font-bold">Date: {new Date(entry.date).toLocaleString()}</p>
          <p>Temperature: {entry.temp}°C</p>
          <p>Humidity: {entry.humidity}%</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherCard;

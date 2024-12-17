"use client";
import axios from 'axios';
import { useState } from "react";
import { getWeather } from "@/app/utils/weatherApi"; // Import the weather fetching utility
import WeatherCard from "@/app/components/WeatherCard"; // Import a component to display the weather details
import getCoordinates from './utils/GetCoordinates'; // Function to get coordinates for the city

// Define the structure of weather data received from the API
interface WeatherData {
  date: string;
  temp: number;
  humidity: number;
}

const HomePage = () => {
  // State to manage city input from the user (not used directly with new API)
  const [city, setCity] = useState<string>("Burnaby");

  // State to store fetched weather data
  const [weatherData, setWeatherData] = useState<WeatherData[] | null>(null);

  // State to handle error messages
  const [error, setError] = useState<string | null>(null);

  // Function to fetch weather data based on coordinates
  const handleSearch = async () => {
    try {
      // Step 1: Get coordinates based on the city name
      const coordinates = await getCoordinates(city);
      console.log(coordinates); // Log coordinates for debugging

      // Step 2: Fetch weather data from API using coordinates
      const response = await getWeather(coordinates.latitude, coordinates.longitude, "2024-12-16");

      // Step 3: Extract temperature and humidity data from response
      const tempData = response.data.find((item: any) => item.parameter === "t_2m:C");
      const humidityData = response.data.find((item: any) => item.parameter === "relative_humidity_2m:p");

      // Step 4: Combine temperature and humidity data by date
      const combinedData: WeatherData[] = tempData.coordinates[0].dates.map((tempEntry: any, index: number) => ({
        date: tempEntry.date,
        temp: tempEntry.value,
        humidity: humidityData.coordinates[0].dates[index]?.value || 0,
      }));

      // Step 5: Update the state with the combined weather data
      setWeatherData(combinedData);
      setError(null); // Clear any previous error message
    } catch (error) {
      console.error(error);
      setError("Error fetching weather data");
      setWeatherData(null); // Clear weather data if an error occurs
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Weather Forecast</h1>

      {/* Input field for city name and search button */}
      <div className="flex mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)} // Update city state on input change
          placeholder="Enter city"
          className="p-2 border border-gray-300 rounded-l-md text-gray-800"
        />
        <button
          onClick={handleSearch} // Trigger search function on click
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      {/* Display an error message if an error occurs */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Show weather data if available */}
      {weatherData ? (
        <div className="w-full max-w-4xl">
          {/* Pass all weather data to WeatherCard */}
          <WeatherCard weatherData={weatherData} />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default HomePage;

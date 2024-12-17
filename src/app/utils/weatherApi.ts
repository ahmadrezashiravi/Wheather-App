import axios from 'axios';

// Base URL and authentication credentials for Meteomatics API
const BASE_URL = 'https://api.meteomatics.com';
const USERNAME = process.env.NEXT_PUBLIC_METEOMATICS_USERNAME;
const PASSWORD = process.env.NEXT_PUBLIC_METEOMATICS_PASSWORD;

// Function to fetch weather data based on latitude, longitude, and date
export const getWeather = async (latitude: number, longitude: number, date: string) => {
  try {
    // Construct the API endpoint URL based on the required parameters
    const response = await axios.get(`${BASE_URL}/${date}T00:00:00ZP1D:PT1H/t_2m:C,relative_humidity_2m:p/${latitude},${longitude}/json`, {
      auth: {
        username: USERNAME,
        password: PASSWORD, // Authentication using the provided credentials
      },
      params: {
        model: 'mix',  // The model to be used for weather predictions
      },
    });

    // Return the weather data fetched from the API
    return response.data;
  } catch (error) {
    // Log and throw an error in case of failure to fetch data
    console.error('Error fetching weather data:', error);
    throw new Error('Unable to fetch weather data');
  }
};

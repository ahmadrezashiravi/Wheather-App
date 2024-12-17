import axios from "axios";

const GEOCODE_API_URL = "https://api.opencagedata.com/geocode/v1/json";
const GEOCODE_API_KEY = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY; // Store your API key here

// Function to get latitude and longitude for a city name
const getCoordinates = async (city: string) => {
  try {
    const response = await axios.get(GEOCODE_API_URL, {
      params: {
        q: city, // City name
        key: GEOCODE_API_KEY, // Your OpenCage API key
      },
    });

    // Return latitude and longitude
    const result = response.data.results[0]?.geometry;
    if (result) {
        
      return { latitude: result.lat, longitude: result.lng };
    } else {
      throw new Error("City not found");
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw new Error("Unable to fetch city coordinates");
  }
};

export default getCoordinates;

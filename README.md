### Weather App
A weather forecasting app that fetches real-time weather data using the Meteomatics API. Users can search for weather information by entering a city name, and the app will display the weather forecast with temperature and humidity data, as well as a visual chart representation.

## Table of Contents
Introduction
Features
Technologies Used
How to Run
Environment Variables
Usage
File Structure
License
## Introduction
The Weather App is a simple web application built with Next.js (React framework) that allows users to search for weather data by city. Upon entering a city name, the app fetches weather information such as temperature and humidity, and displays the data in both textual and graphical formats (charts).

This app utilizes the Meteomatics API to fetch the weather forecast and OpenCage Geocoding API to convert city names into latitude and longitude coordinates for accurate weather data retrieval.

## Features
City Search: Users can input a city name to fetch the weather forecast.
Weather Data Display: The app shows the temperature and humidity for the requested date.
Chart Visualization: Weather data is visually represented using charts.
Error Handling: In case of an invalid city or failed API requests, appropriate error messages are displayed.
Technologies Used
This project uses the following technologies and libraries:

Next.js: A React framework for building server-side rendered applications.
React: A JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for the browser and Node.js, used for making API requests.
Chart.js: A popular library to create interactive charts.
OpenCage Geocoding API: Used for converting city names to geographic coordinates (latitude and longitude).
Meteomatics API: Provides weather data such as temperature and humidity based on geographic coordinates.
Tailwind CSS: A utility-first CSS framework for styling the application.
## How to Run
Follow these steps to run the project locally:

Clone the repository:
```bash

git clone https://github.com/ahmadrezashiravi/Wheather-App.git
cd Wheather-App
```
Install dependencies: Run the following command to install all required dependencies:
```bash
npm install
```
Set up environment variables: Create a .env file in the root directory and add the following variables:

```bash
NEXT_PUBLIC_METEOMATICS_USERNAME=your_username
NEXT_PUBLIC_METEOMATICS_PASSWORD=your_password
NEXT_PUBLIC_OPENCAGE_API_KEY=your_opencage_api_key


```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Environment Variables
This app requires the following environment variables to function properly:

NEXT_PUBLIC_METEOMATICS_USERNAME: Your Meteomatics API username.
NEXT_PUBLIC_METEOMATICS_PASSWORD: Your Meteomatics API password.
NEXT_PUBLIC_OPENCAGE_API_KEY: Your OpenCage Geocoding API key.
You can get these API keys by registering on the following platforms:

Meteomatics API
OpenCage Geocoding API

## Usage
Once the app is running, follow these steps to use it:

Enter a city name in the input field (e.g., "Burnaby").
Click the "Search" button to fetch the weather data.
The app will display the temperature and humidity for the current day, along with a chart representing the weather data over time.
If the city name is not found or there is an issue with fetching the data, an error message will be displayed.

## File Structure
Here's an overview of the file structure of the Weather App:
```bash

├── components
│   ├── Chart.tsx            # Component for displaying the weather chart
│   └── WeatherCard.tsx      # Component for displaying weather data in card format
├── pages
│   ├── _app.tsx             # Custom App component for wrapping the entire application
│   ├── index.tsx            # The main homepage that handles city input and displays weather info
├── utils
│   ├── weatherApi.ts        # Utility functions for fetching weather data from the Meteomatics API
│   └── getCoordinates.ts    # Utility function for converting city names to latitude and longitude
├── public
│   └── logo.png             # App logo
├── styles
│   └── globals.css          # Global CSS file for styling
├── .env                     # Environment variables for API keys
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation (this file)

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

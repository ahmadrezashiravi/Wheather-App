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


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

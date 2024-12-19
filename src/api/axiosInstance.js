import axios from "axios";

// Create base API instance with Axios
export const baseApi = axios.create({
  baseURL: "https://jobs-api14.p.rapidapi.com", 
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY, 
    "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST, 
    "Content-Type": "application/json",
  },
});

// Log environment variables and baseApi instance
console.log("RapidAPI Key:", import.meta.env.VITE_RAPIDAPI_KEY);
console.log("RapidAPI Host:", import.meta.env.VITE_RAPIDAPI_HOST);
console.log("baseApi instance:", baseApi);

// https://github.com/axios/axios
import axios from "axios";

const API_KEY = "087c7476280b520891118ea5525eb5bd";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_WEATHER
  };
}

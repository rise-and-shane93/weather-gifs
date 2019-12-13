import { weather } from '../actions/types';

const INITAL_STATE = {
    weatherData: [],
    temperature: "F"
}

export default function getWeather(state = INITAL_STATE, action) {
    switch(action.type) {
        case weather.GETWEATHER:
            return {
                ...state,
                weatherData: action.payload.savedWeatherData,
                temperature: action.payload.temperature
            };
        case weather.POSTWEATHER:
            return {
                ...state,
                weatherData: [
                    ...state.weatherData,
                    JSON.parse(action.payload)
                ]
            }
        case weather.DELETEONEWEATHER:
            return {
                ...state,
                weatherData: state.weatherData.filter(el => el.location !== action.payload)
            }
        case weather.TEMPERATURE: 
            return {
                ...state,
                temperature: action.payload
            }
        default:
            return state;
    }
}
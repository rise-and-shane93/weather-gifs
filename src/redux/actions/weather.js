import axios from "axios";
import { weather } from './types';

const config = {
    withCredentials: true
}

const ax = axios.create(config);

export const getWeather = url => async (dispatch) => {
    const res = await ax.get(url);
    try {
        dispatch({type: weather.GETWEATHER, payload: res.data});
    } 
    catch (error) {
        console.log(error);
    }
}

export const handleAddToUserData = (url, data) => dispatch => {
    ax.post(url, data)
    .then(res => {
        dispatch({
            type: weather.POSTWEATHER,
            payload: res.config.data
        });
    })
    .catch(err => console.log(err));
}

export const deleteOneWeather = (url, data) => dispatch => {
    const location = data.location;
    ax.delete(url, data)
    .then(res => {
        dispatch({
            type: weather.DELETEONEWEATHER,
            payload: location
        });
    })
    .catch(err => console.log(err));
}

export const changeTemp = (val) => dispatch => {
    ax.put(val)
    .then(() => {
        dispatch({
            type: weather.TEMPERATURE,
            payload: val
        })
    })
    .catch(err => console.log(err));
}
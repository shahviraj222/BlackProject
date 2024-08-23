// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};


export const getData = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/data`);
        // console.log("Inside api ressposne", response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
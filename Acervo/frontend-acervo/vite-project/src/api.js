import axios from 'axios';

const API_URL = 'http://localhost:2000/api';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const registerUser = async (data) => {
    const response = await api.post('/users/register', data);
    return response.data;
};
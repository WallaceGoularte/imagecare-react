import axios from 'axios';

const api = axios.create({
    baseURL: 'https://eec7-2804-14d-5c21-9916-6da2-cc70-e707-fa79.ngrok-free.app/'

});

export default api;
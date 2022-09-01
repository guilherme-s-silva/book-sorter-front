import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://book-sorter.herokuapp.com/'
});

export default axiosInstance;
// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gshop-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

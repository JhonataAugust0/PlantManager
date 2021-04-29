import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/JhonataAugust0/PlantManager'
});

export default api;
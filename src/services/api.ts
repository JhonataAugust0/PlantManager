import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.102:3333/'
});

export default api;
// json-server db.json --host 192.168.1.102 --port 3333 --delay 700
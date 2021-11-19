import axios from 'axios'

// const baseURL = "http://localhost:3000/";
const baseURL = "https://api.publicapis.org/";

const instance = axios.create({ baseURL })

instance.defaults.headers.post['Content-Type'] = 'application/json'

export default instance;

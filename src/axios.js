import axios from "axios";
import config from "./config.json";

const instance = axios.create({
    baseURL: config.baseUrl,
});

export default instance;
import axios from "axios";
const URL = 'https://www.googleapis.com/youtube/v3'
export default axios.create({
    baseURL: URL
});
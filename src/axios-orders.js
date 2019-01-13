import axios from "axios";

const instance = axios.create({
    baseURL: 'https://the-best-burger.firebaseio.com/'
})

export default instance
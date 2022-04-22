import axios from 'axios'

const axiosConf = axios.create({
    baseURL: "https://api.github.com/users"
})

export default axiosConf
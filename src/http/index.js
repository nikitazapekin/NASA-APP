import axios from "axios";
//import {TEST_API_URL} from "../../src/.env"
const $host = axios.create({    // запросы, не требующие авторизации
  //  baseURL: process.env.REACT_APP_API_URL
  baseURL: process.env.TEST_API_URL
 //baseURL: TEST_API_URL
})

const $authHost = axios.create({ // запросы, требующие авторизации
  //  baseURL: process.env.REACT_APP_API_URL
  baseURL: process.env.TEST_API_URL
 // baseURL: TEST_API_URL
  
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
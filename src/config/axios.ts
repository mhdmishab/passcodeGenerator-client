import axios from "axios";

//  const BASE_URL = 'http://127.0.0.1:8080/api' ;
 const BASE_URL ='https://passcodegeneratorserver.onrender.com/api'


const instance = axios.create({
    baseURL: BASE_URL,
  });
  
  export default instance;
import axios from "axios";

 const BASE_URL = 'http://127.0.0.1:8080/api' ;
//  const BASE_URL ='https://passcrafter-x.onrender.com/api/v1/'


const instance = axios.create({
    baseURL: BASE_URL,
  });
  
  export default instance;
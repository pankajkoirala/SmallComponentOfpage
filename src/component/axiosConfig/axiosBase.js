import React from "react"
import axios from "axios"
import {base_URL,token_key} from "./constant/baseURL"

let headers={ 'Content-Type': 'application/json'}
if(localStorage.getItem(token_key)){
  headers["x-auth-token"]=localStorage.getItem(token_key)
}
console.log(headers);
const axiosInstance= axios.create({
  baseURL:base_URL,    //eg localhost:3000 if u have base url in .env file than process.ENV.REACT_APP_BACKEND_URL   REACT_APP_BACKEND_URL uo chai url ko key .env file ma halda use garne
  headers,
})

export default axiosInstance
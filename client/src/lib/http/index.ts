import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:3000/api/",
    headers : {
        "Content-Type" : "application/json", // pathauda kheri jane format
        "Accept" : "application/json", // recieve huda kasto type ko format ko reveive garne
    }
 })

 export default API
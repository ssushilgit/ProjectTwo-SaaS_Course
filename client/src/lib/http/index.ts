import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:4000/api/",
    headers : {
        "Content-Type" : "application/json", // pathauda kheri jane format
        "Accept" : "application/json", // recieve huda kasto type ko format ko reveive garne
    }
 })
const APIWITHTOKEN = axios.create({
    baseURL : "http://localhost:4000/api/",
    headers : {
        "Authorization" : localStorage.getItem("token") !== null || localStorage.getItem("token") !== undefined || localStorage.getItem("token") !== "" ? localStorage.getItem("token") : null,
        "Content-Type" : "application/json", // pathauda kheri jane format
        "Accept" : "application/json", // recieve huda kasto type ko format ko reveive garne
    }
 }) 

 export {API, APIWITHTOKEN}
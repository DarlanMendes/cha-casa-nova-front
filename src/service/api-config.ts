import axios from "axios";


export const api = axios.create({baseURL:"/api"})

api.interceptors.request.use((request:any)=>{
    console.log(request)
   
    return request
})
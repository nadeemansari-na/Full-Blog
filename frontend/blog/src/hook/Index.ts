import axios from "axios"
import { useEffect, useState } from "react"
import { Backend } from "../pages/Backend"


export const UseAppbar=()=>{
    const [loading,setloading]=useState(true);
    const [blogs,setblogs]=useState([])
    useEffect(()=>{
          axios.get(`${Backend}/api/v1/blogrouter`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }}
        ).then(response =>{
            setblogs(response.data.blogs)
            console.log(response.data.blogs)
            setloading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}
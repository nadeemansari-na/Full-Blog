import axios from "axios"
import { useEffect,useState } from "react"
import { Backend } from "../pages/Backend"

export interface blogtype{
    id:number,
    title:string,
    content:string,
    author:{
        name:string
    }
}
interface idtype{
    id?:string
}

export const Useblog = ({id }:idtype) => {
    const [loading,setloading]=useState(true)
    const [bloggs,setbloggs]=useState<blogtype>()
 useEffect(() => {
  if (!id) return;

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`
         ${Backend}/api/v1/blogrouter/blog/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      console.log(res)
      setloading(false)
      setbloggs(res.data.blog)
      console.log("SUCCESS:", res.data.blog)

    } catch (e: any) {
      console.log("ERROR:", e.response?.data || e.message)
    }
  }

  fetchBlog()
}, [id])
    console.log({bloggs})
    return {
      loading,
      bloggs
    }
}
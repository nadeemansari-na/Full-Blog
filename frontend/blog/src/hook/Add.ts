import axios from "axios"
import { Backend } from "../pages/Backend"
import { useNavigate } from "react-router-dom"
// import { Backend } from "../pages/Backend"
export interface addtype{
    title:string,
    content:string,
    id?:number
}



export const useAdd=()=>{
     const    navigate=useNavigate()
  const senddata=async(postblog:addtype )=>{
    console.log('blog',postblog.title,postblog.content)
            try{
            const ret=await axios.post(`${Backend}/api/v1/blogrouter/blog`,{
                  title:postblog.title,
                   content:postblog.content
                },{
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`
                    }
                }
               );
               navigate(`/blog/${ret.data.id}`)
               console.log(ret.data.ret)
            }catch(e){
                console.log("error sending data",e)
            }
    }

    return {
        senddata
    }
}
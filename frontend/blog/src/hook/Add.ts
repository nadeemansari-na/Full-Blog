import axios from "axios"
import { Backend } from "../pages/Backend"
// import { Backend } from "../pages/Backend"

export interface addtype{
    title:string,
    content:string,
    id?:number
}



export const useAdd=()=>{
         
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
               console.log(ret.data)
            }catch(e){
                console.log(e)
            }
    }

    return {
        senddata
    }
}
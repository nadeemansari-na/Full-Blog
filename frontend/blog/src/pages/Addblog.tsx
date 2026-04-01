import { useState } from "react"
import { useAdd } from "../hook/Add"
import type { Postblog } from "@codingwith/common"
import { Link } from "react-router-dom"
 


export const Addblog=()=>{
    const [postblog,setpostblog]=useState<Postblog>({
        title:"",
        content:""
    })
    const {senddata}=useAdd();
       const submit=async()=>{
        if(!postblog.title || !postblog.content){
            alert('fill all fields')
            return;
        }
            await senddata(postblog);
        }

    return ( <Link to={'/blogs'}>
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-3">
        <input value={postblog.title} type="text" placeholder="title"  className="border p-2 mb-2 block"
 onChange={(e)=>{
           setpostblog({
            ...postblog,
            title:e.target.value
           })

        }} />
        <textarea value={postblog.content} className="border p-2 mb-2 block" onChange={(e)=>{
            setpostblog({
                    ...postblog,
                    content:e.target.value
            })
        }}>

        </textarea>
        <button className="bg-blue-500 text-white px-4 py-2" onClick={submit}>
            publish
        </button>
    </div>
    </Link>)
}

// function Title({postblog,setpostblog,submit}){

//     return <div>
//         <input type="text" placeholder="title"  className="border p-2 mb-2 block"
//  onChange={(e)=>{
//            setpostblog({
//             ...postblog,
//             title:e.target.value
//            })

//         }} />
//         <textarea className="border p-2 mb-2 block" onChange={(e)=>{
//             setpostblog({
//                     ...postblog,
//                     content:e.target.value
//             })
//         }}>

//         </textarea>
//         <button className="bg-blue-500 text-white px-4 py-2" onClick={submit}>
//             publish
//         </button>
//     </div>
// }
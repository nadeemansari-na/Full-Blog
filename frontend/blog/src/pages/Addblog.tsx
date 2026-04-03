import { useState } from "react"
import { useAdd } from "../hook/Add"
import type { Postblog } from "@codingwith/common"
import { Link } from "react-router-dom"


export const Addblog = () => {
    const [postblog, setpostblog] = useState<Postblog>({
        title: "",
        content: "",
        id:undefined
    })
    const { senddata } = useAdd();
    const submit = async () => {
        if (!postblog.title || !postblog.content) {
            alert('fill all fields')
            return;
        }
       await senddata(postblog);
       
    }

    return (
        <div className="flex flex-col w-screen h-screen max-h-screen">
            <Appbar/>
        <div className="flex flex-col w-screen h-screen items-center justify-center gap-3">
            <input value={postblog.title} type="text" placeholder="title" className="outline-cyan-700 border border-cyan-800 text-black font-semibold  rounded-md focus:ring-0 focus:border-0 block  px-4 py-3.5 shadow-xs placeholder:text-black"
                onChange={(e) => {
                    setpostblog({
                        ...postblog,
                        title: e.target.value
                    })

                }} />
            <textarea value={postblog.content} className="border p-2 mb-2 block" onChange={(e) => {
                setpostblog({
                    ...postblog,
                    content: e.target.value
                })
            }}>

            </textarea>
            
                <button className="bg-blue-500 cursor-pointer text-white px-4 py-2" onClick={submit}>
                    publish
                </button>
            
        </div>
        </div>
    )
}


function Avatar({name}:{name:string}){
    return (
        <div className="relative inline-flex items-center justify-center w-4 h-4 p-4 overflow-hidden bg-cyan-500 rounded-full text-black font-extrabold text-shadow-2xs text-shadow-blue-300 cursor-pointer">
    <span className="font-medium text-body">{name[0]}</span>
</div>
    )
}

function Appbar(){
    const name=localStorage.getItem('user')
    return <div className="flex justify-between p-5 border-b border-b-blue-100 w-screen max-w-screen">
        <Link to={'/blogs'} className="font-bold text-2xl cursor-pointer" >
        Nextnode
        </Link>
        <div>
            <Avatar name={name}/>
        </div>
    </div>
}
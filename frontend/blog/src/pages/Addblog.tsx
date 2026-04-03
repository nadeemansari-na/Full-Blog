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
        <div className="flex flex-col w-screen  h-screen max-h-screen">
            <Appbar/>
        <div className="flex flex-col w-screen md:h-3/4 h-2/3 items-center justify-center gap-3">
            <input value={postblog.title} type="text" placeholder="title" className="md:w-1/2 w-2/3  outline-cyan-700 border border-cyan-800 text-black font-semibold  rounded-md focus:ring-0  block  px-3 py-3.5 md:py-5 shadow-xs focus:shadow-purple-200 text-2xl placeholder:text-gray-600"
                onChange={(e) => {
                    setpostblog({
                        ...postblog,
                        title: e.target.value
                    })

                }} />
            <textarea value={postblog.content}  className="md:w-1/2 w-2/3 outline-cyan-700 border border-cyan-800  px-3 py-3 md:py-5 mb-2  rounded-md  font-semibold text-2xl  placeholder:text-gray-600 shadow-xs focus:shadow-purple-200 " placeholder="content" onChange={(e) => {
                setpostblog({
                    ...postblog,
                    content: e.target.value
                })
            }}>

            </textarea>
            <div className="md:w-1/2 w-2/3 ">

                <button className="justify-self-start rounded-md bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-2 focus:outline-none focus:ring-purple-400 dark:focus:ring-purple-800 cursor-pointer text-white px-4 py-2  " onClick={submit}>
                    publish
                </button>
            </div>
            
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
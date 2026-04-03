// import axios from "axios"
// import { Backend } from "./Backend"
// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Useblog } from "../hook/new"
// import type { blogtype } from "../hook/new"
import { Link } from "react-router-dom"
import { Blogskeleton } from "../components/Blogskeleton"

export const Blog = () => {
    console.log("str")
    const {id} =useParams()
    console.log("first hand",id)
   const {bloggs,loading}=Useblog({
    id:id || ""
   });
   console.log(id)
   if(loading){
    return (
        <div className="">
            <div >
                <Appbar/>
            </div>
            <Blogskeleton/>
        </div>
    )
   }


    return (
        <div className="flex flex-col w-screen h-screen max-h-screen">
            <Appbar/>
           <Fullblog blog={bloggs}></Fullblog>
        </div>
    )
}

function Fullblog({blog}){
    return (
        <div className=" flex flex-col items-center justify-evenly mb-40   sm:flex-row sm:justify-evenly   w-screen max-w-screen h-screen sm:pl-4 sm:pr-4 ">
            <div className="gap-2  flex-col flex max-w-7xl">
            <div className="font-extrabold text-xl sm:text-5xl">
            {blog.title}
            </div>
            <div className="text-gray-700 sm:text-xl">
                30 mar 2026
            </div>
            <div className="font-bold sm:text:xl">
                {blog.content}
            </div>
            </div>
            <div className="gap-2 w-2xs sm:w-md ">

                <div>
                    Author
                </div>
                <div className="flex gap-3 items-center">
                
               <Avatar name={blog.author.name}></Avatar>
                <div>
                <div className="font-bold text-1xl sm:text-2xl">
                    something
                </div>
                <div>
                    Random crash course to learn and all Availity to grap opportunity
                </div>
                
                </div>
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
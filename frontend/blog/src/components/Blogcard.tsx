// https://flowbite.com/pro/#pricing

import { Link } from "react-router-dom"

interface Blogcardtype {
    id:number,
    author :string,
    title :string,
    content :string,
    publisheddate :string
}

export const Blogcard= ({id,author,title,content,publisheddate}:Blogcardtype) =>{
    return ( <Link className="cursor-pointer" to={`/blog/${id}`}>

        <div className="border-b-2 border-slate-200 pb-1.5 pl-5 pr-5 w-screen max-w-screen-lg ">
            <div className="flex gap-0.5 items-center">
                <div className="flex justify-center items-center">
              <Avatar name={"na"} /> 
                </div>
                <div className="pl-1.5 pr-1.5">
               {author}   
                </div>
                <div className="w-0.5 h-0.5 bg-green-600 rounded-full pl">
                </div>
                <div className="pl-1.5 font-thin">
               {publisheddate}
                </div>
            </div>
            <div className="font-bold pt-2.5 pb-1">
                {title}
            </div>
            <div className="font-thin leading-5">
                {`${content.length>=100?content.substring(0,100):content}`}
            </div>
            <div className="pt-2 font-thin">
                {`${Math.ceil(content.length/100)} min`}
            </div>
        </div>
        </Link>
    )
}

function Avatar({name}:{name:string}){
    return (
        <div className="relative inline-flex items-center justify-center w-4 h-4 p-3 overflow-hidden bg-cyan-500  text-black font-extrabold text-shadow-2xs text-shadow-blue-300  rounded-full ">
    <span className="font-medium text-body">{name[0]}</span>
</div>
    )
}
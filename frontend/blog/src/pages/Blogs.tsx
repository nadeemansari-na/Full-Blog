import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/Blogcard"
import { Blogskeleton } from "../components/Blogskeleton"
import {UseAppbar} from "../hook"
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

export const Blogs = () =>{
    const {blogs,loading}=UseAppbar();

    if(loading){
      return  <div>
        <div>
        <Appbar/>
        </div>
        <Blogskeleton/>
      </div>
    }

    
    return (
        <div className="">
           <Appbar/>
        <div className="p-8 flex  flex-col gap-4 justify-center items-center ">
            {blogs.map(blog=>
            
                <Blogcard id={blog.id} author={blog.author.name} title={blog.title} content={blog.content} publisheddate="28 march 26"/>

            )}
        </div>
        </div>
    )
}

export function Avatar({name}:{name:string}){
    return (
        <div className="relative inline-flex items-center justify-center w-4 h-4 p-4 overflow-hidden bg-cyan-500 rounded-full text-black font-extrabold text-shadow-2xs text-shadow-blue-300 ">
    <span className="font-medium text-body">{name[0]}</span>
</div>
    )
}


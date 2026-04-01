import { Blogcard } from "../components/Blogcard"
import {UseAppbar} from "../hook"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom"

export const Blogs = () =>{
    const {blogs,loading}=UseAppbar();

    if(loading){
      return  <div className="flex justify-center items-center w-full h-screen text-3xl tracking-wide leading-5">

            loading . . . .
        </div>
    }

    
    return (
        <div className="">
            <div className="h-16 flex justify-between  p-4 pl-8 pr-8 border-b-2 border-slate-200">
                <div className="font-bold text-2xl">
                    Notenext
                </div>
                
                    <Menu as="div" className="relative inline-block">
      <MenuButton className="cursor-pointer">
                <Avatar name={localStorage.getItem("user")} />
       
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              {localStorage.getItem("user")}
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
           <a 
           href="/" 
           className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                SignOut
           </a>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
    <Link to={'/blog'}>
    go
    </Link>

            </div>
        <div className="p-8 flex  flex-col gap-4 justify-center items-center ">
            {blogs.map(blog=>
            
                <Blogcard id={blog.id} author={blog.name} title={blog.title} content={blog.content} publisheddate="28 march 26"/>

            )}
        </div>
        </div>
    )
}

function Avatar({name}:{name:string}){
    return (
        <div className="relative inline-flex items-center justify-center w-4 h-4 p-4 overflow-hidden bg-cyan-500 rounded-full text-black font-extrabold text-shadow-2xs text-shadow-blue-300 ">
    <span className="font-medium text-body">{name[0]}</span>
</div>
    )
}

function Delet(){
    localStorage.setItem("token","")
    return (
        <div></div>
    )
}
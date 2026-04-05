import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Avatar } from '../pages/Blogs'
import { Logout } from './Delete'


export const Appbar=()=>{
    return  <div className="h-16 flex justify-between  p-4 pl-8 pr-8 border-b-2 border-slate-200">
                    <div className="font-bold text-2xl">
                        Notenext
                    </div>
    
                    <div className="flex gap-4  items-center">
                      <div>
                        <Link to={'/blog'}>
                        <button type="button" className=" bg-linear-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-3  py-2 text-center leading-5 cursor-pointer">
                          new
                          </button>
                        </Link>
                      </div>
                        <Menu as="div" className="relative inline-block">
          <MenuButton className="cursor-pointer">
                    <Avatar name={localStorage.getItem("user") || ""} />
           
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
              
                <MenuItem>
              <Logout/>
                </MenuItem>
            </div>
          </MenuItems>
        </Menu>
    </div>
                </div>
}
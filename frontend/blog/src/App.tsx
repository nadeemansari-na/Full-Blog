// import React from "react"
import {Blogs} from './pages/Blogs'
import { Signup } from "./pages/Signup"
import { Landing } from "./pages/Landing"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Addblog } from './pages/Addblog'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/signup" element={ <Signup/>}></Route>
        <Route path="/signin" element={ <Signin/>}></Route>
        <Route path="/blog/:id" element={ <Blog/>}></Route>
        <Route path="/blogs" element={ <Blogs/>}></Route>
        <Route path="/blog" element={<Addblog/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { Hono } from "hono";
import { createPrisma } from '../db'
import { decode, sign, verify } from 'hono/jwt'
import {blogcheck,postblog} from '@codingwith/common'

const JWT_SECRET="nasecret";
export const blogrouter=new Hono<{
    Bindings:{
        DATABASE_URL:string
        JWT_SECRET:string
    },
    Variables:{
      userId:string
    }
}>()



//middleware
blogrouter.use('/*',async (c , next)=>{
  const header=c.req.header("authorization")|| "";
  const token=header.split(" ")[1]
  
  const response=await verify(token,JWT_SECRET,"HS256");
  if(response.id){
    c.set("userId",response.id as any);
    await next()
  }
  else{
    c.status(403)
    return c.json({error:"unathorized"})
  }
  
  return c.json('notext')
})

blogrouter.post('/blog',async (c)=>{
  console.log("reached ")
  const prisma=createPrisma(c.env.DATABASE_URL)
  const body=await c.req.json()
  console.log(body)
  const chheck=blogcheck.safeParse({
    body
  })
  const newpost=await prisma.post.create({
    data:{
      title:body.title,
      content:body.content,
      authorId:Number(c.get("userId"))
    }
  })
  
  return c.json({
   id: newpost.id
  })
})

blogrouter.put('/blog',async (c)=>{
       const prisma=createPrisma(c.env.DATABASE_URL)
  const body=await c.req.json()
  console.log("reached")
  const pput=postblog.safeParse({body})
    const update=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
  return c.json(update.id)
})



blogrouter.get('/blog/:id',async (c)=>{
  console.log("reached")
  console.log(c.req.param("id"))
  const que=c.req.param("id")
  const prisma=createPrisma(c.env.DATABASE_URL);
  try{
    const blog=await prisma.post.findFirst({
      where:{
        id:Number(que)
      },
      select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({
      blog
    })
  }catch(e){
    console.log(e)
    return c.json({
      message:"error while fetching blog post"
    })
  }
})

blogrouter.get('/',async (c)=>{
  const prisma=createPrisma(c.env.DATABASE_URL)
  const blogs=await prisma.post.findMany({
    select:{
      title:true,
      content:true,
      id:true,
     author:{
      select:{
        name:true
      }
     }
    }
  })

  return c.json({
    blogs
  })
})
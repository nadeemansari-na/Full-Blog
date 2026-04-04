import { Hono } from 'hono'
import { createPrisma } from '../db'
import { decode, sign, verify } from 'hono/jwt'
import {check} from "@codingwith/common";


export const userrouter = new Hono<{   Bindings: {
  DATABASE_URL: string
  JWT_SECRET: string
  } }>()



userrouter.post('/signup', async (c) => {
  // const users=await prisma.user.findMany()
  const prisma=createPrisma(c.env.DATABASE_URL);
  const body=await c.req.json();
  const {success}=check.safeParse(body)
  if(!success){
    return c.text('invalid input')
  }
  try{
    const user= await prisma.user.create({
       data:{
        name:body.name,
         email:body.email,
         password:body.password
       },
     })
     const token=await sign({id:user.id},c.env.JWT_SECRET)
     
     return c.json({
       token:token,
       msg:"user created successfully",
       email:body.email
     })
  } catch(e){
    c.status(411)
   return c.text('invalid')
  } 

})



userrouter.get('/signin',async (c)=>{
const prisma=createPrisma(c.env.DATABASE_URL);

  const email=c.req.query('email');
  const password=c.req.query('password')
  try{
    const user=await prisma.user.findUnique({
      where:{
        email:email,
        password:password
      }
    })
    if(!user){
      c.status(403);
      return c.json({error :"user not found"})
    }
  
    const token=await sign({id:user.id},c.env.JWT_SECRET);
    return c.json({
      token,
      email:user.email
    })

  }catch(e){
    c.status(403)
    return c.text("invalid")
  }

})
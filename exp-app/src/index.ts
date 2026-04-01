import { Hono } from 'hono'
import { createPrisma } from './db'
import { decode, sign, verify } from 'hono/jwt'
import { userrouter } from './routes/user';
import {blogrouter} from './routes/blog';
import { cors } from 'hono/cors'
// import { PrismaClient } from '../src/generated/prisma'
// give Hono a type for the Cloudflare bindings so `c.env` is not unknown
// you can refine this interface after running `npm run cf-typegen`
const JWT_SECRET="nasecret";
interface Env {
  DATABASE_URL: string
  JWT_SECRET:string
}
const app = new Hono<{   Bindings: {
  DATABASE_URL: string
  JWT_SECRET: string
  } }>()

  app.use('/*',cors());
app.route('/api/v1/userrouter',userrouter);
app.route('/api/v1/blogrouter',blogrouter);


export default app
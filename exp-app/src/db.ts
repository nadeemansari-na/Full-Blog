// Use the locally generated client to avoid bundler issues with .prisma/client/edge
// The bundler can't resolve @prisma/client/edge when using a custom output path.
import { PrismaClient } from "../src/generated/prisma"

import { withAccelerate } from '@prisma/extension-accelerate'

export const createPrisma = (accelerateurl: string) =>
  new PrismaClient({
    accelerateUrl: accelerateurl
  }).$extends(withAccelerate())
import Queue from 'bull'
import dotenv from 'dotenv'

dotenv.config()

const REDIS_URL = process.env.REDIS_URL || ""

if(REDIS_URL === "") {
  console.error("REDIS_URL is not set")
  process.exit(1)
}

const queue = new Queue('ai-queue', REDIS_URL)

export default queue
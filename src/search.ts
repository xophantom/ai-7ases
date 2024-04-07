import { redis, redisVectorStore } from './redis-store';

async function search() {
  await redis.connect()
  
  const response = await redisVectorStore.similaritySearchVectorWithScore(
    'O que é a 7Ases? quais os valores a empresa possui?',
    5
  )

  console.log(response)

  await redis.disconnect()
}

search()
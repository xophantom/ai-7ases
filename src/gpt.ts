import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from '@langchain/core/prompts';
import { RetrievalQAChain } from 'langchain/chains';
import { redis, redisVectorStore } from "./redis-store";
import 'dotenv/config'

const openAiChat= new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',
  temperature: 0.3
})

const prompt = new PromptTemplate({
  template: `
  Usar o conteúdo disponibilizado para responder o usuário.
  Se a resposta não for encontrada, não invente.
  
  Fonte:
  {context}

  Pergunta:
  {question}
  `.trim(),
  inputVariables: ['context', 'question']
})

// Large Language Model

const chain = RetrievalQAChain.fromLLM(openAiChat, redisVectorStore.asRetriever(), {
  prompt,
  returnSourceDocuments: true,
  verbose: true,
})

async function main() {
  await redis.connect()

  const response = await chain.call({
    query: 'huehue'
  })

  console.log(response)

  await redis.disconnect()
}

main()

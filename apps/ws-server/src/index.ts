import { WebSocketServer } from 'ws'
import { client } from '@repo/db/client'
import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(process.cwd(), '.env') })

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', async (ws) => {
  try {
    const randomId = Math.floor(Math.random() * 10000)
    const user = await client.user.create({
      data: {
        email: `user${randomId}@example.com`,
        password: `password${randomId}`,
      }
    })

    ws.send(`👋 Hello, user created: ${user.email}`)
  } catch (error) {
    console.error('❌ Failed to insert user:', error)
    ws.send('❌ Failed to create user.')
  }

  ws.on('message', (message) => {
    console.log('📨 Received from client:', message.toString())
    ws.send(`📣 Echo: ${message.toString()}`)
  })

  ws.on('close', () => {
    console.log('❌ Client disconnected')
  })
})

console.log('🚀 WS Server running on ws://localhost:8080')

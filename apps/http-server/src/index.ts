import express from 'express'
import { client } from '@repo/db/client'
import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(__dirname, '../../../.env') })

const app = express()
const PORT = process.env.PORT || 3001

app.get('/create-user', async (req, res) => {
  try {
    const randomId = Math.floor(Math.random() * 10000)
    const user = await client.user.create({
      data: {
        email: `user${randomId}@example.com`,
        password: `password${randomId}`,
      }
    })
    res.json(user)
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Failed to create user' })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})

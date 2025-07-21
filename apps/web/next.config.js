import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import envPackage from '@next/env'

const { loadEnvConfig } = envPackage

// ESM-compatible __dirname
const __dirname = dirname(fileURLToPath(import.meta.url))

// Load from root .env.local
loadEnvConfig(resolve(__dirname, '../../'), false)

const nextConfig = {
  reactStrictMode: true
}

export default nextConfig

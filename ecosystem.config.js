module.exports = {
  apps: [
    {
      name: "http-server",
      script: "apps/http-server/dist/index.js",
      env: {
        PORT: 3001,
        NODE_ENV: "production"
      }
    },
    {
      name: "ws-server",
      script: "apps/ws-server/dist/index.js",
      env: {
        PORT: 8080,
        NODE_ENV: "production"
      }
    },
    {
      name: "web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "apps/web",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}

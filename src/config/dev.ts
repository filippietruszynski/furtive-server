const devConfig = {
  app: {
    port: process.env.DEV_APP_PORT || 3000
  },
  secrets: {
    jwt: process.env.DEV_JWT_SECRET || 'nulladiessinelinea'
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'furtive-dev'
  }
}

export default devConfig
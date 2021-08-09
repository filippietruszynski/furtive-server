const testConfig = {
  app: {
    port: process.env.TEST_APP_PORT || 3000,
  },
  secrets: {
    jwt: process.env.TEST_JWT_SECRET || "nulladiessinelinea",
  },
  db: {
    host: process.env.TEST_DB_HOST || "localhost",
    port: process.env.TEST_DB_PORT || 27017,
    name: process.env.TEST_DB_NAME || "furtive-test",
  },
};

export default testConfig;

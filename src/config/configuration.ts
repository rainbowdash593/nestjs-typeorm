export default () => ({
  port: process.env.PORT || 3000,
  database: {
    type: process.env.DATABASE_DIALECT || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: process.env.DATABASE_SYNC == 'true',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'SuperSecretKey',
  },
});

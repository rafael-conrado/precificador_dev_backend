import dotenv from 'dotenv/config'

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {

  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,

  },

  databaseURL: process.env.DATABASE_URI,

};
import routes from './routes/index.js'
import express from "express";
import mongoose from "mongoose";
import { } from 'dotenv/config'

mongoose.connect(process.env.DATABASE_URI);
let connectionDb = mongoose.connection;

connectionDb.on("error", console.log.bind(console, 'Erro de conexão com o banco de dados!'));
connectionDb.once('open', () => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
});

const app = express();
app.use(express.json())
routes(app);

export default app;
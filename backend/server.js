//Importações
require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Url de conexão com o banco
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(connectionString);

//Faz a conexão com o bd
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Importa os models nescessários
require("./src/models/Appointment");

//Rotas
app.use("/api", require("./src/routes"));

//Escuta muda portaas requisições
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`port: ${port}`);

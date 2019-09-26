//Importações
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Url de conexão com o banco
const connectionString =
  "mongodb+srv://burca:burca@cluster0-qxdbz.mongodb.net/nodedb?retryWrites=true&w=majority";

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

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
console.log(process.env.PORT);
app.listen(process.env.PORT || 3000);

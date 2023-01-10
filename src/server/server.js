require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("../routes/index");
const formModel = require("../models/formModel");
const bodyParser = require("body-parser");

const app = express();

//habilitar middleware's
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT_API, () => {
  console.log(`Server listening on port ${process.env.PORT_API}`);
});

// criar a tabela de acordo com o arquivo de configuração
formModel.criarTabela();

// rotas
routes(app);

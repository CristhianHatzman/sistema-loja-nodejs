import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

import ProdutosController from "./controllers/ProdutosController.js";
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js";

import connection from "./config/sequelize-config.js";
connection.authenticate().then(() => {
  console.log("Servidor Conectado!");
}).catch(error => {
  console.log(error);
});

connection.query(`CREATE DATABASE IF NOT EXISTS carusoshop;`).then(() => {
  console.log("Banco de dados criado.");
}).catch((error) => {
  console.log(error);
})

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", ProdutosController);
app.use("/", ClientesController);
app.use("/", PedidosController);

app.listen(8085, (error) => {
  if (error) {
    console.log("Erro ao iniciar servidor!" + error);
  } else {
    console.log("Servidor startado!");
  }
});

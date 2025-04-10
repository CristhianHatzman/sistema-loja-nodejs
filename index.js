import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

import ProdutosController from "./controllers/ProdutosController.js";
import ClientesController from "./controllers/ClientesController.js";
import PedidosController from "./controllers/PedidosController.js"

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", ProdutosController);
app.use("/", ClientesController);
app.use("/", PedidosController)

app.listen(8085, (error) => {
  if (error) {
    console.log("Erro ao iniciar servidor!" + error);
  } else {
    console.log("Servidor startado!");
  }
});

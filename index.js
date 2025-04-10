import express from "express";
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8085, (error) => {
  if (error) {
    console.log("Erro ao iniciar servidor!" + error);
  } else {
    console.log("Servidor startado!");
  }
});

import express from "express";
import Produto from "../models/Produtos.js";
import { where } from "sequelize";
const router = express.Router();
//SELECT
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

//Cadastro
router.post("/produtos/new", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  const estoque = req.body.estoque;
  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
    estoque: estoque,
  }).then(() => {
    res.redirect("/produtos");
  }).catch((error) => {
    console.log(error);
  });
});

router.get("/produtos/delete/:id", (req,res) => {
  const id = req.params.id
  Produto.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect("/produtos")
  })
})

router.get("/produtos/edit/:id", (req,res) => {
  const id = req.params.id
  Produto.findByPk(id).then(function(produto) {
    res.render("produtoEditar", {
      produto : produto
    })
  })
})

router.post("/produtos/update/:id", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  const estoque = req.body.estoque;
  Produto.update({
    nome: nome,
    preco: preco,
    categoria: categoria,
    estoque: estoque,
  }, {where: {id: id}}
  ).then(() => {
    res.redirect("/produtos");
  }).catch((error) => {
    console.log(error);
  });
});

export default router;

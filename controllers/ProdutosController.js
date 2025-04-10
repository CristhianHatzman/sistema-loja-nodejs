import express from "express";
const router = express.Router();

router.get("/produtos", (req, res) => {
  const produtos = [
    {
      nome: "Notebook Dell Inspiron com Intel Core i5 e SSD de 512GB",
      preco: 3899.90,
      categoria: "Computadores",
      estoque: 32
    },
    {
      nome: "Smartphone Samsung Galaxy S23 com 256GB de armazenamento",
      preco: 4499.99,
      categoria: "Celulares",
      estoque: 17
    },
    {
      nome: "Monitor Gamer AOC 27” com 165Hz e 1ms de resposta",
      preco: 1599.00,
      categoria: "Monitores",
      estoque: 29
    },
    {
      nome: "Mouse Gamer Logitech G203 com RGB e 8000 DPI",
      preco: 139.99,
      categoria: "Periféricos",
      estoque: 46
    },
    {
      nome: "Teclado Mecânico Husky Blizzard com switches red",
      preco: 249.90,
      categoria: "Periféricos",
      estoque: 52
    },
    {
      nome: "HD Externo Seagate 2TB USB 3.0",
      preco: 379.90,
      categoria: "Armazenamento",
      estoque: 21
    },
    {
      nome: "SSD Kingston NV2 1TB NVMe PCIe 4.0",
      preco: 399.00,
      categoria: "Armazenamento",
      estoque: 18
    },
    {
      nome: "Roteador Intelbras Wi-Fi 5 com 1200Mbps de velocidade",
      preco: 199.90,
      categoria: "Redes",
      estoque: 35
    },
    {
      nome: "Caixa de Som Bluetooth JBL GO 3 à prova d’água",
      preco: 229.90,
      categoria: "Áudio",
      estoque: 26
    },
    {
      nome: "Webcam Logitech C920 Full HD com microfone estéreo",
      preco: 399.00,
      categoria: "Periféricos",
      estoque: 15
    },
    {
      nome: "Tablet Xiaomi Pad 6 com tela de 11” e 256GB",
      preco: 2299.90,
      categoria: "Tablets",
      estoque: 12
    },
    {
      nome: "Impressora Multifuncional Epson EcoTank L3250 Wi-Fi",
      preco: 1099.00,
      categoria: "Impressoras",
      estoque: 19
    },
    {
      nome: "Fonte Corsair 650W 80 Plus Bronze",
      preco: 389.99,
      categoria: "Hardware",
      estoque: 24
    },
    {
      nome: "Placa de Vídeo NVIDIA GeForce RTX 3060 12GB",
      preco: 2099.00,
      categoria: "Hardware",
      estoque: 13
    },
    {
      nome: "Cooler Gamer Rise Mode com LED RGB 120mm",
      preco: 89.90,
      categoria: "Hardware",
      estoque: 55
    },
    {
      nome: "Controle DualSense sem fio para PlayStation 5",
      preco: 399.00,
      categoria: "Games",
      estoque: 41
    },
    {
      nome: "Hub USB 3.0 com 4 portas de alta velocidade",
      preco: 79.90,
      categoria: "Acessórios",
      estoque: 60
    },
    {
      nome: "Smartwatch Xiaomi Mi Band 7 com tela AMOLED",
      preco: 269.90,
      categoria: "Wearables",
      estoque: 38
    },
    {
      nome: "Carregador Turbo com entrada USB-C 33W",
      preco: 89.00,
      categoria: "Acessórios",
      estoque: 48
    },
    {
      nome: "Câmera de Segurança Intelbras com visão noturna e infravermelho",
      preco: 299.00,
      categoria: "Segurança",
      estoque: 20
    }
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

export default router;

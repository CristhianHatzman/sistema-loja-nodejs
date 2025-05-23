import express from "express";
const router = express.Router();

router.get("/pedidos", (req, res) => {

  const pedidos = [
    { numero: '#0005125', cliente: "Carlos Eduardo Martins", preco: 1599.00, quantidade: 1, produto: "Monitor Gamer AOC 27” com 165Hz e 1ms de resposta", status: "Em Trânsito" },
    { numero: '#0005126', cliente: "Maria Clara Rodrigues", preco: 4499.99, quantidade: 1, produto: "Smartphone Samsung Galaxy S23 com 256GB de armazenamento", status: "Entregue" },
    { numero: '#0005127', cliente: "Fernanda Lima da Costa", preco: 3899.90, quantidade: 1, produto: "Notebook Dell Inspiron com Intel Core i5 e SSD de 512GB", status: "Em Sepração" },
    { numero: '#0005128', cliente: "Paulo Henrique Souza", preco: 279.98, quantidade: 2, produto: "Mouse Gamer Logitech G203 com RGB e 8000 DPI", status: "Entregue" },
    { numero: '#0005129', cliente: "Juliana Ribeiro de Andrade", preco: 249.90, quantidade: 1, produto: "Teclado Mecânico Husky Blizzard com switches red", status: "Em Trânsito" },
    { numero: '#0005130', cliente: "Mateus Oliveira Pinto", preco: 379.90, quantidade: 1, produto: "HD Externo Seagate 2TB USB 3.0", status: "Em Sepração" },
    { numero: '#0005131', cliente: "Larissa Ferreira Gomes", preco: 399.00, quantidade: 1, produto: "SSD Kingston NV2 1TB NVMe PCIe 4.0", status: "Entregue" },
    { numero: '#0005132', cliente: "Rafael Nascimento Lopes", preco: 199.90, quantidade: 1, produto: "Roteador Intelbras Wi-Fi 5 com 1200Mbps de velocidade", status: "Em Sepração" },
    { numero: '#0005133', cliente: "Beatriz Santos Menezes", preco: 2299.90, quantidade: 1, produto: "Tablet Xiaomi Pad 6 com tela de 11” e 256GB", status: "Entregue" },
    { numero: '#0005134', cliente: "André Luiz Carvalho", preco: 229.90, quantidade: 1, produto: "Caixa de Som Bluetooth JBL GO 3 à prova d’água", status: "Em Trânsito" },
    { numero: '#0005135', cliente: "Camila Rocha Farias", preco: 399.00, quantidade: 1, produto: "Webcam Logitech C920 Full HD com microfone estéreo", status: "Em Sepração" },
    { numero: '#0005136', cliente: "Lucas Almeida Rezende", preco: 1099.00, quantidade: 1, produto: "Impressora Multifuncional Epson EcoTank L3250 Wi-Fi", status: "Em Trânsito" },
    { numero: '#0005137', cliente: "Gabriela Monteiro Dias", preco: 267.00, quantidade: 3, produto: "Carregador Turbo com entrada USB-C 33W", status: "Entregue" }
  ];
  
      

  res.render("pedidos", {
    pedidos: pedidos,
  });
});

export default router;
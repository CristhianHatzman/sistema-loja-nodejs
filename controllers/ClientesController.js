import express from "express";
const router = express.Router();

router.get("/clientes", (req, res) => {

    const clientes = [
        { nome: "João Pedro da Silva Soares", cpf: "250.122.252-12", telefone: "(13) 99820-1224", endereco: "Rua dos Imigrantes, Nº 512, Jardim Brasil" },
        { nome: "Maria Clara Rodrigues", cpf: "123.456.789-01", telefone: "(11) 98888-1122", endereco: "Rua das Flores, Nº 45, Vila Mariana" },
        { nome: "Carlos Eduardo Martins", cpf: "321.654.987-22", telefone: "(21) 99777-3344", endereco: "Av. Atlântica, Nº 2000, Copacabana" },
        { nome: "Fernanda Lima da Costa", cpf: "456.789.123-00", telefone: "(31) 99811-4455", endereco: "Rua Ouro Preto, Nº 789, Funcionários" },
        { nome: "Paulo Henrique Souza", cpf: "741.852.963-10", telefone: "(47) 99666-7788", endereco: "Rua Blumenau, Nº 32, Centro" },
        { nome: "Juliana Ribeiro de Andrade", cpf: "963.852.741-55", telefone: "(51) 99123-3344", endereco: "Rua das Laranjeiras, Nº 123, Petrópolis" },
        { nome: "Mateus Oliveira Pinto", cpf: "111.222.333-44", telefone: "(61) 99999-1234", endereco: "Quadra 205 Sul, Bloco C, Plano Piloto" },
        { nome: "Larissa Ferreira Gomes", cpf: "222.333.444-55", telefone: "(85) 98765-4321", endereco: "Av. Beira Mar, Nº 1010, Meireles" },
        { nome: "Rafael Nascimento Lopes", cpf: "333.444.555-66", telefone: "(41) 99111-2233", endereco: "Rua XV de Novembro, Nº 888, Centro" },
        { nome: "Beatriz Santos Menezes", cpf: "444.555.666-77", telefone: "(19) 99789-4567", endereco: "Av. Brasil, Nº 59, Jardim Chapadão" },
        { nome: "André Luiz Carvalho", cpf: "555.666.777-88", telefone: "(16) 99654-3210", endereco: "Rua São João, Nº 321, Jardim América" },
        { nome: "Camila Rocha Farias", cpf: "666.777.888-99", telefone: "(12) 99543-7890", endereco: "Rua das Palmeiras, Nº 100, Centro" },
        { nome: "Lucas Almeida Rezende", cpf: "777.888.999-00", telefone: "(27) 99876-5432", endereco: "Av. Vitória, Nº 1200, Enseada" },
        { nome: "Gabriela Monteiro Dias", cpf: "888.999.000-11", telefone: "(62) 99444-2233", endereco: "Rua T-9, Nº 876, Setor Bueno" },
        { nome: "Bruno César Martins", cpf: "999.000.111-22", telefone: "(17) 99234-5566", endereco: "Rua da Saudade, Nº 77, Centro" },
        { nome: "Isabela Cristina Souza", cpf: "159.753.486-30", telefone: "(14) 99112-9988", endereco: "Rua Dom Pedro I, Nº 203, Vila Nova" },
        { nome: "Henrique Melo Barbosa", cpf: "357.159.258-41", telefone: "(65) 99776-1122", endereco: "Av. das Torres, Nº 3000, Cristo Rei" },
        { nome: "Letícia Borges Lima", cpf: "951.753.852-63", telefone: "(27) 99321-4455", endereco: "Rua da Lama, Nº 222, Jardim da Penha" },
        { nome: "Thiago Antunes Silveira", cpf: "654.987.321-77", telefone: "(13) 99631-7777", endereco: "Av. Conselheiro Nébias, Nº 300, Boqueirão" },
        { nome: "Aline Costa Barros", cpf: "852.963.741-36", telefone: "(11) 99877-6633", endereco: "Rua Frei Caneca, Nº 90, Bela Vista" },
        { nome: "Marcelo Henrique Prado", cpf: "147.258.369-47", telefone: "(92) 99456-3212", endereco: "Av. Eduardo Ribeiro, Nº 876, Centro" },
        { nome: "Tatiane Souza Corrêa", cpf: "369.258.147-89", telefone: "(95) 99190-8877", endereco: "Rua das Castanheiras, Nº 43, Asa Sul" },
        { nome: "Diego Ramos Ferreira", cpf: "741.963.852-25", telefone: "(98) 99200-5566", endereco: "Rua da Paz, Nº 15, Cohama" },
        { nome: "Amanda Lopes Vieira", cpf: "258.147.369-14", telefone: "(83) 99345-6788", endereco: "Rua das Acácias, Nº 10, Altiplano" },
        { nome: "Ricardo Almeida Torres", cpf: "321.789.654-77", telefone: "(67) 99622-3344", endereco: "Av. Afonso Pena, Nº 800, Centro" }
      ];
      

  res.render("clientes", {
    clientes: clientes,
  });
});

export default router;
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define('produtos', {
    nome:{
        type: Sequelize.STRING,
        allowNull: true
    },
    preco:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: true
    },
    estoque:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
})
Produto.sync({ force: false });

export default Produto;
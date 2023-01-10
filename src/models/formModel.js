const formConfig = require('../config/form-config');
const sequelize = require('../config/database');

require('dotenv').config();

sequelize.logging = process.env.SQL_LOGGING === 'true';

const Model = sequelize.define('model', formConfig.columns);

async function criarTabela() {
  try {
    await Model.sync({ force: process.env.RECREATE_TABLE });
    console.log('Tabela criada');
  } catch (error) {
    console.error(error);
  }
}

criarTabela();
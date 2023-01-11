const { arquivo_de_configuracao } = require("../config/config-form");
const { sequelize } = require("../config/database");
const { util } = require("../public/util");

require("dotenv").config();

sequelize.logging = process.env.SQL_LOGGING === "true";

module.exports = {
  Model: sequelize.define(
    `${process.env.NAME_INIT_TABLE}`,
    util.createNewObjectModelSeq(arquivo_de_configuracao)
  ),
};

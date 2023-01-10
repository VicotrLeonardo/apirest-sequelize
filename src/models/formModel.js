const formConfig = require("../config/config-form");
const { sequelize } = require("../config/database");
const { util } = require("../public/util");

require("dotenv").config();

sequelize.logging = process.env.SQL_LOGGING === "true";

const Model = sequelize.define(
  `${process.env.NAME_INIT_TABLE}`,
  util.createNewObjectModelSeq(formConfig)
);

module.exports = {
  async criarTabela() {
    try {
      await Model.sync({ force: process.env.RECREATE_TABLE });
    } catch (error) {
      console.error(error);
    }
  },
  Model: Model,
};

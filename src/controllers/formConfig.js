const { arquivo_de_configuracao } = require("../config/config-form");
const { Model } = require("../models/formModel");
module.exports = {
  async getConfigForm(req, res) {
    if (arquivo_de_configuracao.length) {
      return res.json(arquivo_de_configuracao);
    } else
      return res.status(500).send({ message: "Arquivo de Configuração Vázio" });
  },

  async postModel(req, res) {
    try {
      await Model.create(req.body);
      res.status(200).send("Criado!!");
    } catch (error) {}
  },
};

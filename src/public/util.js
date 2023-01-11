require("dotenv").config();

module.exports = {
  util: {
    createNewObjectModelSeq: (arquivo_de_configuracao) => {
      return arquivo_de_configuracao.reduce((acc, currentValue) => {
        acc[currentValue.name] = {
          field: currentValue.label,
          type: currentValue.type === "STRING" || "string" ? "TEXT" : "INTEGER",
          required: currentValue.required,
        };
        return acc;
      }, {});
    },
    async createInitTable(Model) {
      try {
        await Model.sync({ force: process.env.RECREATE_TABLE });
      } catch (error) {
        console.error(error);
      }
    },
  },
};

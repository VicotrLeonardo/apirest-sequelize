module.exports = {
  util: {
    createNewObjectModelSeq: ({ arquivo_de_configuracao }) => {
      return arquivo_de_configuracao.reduce((acc, currentValue) => {
        acc[currentValue.name] = {
          field: currentValue.label,
          type: currentValue.type === "STRING" || "string" ? "TEXT" : "INTEGER",
          required: currentValue.required,
        };
        return acc;
      }, {});
    },
  },
};

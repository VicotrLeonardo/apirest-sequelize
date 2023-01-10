const formConfig = require("../controllers/formConfig");

module.exports = (app) => {
  app.get("/formConfig", formConfig.getConfigForm);
  app.post("/formConfig", formConfig.postModel);
};

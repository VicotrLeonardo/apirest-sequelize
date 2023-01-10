const formConfig = require('../controllers/formConfig');

module.exports = (app) => {
    app.get('/formConfig', formConfig.getFormConfig);
  };
  
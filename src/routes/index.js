const formConfigRoute = require('../routes/formConfig')
const configRoute = require('../routes/Config')

module.exports = (app) => {
    // routes
    formConfigRoute(app)
    configRoute(app)
  };
  
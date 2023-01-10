const FormConfigRoute = require("./formConfig");
const Home = require("./home");

module.exports = (app) => {
  // routes
  FormConfigRoute(app);
  Home(app);
};

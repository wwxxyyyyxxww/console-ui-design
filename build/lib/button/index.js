"use strict";
var button = require("./button.js");
button.install = (app) => {
  app.component(button.name, button);
  return app;
};
module.exports = button;

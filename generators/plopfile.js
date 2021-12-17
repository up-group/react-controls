const component = require('./component/index');
const componentTest = require('./component/test/index');

module.exports = function ConfigurationPlop(plop) {
  plop.addHelper('upperCase', text => text.toUpperCase());
  plop.setGenerator('Component', component.generator);
  plop.setGenerator('Test', componentTest.generator);
};

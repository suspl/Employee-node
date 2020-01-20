const EmpResolver = require('./employee');
const ConfigResolver = require('./configtable');

const rootResolver = {
  ...EmpResolver,
  ...ConfigResolver
};

module.exports = rootResolver;

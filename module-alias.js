const moduleAlias = require("module-alias");

const aliasMapping = {
  "@": "../",
  "#": "../../",
  "*": "../../../",
};

Object.entries(aliasMapping).forEach(([alias, target]) => {
  moduleAlias.addAlias(alias, target);
});

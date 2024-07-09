const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("node-complete","root","1234", {
  dialect: "mysql",
  host: "localhost",
  logging:false,
});

module.exports=sequelize
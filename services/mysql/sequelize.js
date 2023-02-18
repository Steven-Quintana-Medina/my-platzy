const Sequelize = require("sequelize");
const config = require("config");

const sequelize = new Sequelize(config.get("mysql"));

sequelize.sync({force:false}).then(()=>{
	console.log("synchronized tables");
});

module.exports = sequelize;
var generators = require("yeoman-generator");

module.exports = generators.Base.extend({
	help : function() {
		console.log("Usage:");
		console.log(
			"\t yo angular-nmi:constant\tCreates a new Constant\n"
			+ "\t yo angular-nmi:controller\tCreates a new Controller\n"
			+ "\t yo angular-nmi:factory\t\tCreates a new Factory\n"
			+ "\t yo angular-nmi:module\t\tCreates a new Module\n"
			+ "\t yo angular-nmi:route\t\tCreates a new Route configuration\n"
			+ "\t yo angular-nmi:view\t\tCreates a new HTML View\n"
			+ "\n"
			+ "\t yo angular-nmi:feature\t\tCreates a new Module, Constant, and Route\n"
			+ "\t yo angular-nmi:vc\t\tCreates a new HTML View and Controller\n"
		);
	}
});

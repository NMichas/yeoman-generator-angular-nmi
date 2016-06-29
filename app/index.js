var generators = require("yeoman-generator");
var i18n = require("i18n");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));
var colog = require("colog");
var parsedPackage = require('../package.json');

module.exports = generators.Base.extend({
	initializing : function() {
		// Initialise translations.
		util.setupLexicon(path.join(generatorRoot, "locales"));
	},

	help : function() {
		colog.info("angular-nmi v" + parsedPackage.version);
		colog.info(i18n.__("usage") + ":");

		colog.info(
			"\t yo angular-nmi:constant\t" + i18n.__("creates_a_new_constant") + "\n"
			+ "\t yo angular-nmi:controller\t" + i18n.__("creates_a_new_controller") + "\n"
			+ "\t yo angular-nmi:factory\t\t" + i18n.__("creates_a_new_factory") + "\n"
			+ "\t yo angular-nmi:module\t\t" + i18n.__("creates_a_new_module") + "\n"
			+ "\t yo angular-nmi:route-ui\t" + i18n.__("creates_a_new_route_configuration") + "\n"
			+ "\t yo angular-nmi:view\t\t" + i18n.__("creates_a_new_html_view") + "\n"
			+ "\n"
			+ "\t yo angular-nmi:feature\t\t" + i18n.__("creates_a_new_module_constant_and_route") + "\n"
			+ "\t yo angular-nmi:vc\t\t" + i18n.__("creates_a_new_html_view_and_controller") + "\n"
		);
	}
});

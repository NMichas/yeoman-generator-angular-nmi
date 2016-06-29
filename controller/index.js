"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
	},
	
	initializing: function() {
		// Call the base-generator to perform prompting and checking.
		this.composeWith("angular-nmi:base3", {
			args : this.arguments 
		});
	},
	
	writing: function() {
		// Create .js.
		this.fs.copyTpl(
			this.templatePath("../../templates/controller.tpl.js"),
			this.destinationPath(this.config.get("resourcePath") + ".controller.js"), {
				resourceName: this.config.get("resourceName"),
				moduleName : this.config.get("resourceModule"),
				resourceNameJS: this.config.get("resourceNameForJS") + "Controller",
				
				controller_controller: i18n.__("controller_controller"),
				controller_local_variables: i18n.__("controller_local_variables"),
				controller_variables_exports: i18n.__("controller_variables_exports"),
				controller_functions_exports: i18n.__("controller_functions_exports"),
				controller_calling_activation: i18n.__("controller_calling_activation"),
				controller_activation: i18n.__("controller_activation"),
				controller_scope_destroy: i18n.__("controller_scope_destroy"),
				controller_functions: i18n.__("controller_functions") 
			}
		);
	}
	
});

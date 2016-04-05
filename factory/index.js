"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
		
		// Define arguments.
		this.argument("resource", { type: String, required: true });
		
		// Define options.
		this.option("root");
	},
	
	initializing: function() {
		// Call the base-generator to perform prompting and checking.
		this.composeWith("angular-nmi:base", 
			{ 
				options: {
					root: this.options.root ? true : false
				},
				args: [this.resource]
			});
	},
	
	writing: function() {
		// Create .js.
		this.fs.copyTpl(
			this.templatePath("../../templates/factory.tpl.js"),
			this.destinationPath(this.config.get("resourcePath") + ".service.js"), {
				resourceName: this.config.get("resourceName"),
				moduleName: this.config.get("moduleName"),
				resourceNameJS: this.config.get("resourceNameForJS") + "Service",
				
				factory_factory: i18n.__("factory_factory"),
				factory_local_variables: i18n.__("factory_local_variables"),
				factory_local_functions: i18n.__("factory_local_functions"),
				factory_exported: i18n.__("factory_exported")
			}
		);
	}
	
});

"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
	},
	
	initializing: function() {
		// Call the base-generator to perform prompting and checking.
		this.composeWith("angular-nmi:base2", {
			args : this.arguments 
		});
	},
	
	writing: function() {
		// Create .js.
		this.fs.copyTpl(
			this.templatePath("../../templates/module.tpl.js"),
			this.destinationPath(this.config.get("resourcePath") + ".module.js"), {
				resourceName : this.config.get("resourceName"),
				
				module_module: i18n.__("module_module")
			}
		);		
	}
	
});

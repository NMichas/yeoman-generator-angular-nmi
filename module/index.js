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
		var filename = this.config.get("resourcePath").substring(this.config.get("resourcePath").lastIndexOf(".") + 1);
		this.fs.copyTpl(
			this.templatePath("../../templates/module.tpl.js"),
			this.destinationPath(filename + ".module.js"), {
				resourceName : this.config.get("resourceModule"),
				filename: this.config.get("resourceName") + ".module.js",
				
				module_module: i18n.__("module_module")
			}
		);
	}

});

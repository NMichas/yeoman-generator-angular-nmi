"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));
var appRoot = path.join(".", util.appSourceRoot);

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
	},
	
	initializing: function() {
		// Call the base-generator to perform prompting and checking.
		this.composeWith("angular-nmi:base", {
			args : this.arguments 
		});
	},
	
	writing: function() {
		// Create .js.
		this.fs.copyTpl(
			this.templatePath("../../templates/module.tpl.js"),
			this.config.get("resourcePath") + ".module.js", 
			{
				resourceName : this.config.get("resourceName"),
				moduleName : this.config.get("resourceModule"),
				
				module_module: i18n.__("module_module")
			}
		);
	}
	
});

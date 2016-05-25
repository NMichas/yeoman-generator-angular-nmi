"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");

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
			this.templatePath("../../templates/route-ui.tpl.js"),
			this.destinationPath(this.config.get("resourcePath") + ".route.js"), {
				resourceName: this.config.get("resourceName"),
				moduleName : this.config.get("resourceModule"),
				
				route_routes_configuration: i18n.__("route_routes_configuration")
			}
		);
	}
	
});

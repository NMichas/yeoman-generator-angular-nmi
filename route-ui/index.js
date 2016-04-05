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
			this.templatePath("../../templates/route-ui.tpl.js"),
			this.destinationPath(this.config.get("resourcePath") + ".route.js"), {
				resourceName: this.config.get("resourceName"),
				moduleName: this.config.get("moduleName"),
				
				route_routes_configuration: i18n.__("route_routes_configuration")
			}
		);
	}
	
});

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
			this.templatePath("../../templates/view.tpl.html"),
			this.destinationPath(this.config.get("resourcePath") + ".html"), {
				resourceName: this.config.get("resourceName"),
				
				view_hw: i18n.__("view_hw")
			}
		);
	}
	
});

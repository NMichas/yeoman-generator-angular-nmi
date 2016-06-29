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
			this.templatePath("../../templates/view.tpl.html"),
			this.destinationPath(this.config.get("resourcePath") + ".html"), {
				resourceName: this.config.get("resourceName"),
				
				view_hw: i18n.__("view_hw")
			}
		);
	}
	
});

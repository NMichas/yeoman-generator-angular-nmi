"use strict"

var generators = require("yeoman-generator");
var util = require("../app/util");
var mkdirp = require("mkdirp");

module.exports = generators.Base.extend({
	initializing: function() {
		
	},
	
	prompting: function() {
		// Get the name of the component to create from CLI args.
		this.name = arguments[0]
		
		// Prepare prompts.
		var done = this.async();
		var prompts = [];
		
		if (!this.name) {
			prompts.push({
				type: "input",
				name: "name",
				message: "Name",
				default: "app.foo"
			})
		}
		
		// Show prompts.
		if (prompts.length > 0) {
			this.prompt(prompts, function(answers) {
					this.name = answers.name;
					done();
				}.bind(this));
		} else {
			done();
		}
	},

	configuring: function() {
		this.name = this.name.trim();
	},
	
	compose: function() {
		var module = util.extractModuleName(this.name);
		var resource = util.extractResourceName(this.name);
		
		this.composeWith("angular-nmi:view", {args: [this.name]});
		this.composeWith("angular-nmi:controller", {args: [this.name]});
	}
});

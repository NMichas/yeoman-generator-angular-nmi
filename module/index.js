"use strict"

var generators = require("yeoman-generator");
var mkdirp = require("mkdirp");
var util = require("../app/util");
var colog = require("colog");
var mkdirp = require("mkdirp");

module.exports = generators.Base.extend({
	initializing: function() {
		// Check prerequisites before starting.
		if (!util.prereqCheck()) {
			process.exit(1);
		};
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
				default: "app.fooModule"
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
		
		// Check a parent module has been specified.
		if (!util.isModuleSpecified(this.name)) {
			colog.error("[ERROR] Could not find the name of the parent module " +
					"of your resource. Prefix your resource with the parent " +
					"module's name, e.g. app.contacts, admin.contacts.");
			process.exit(1);
		}
	},
	
	writing: function() {
		var outputPath = this.name.replace(/\./g, "/") + "/" 
			+ util.extractResourceName(this.name) + ".module.js";
		
		// Create module's dir.
		mkdirp.sync(this.name.replace(/\./g, "/"));
		
		// Create module .js.
		this.fs.copyTpl(
			this.templatePath("../../templates/module.tpl.js"),
			this.destinationPath(outputPath), {
				resourceURI: this.name
			}
		);
	}
	
});

"use strict"

var generators = require("yeoman-generator");
var util = require("../app/util");
var colog = require("colog");

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
		
		// Check a module has been specified.
		if (!util.isModuleSpecified(this.name)) {
			colog.error("[ERROR] Could not find the name of the parent module " +
					"of your resource. Prefix your resource with the parent " +
					"module's name, e.g. app.contacts, admin.contacts.");
			process.exit(1);
		}
		
		// Check the module exists.
		if (!util.isModuleFolderPresent(this.name)) {
			colog.error("[ERROR] Module directory does not exist.");
			process.exit(1);
		}
	},
	
	writing: function() {
		var outputPath = util.convertToPath(this.name) + ".factory.js";
		
		// Create .js.
		this.fs.copyTpl(
			this.templatePath("../../templates/factory.tpl.js"),
			this.destinationPath(outputPath), {
				resourceURI: this.name,
				moduleName: util.extractModuleName(this.name),
				resourceNameJS: util.resourceNameForJS(this.name) + "Factory"
			}
		);
	}
	
});

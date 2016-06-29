"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));
var colog = require("colog");
var appRoot = path.join(".", util.appSourceRoot);

//A base generator to check arguments and prompt for missing ones.
//2-args version.
module.exports = generators.Base.extend({
	constructor : function() {
		
		generators.Base.apply(this, arguments);
		
		// Define CLI arguments.
		if (arguments["0"].length > 0) {
			this.argument("resourcePath", {
				type : String,
				required : true
			});
			this.argument("resourceName", {
				type : String,
				required : true
			});
		}
	},
	
	initializing : function() {
		// Initialise translations.
		util.setupLexicon(path.join(generatorRoot, "locales"));
	},

	prompting : function() {
		// Prepare prompts.
		var done = this.async();
		var prompts = [];

		if (!this.resourcePath) {
			prompts.push({
				type : "input",
				name : "resourcePath",
				message : "Path location",
				required : true
			});
		}
		
		if (!this.resourceName) {
			prompts.push({
				type : "input",
				name : "resourceName",
				message : "Resource name",
				required : true
			});
		}
		
		// Show prompts.
		if (prompts.length > 0) {
			this.prompt(prompts, function(answers) {
				if (!this.resourcePath) {
					this.resourcePath = answers.resourcePath;
				}
				if (!this.resourceName) {
					this.resourceName = answers.resourceName;
				}
				done();
			}.bind(this));
		} else {
			done();
		}
	},

	configuring : function() {
		// Trim input.
		this.resourcePath = this.resourcePath.trim(); 
		this.resourceName = this.resourceName.trim();
		
		// Set arguments to global config.
		this.config.set({
			resourcePath : this.resourcePath + path.sep + this.resourceName,
			resourceName : this.resourceName,
			resourceNameForJS : util.resourceNameForJS(this.resourceName),
		});
	}

});

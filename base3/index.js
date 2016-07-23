"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));
var colog = require("colog");
var appRoot = path.join(".", util.appSourceRoot);

// A base generator to check arguments.
module.exports = generators.Base.extend({
	constructor : function() {
		generators.Base.apply(this, arguments);
		
		// Define CLI arguments.
		this.argument("resourcePath", {
			type : String,
			required : true
		});
		this.argument("resourceModule", {
			type : String,
			required : true
		});
		this.argument("resourceName", {
			type : String,
			required : true
		});
	},
	
	initializing : function() {
		// Initialise translations.
		util.setupLexicon(path.join(generatorRoot, "locales"));
	},

	configuring : function() {
		// Trim input.
		this.resourcePath = this.resourcePath.trim(); 
		this.resourceModule = this.resourceModule.trim(); 
		this.resourceName = this.resourceName.trim();
		
		// Set arguments to global config.
		this.config.set({
			resourcePath : this.resourcePath + path.sep + this.resourceName,
			resourceModule : this.resourceModule,
			resourceName : this.resourceName,
			resourceNameForJS : util.resourceNameForJS(this.resourceName),
		});
	}

});

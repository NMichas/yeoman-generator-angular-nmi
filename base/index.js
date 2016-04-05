"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));
var colog = require("colog");
var appRoot = path.join(".", util.appSourceRoot);

module.exports = generators.Base.extend({
	initializing : function() {
		// Initialise translations.
		util.setupLexicon(path.join(generatorRoot, "locales"));
	},

	constructor : function() {
		generators.Base.apply(this, arguments);

		// Define CLI arguments.
		this.argument("resource", {
			type : String,
			required : true
		});

		// Define options.
		this.option("root");
	},

	prompting : function() {
		// Prepare prompts.
		var done = this.async();
		var prompts = [];

		if (!this.resource) {
			prompts.push({
				type : "input",
				name : "resource",
				message : "Resource name",
				required : true
			});
		}

		// Show prompts.
		if (prompts.length > 0) {
			this.prompt(prompts, function(answers) {
				this.module = answers.module;
				this.resource = answers.resource;
				done();
			}.bind(this));
		} else {
			done();
		}
	},

	configuring : function() {
		this.resource = this.resource.trim();
		var resourceName = util.extractResourceName(this.resource);
		var moduleName = util.extractModuleName(this.resource);

		// If this is a root-level resource, check that a sub-module is not
		// defined and calculate the output path of the resource.
		var resourcePath;
		if (this.options.root) {
			if (this.resource.indexOf(".") > -1) {
				colog.error(i18n.__("error") + " "
						+ i18n.__("no_sub_module_for_root"));
				process.exit(1);
			}
			resourcePath = path.join(appRoot, resourceName);
		} else {
			if (this.resource.indexOf(".") == -1) {
				colog.error(i18n.__("error") + " "
						+ i18n.__("root_level_without_sub_module"));
				process.exit(1);
			}
			resourcePath = path.join(appRoot, util.toPath(moduleName
					.substring(moduleName.indexOf(".") + 1)), resourceName);
		}

		// Update config storage to exchange values with the caller of this
		// sub-generator.
		this.config.set("moduleName", moduleName);
		this.config.set("resourceName", resourceName);
		this.config.set("resourceNameForJS", util
				.resourceNameForJS(resourceName));
		this.config.set("resourcePath", resourcePath);
	}

});

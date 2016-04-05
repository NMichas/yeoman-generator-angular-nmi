"use strict";

var generators = require("yeoman-generator");
var i18n = require("i18n");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));
var appRoot = path.join(".", util.appSourceRoot);

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
		// Resource-path needs to be overwritten in this case, since a module
		// does not create a resource under a module but the module itself.
		var resourcePath = function(resource) {
			var moduleName = resource;
			var resourceName = resource;
			if (moduleName.indexOf(".") > -1) {
				return path.join(appRoot, util.toPath(moduleName.substring(moduleName.indexOf(".") + 1)),  
						resourceName.substring(resourceName.lastIndexOf(".") + 1) + ".module.js");
			} else {
				return path.join(appRoot, resourceName + ".module.js");
			}
		};
		
		// Create .js.
		this.fs.copyTpl(
			this.templatePath("../../templates/module.tpl.js"),
			this.destinationPath(resourcePath(this.resource)), 
			{
				resourceName: this.resource,
				moduleName: this.config.get("moduleName"),
				
				module_module: i18n.__("module_module")
			}
		);
	}
	
});

"use strict";

var generators = require("yeoman-generator");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));

module.exports = generators.Base.extend({
	constructor : function() {
		generators.Base.apply(this, arguments);
	},

	initializing : function() {
		// Call the base-generator to perform prompting and checking.
		this.composeWith("angular-nmi:base3", {
			args : this.arguments
		});
	},

	writing : function() {
		this.composeWith("angular-nmi:view", {
			args : this.arguments
		});

		this.composeWith("angular-nmi:controller", {
			args : this.arguments
		});
	}

});

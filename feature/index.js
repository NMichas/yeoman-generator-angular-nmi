"use strict";

var generators = require("yeoman-generator");
var path = require("path");
var generatorRoot = path.join(__dirname, "..", "app");
var util = require(path.join(generatorRoot, "lib", "util"));

module.exports = generators.Base.extend({
	constructor : function() {
		generators.Base.apply(this, arguments);

		// Define arguments.
		this.argument("resource", {
			type : String,
			required : true
		});

		// Define options.
		this.option("root");
	},

	initializing : function() {
		// Call the base-generator to perform prompting and checking.
		this.composeWith("angular-nmi:base", {
			options : {
				root : this.options.root ? true : false
			},
			args : [ this.resource ]
		});
	},

	writing : function() {
		this.composeWith("angular-nmi:module", {
			options : {
				root : this.options.root ? true : false
			},
			args : [ this.resource ]
		});

		this.composeWith("angular-nmi:constant", {
			options : {
				root : this.options.root ? true : false
			},
			args : [ util.suffixRepeat(this.resource) ]
		});

		this.composeWith("angular-nmi:route-ui", {
			options : {
				root : this.options.root ? true : false
			},
			args : [ util.suffixRepeat(this.resource) ]
		});
	}

});

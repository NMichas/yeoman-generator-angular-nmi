"use strict";

var path = require("path");
var fs = require("fs");
var helpers = require("yeoman-generator").test;
var temp = require("temp");
var assert = require("yeoman-assert");
var exec = require("child_process").exec;
var async = require("async");
var mkdirp = require("mkdirp");

describe("angular-nmi", function() {
	
	describe("default", function () {
		before(function (done) {
			temp.track();
			var workspace = context.workspace = temp.mkdirSync();
			console.log("    Using temporary folder: ", workspace);
			var deps = [path.join(__dirname, "../view"), 
			            path.join(__dirname, "../controller")];
			helpers.testDirectory(workspace, function () {
				helpers.run(path.join(__dirname, "../vc"))
					.withArguments(["app.foo"])
					.withGenerators(deps)
					.on("ready", function(generator) {
						mkdirp.sync("app");
					})
					.on("end", done);
			});
		});
		
		it("creates expected files", function () {
			assert.file(["app/foo.html", "app/foo.controller.js"]);
		});
	});
});

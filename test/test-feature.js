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
			var deps = [path.join(__dirname, "../module"), 
			            path.join(__dirname, "../constant"), 
			            path.join(__dirname, "../route")];
			helpers.testDirectory(workspace, function () {
				helpers.run(path.join(__dirname, "../feature"))
					.withArguments(["app.foo"])
					.withGenerators(deps)
					.on("ready", function(generator) {				
					})
					.on("end", done);
			});
		});
		
		it("creates expected files", function () {
			assert.file(["app/foo/foo.module.js", "app/foo/foo.constant.js", "app/foo/foo.route.js"]);
		});
	});
});

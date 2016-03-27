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
		var targetFile = "app/foo/foo.module.js";
		
		before(function (done) {
			temp.track();
			var workspace = context.workspace = temp.mkdirSync();
			console.log("    Using temporary folder: ", workspace);
			
			helpers.testDirectory(workspace, function () {
				helpers.run(path.join(__dirname, "../module"))
					.withArguments([ "app.foo" ])
					.on("ready", function(generator) {
						mkdirp.sync("app");
					})
					.on("end", done);
			});
			
		});
		
		it("creates expected files", function () {
			assert.file(targetFile);
		});
		
		it("contains the proper content", function () {
			assert.fileContent(targetFile, ".module(\"app.foo\",");
		});
	});
});

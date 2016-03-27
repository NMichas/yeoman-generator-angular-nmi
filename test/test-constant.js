"use strict";

var path = require("path");
var fs = require("fs");
var assert = require("yeoman-assert");
var exec = require("child_process").exec;
var async = require("async");
var mkdirp = require("mkdirp");
var testLib = require("lib/test-lib");

describe("angular-nmi", function() {
	
	describe("default", function () {
		var targetFile = "app/const1.constant.js";
		
		before(function (done) {
			testLib.genRun(done, "constant", ["app.const1"]);
		});
		
		it("creates expected files", function () {
			assert.file(targetFile);
		});
		
		it("contains the proper content", function () {
			assert.fileContent(targetFile, ".module(\"app\")");
			assert.fileContent(targetFile, ".constant(\"Const1Constant\", constant);");
		});
	});
});


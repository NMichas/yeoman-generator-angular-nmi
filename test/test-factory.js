"use strict";

var helpers = require("yeoman-generator").test;
var assert = require("yeoman-assert");
var testLib = require("./lib/test-lib");

describe("angular-nmi", function() {
	
	describe("factory", function () {
		var targetFile = "app/foo.factory.js";
		
		before(function (done) {
			testLib.genRun(done, "factory", ["app.foo"], true, []);
		});
		
		it("creates expected files", function () {
			assert.file(targetFile);
		});
		
		it("contains the proper content", function () {
			assert.fileContent(targetFile, ".module(\"app\")");
			assert.fileContent(targetFile, ".factory(\"FooFactory\", FooFactory);");
		});
	});
});

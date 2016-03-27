"use strict";

var assert = require("yeoman-assert");
var testLib = require("./lib/test-lib");

describe("angular-nmi", function() {
	
	describe("module", function () {
		var targetFile = "app/foo/foo.module.js";
		
		before(function (done) {
			testLib.genRun(done, "module", ["app.foo"], true, []);			
		});
		
		it("creates expected files", function () {
			assert.file(targetFile);
		});
		
		it("contains the proper content", function () {
			assert.fileContent(targetFile, ".module(\"app.foo\",");
		});
	});
});

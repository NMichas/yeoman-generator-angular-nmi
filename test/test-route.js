"use strict";

var assert = require("yeoman-assert");
var testLib = require("./lib/test-lib");

describe("angular-nmi", function() {
	
	describe("route", function () {
		var targetFile = "app/foo.route.js";
		
		before(function (done) {
			testLib.genRun(done, "route", ["app.foo"], true, []);
		});
		
		it("creates expected files", function () {
			assert.file(targetFile);
		});
		
		it("contains the proper content", function () {
			assert.fileContent(targetFile, ".module(\"app\")");
			assert.fileContent(targetFile, ".config(routerConfig);");
		});
	});
});

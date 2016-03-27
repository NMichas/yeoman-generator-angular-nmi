"use strict";

var assert = require("yeoman-assert");
var testLib = require("./lib/test-lib");

describe("angular-nmi", function() {
	
	describe("constants", function () {
		var targetFile = "app/const1.constant.js";
		
		before(function (done) {
			testLib.genRun(done, "constant", ["app.const1"], true, []);
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


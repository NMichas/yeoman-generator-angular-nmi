"use strict";

var assert = require("yeoman-assert");
var testLib = require("./lib/test-lib");

describe("angular-nmi", function() {
	
	describe("view", function () {
		var targetFile = "app/foo.html";
		
		before(function (done) {
			testLib.genRun(done, "view", ["app.foo"], true, []);
		});
		
		it("creates expected files", function () {
			assert.file(targetFile);
		});
	});
});

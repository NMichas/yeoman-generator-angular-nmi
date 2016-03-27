"use strict";

var helpers = require("yeoman-generator").test;
var assert = require("yeoman-assert");
var testLib = require("./lib/test-lib");
var path = require("path");

describe("angular-nmi", function() {
	
	describe("feature", function () {
		before(function (done) {
			var deps = [path.join(__dirname, "../module"), 
			            path.join(__dirname, "../constant"), 
			            path.join(__dirname, "../route")];
			testLib.genRun(done, "feature", ["app.foo"], true, deps);
		});
		
		it("creates expected files", function () {
			assert.file(["app/foo/foo.module.js", "app/foo/foo.constant.js", "app/foo/foo.route.js"]);
		});
	});
});

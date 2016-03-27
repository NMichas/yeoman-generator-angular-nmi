"use strict";

var helpers = require("yeoman-generator").test;
var assert = require("yeoman-assert");
var testLib = require("./lib/test-lib");
var path = require("path");

describe("angular-nmi", function() {
	
	describe("vc", function () {
		before(function (done) {
			var deps = [path.join(__dirname, "../view"), 
			            path.join(__dirname, "../controller")];
			testLib.genRun(done, "vc", ["app.foo"], true, deps);
		});
		
		it("creates expected files", function () {
			assert.file(["app/foo.html", "app/foo.controller.js"]);
		});
	});
});

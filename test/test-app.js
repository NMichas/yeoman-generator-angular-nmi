"use strict";

var helpers = require("yeoman-generator").test;
var expect = require("chai").expect;
var testLib = require("./lib/test-lib");
require("mocha-sinon");

describe("angular-nmi", function() {
	
	describe("app", function () {
		var targetFile = "app/const1.constant.js";
		
		before(function (done) {
			this.sinon.stub(console, "log");
			testLib.genRun(done, "app", [], false, []);
		});
		
		it("creates expected usage instructions", function () {
			expect( console.log.calledWith("Usage:") ).to.be.true;
		});
		
	});
});
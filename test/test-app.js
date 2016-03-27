"use strict";

var path = require("path");
var assert = require("yeoman-generator").assert;
var helpers = require("yeoman-generator").test;
var os = require("os");
var temp = require("temp");
var expect = require("chai").expect;
require("mocha-sinon");

describe("angular-nmi", function() {
	
	describe("default", function () {
		var targetFile = "app/const1.constant.js";
		
		before(function (done) {
			temp.track();
			this.sinon.stub(console, "log");
			var workspace = context.workspace = temp.mkdirSync();
			console.log("    Using temporary folder: ", workspace);
			
			helpers.testDirectory(workspace, function () {
				helpers.run(path.join(__dirname, "../app"))
					.on("ready", function(generator) {
					})
					.on("end", done);
			});
			
		});
		
		it("creates expected usage instructions", function () {
			expect( console.log.calledWith("Usage:") ).to.be.true;
		});
		
	});
});
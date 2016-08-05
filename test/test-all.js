"use strict";

require("mocha-sinon");
var expect = require("chai").expect;
var helpers = require('yeoman-test');
var os = require('os');
var colog = require("colog");
var path = require("path");
var temp = require("temp");
var assert = require("yeoman-assert");

describe("angular-nmi", function() {
	// angular-nmi:app.
	describe("app", function () {
		before(function(done) { 
			this.sinon.stub(colog, "info");
			temp.track();
			var tmpDir = temp.mkdirSync(); 
			helpers.run(path.join(__dirname, "..", "app"))
				.inDir(tmpDir)
				.on("end", done);
		});
		
		it("creates expected usage instructions", function () {
			expect(colog.info.called).to.be.true;
		});
	});
	
	// angular-nmi:constant
	describe("constant", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "constant"))
				.inDir(tmpDir)
				.withArguments("src/app/admin app.admin system")
				.withGenerators([path.join(__dirname, "..", "base3")])
				.on("end", done);
		});
		
		it("creates expected files", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.constant.js");
			assert.file(targetFile);
		});
		
		it("creates expected content", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.constant.js");
			assert.fileContent(targetFile, ".module(\"app.admin\")");
			assert.fileContent(targetFile, ".constant(\"SystemConstant\", constant);");
		});
	});
	
	// angular-nmi:controller
	describe("controller", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "controller"))
				.inDir(tmpDir)
				.withArguments("src/app/admin app.admin system")
				.withGenerators([path.join(__dirname, "..", "base3")])
				.on("end", done);
		});
		
		it("creates expected files", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.controller.js");
			assert.file(targetFile);
		});
		
		it("creates expected content", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.controller.js");
			assert.fileContent(targetFile, ".module(\"app.admin\")");
			assert.fileContent(targetFile, ".controller(\"SystemController\", SystemController);");
		});
	});
	describe("controller-with-dash", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "controller"))
			.inDir(tmpDir)
			.withArguments("src/app/admin app.admin system-check")
			.withGenerators([path.join(__dirname, "..", "base3")])
			.on("end", done);
		});
		
		it("creates expected files", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system-check.controller.js");
			assert.file(targetFile);
		});
		
		it("creates expected content", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system-check.controller.js");
			assert.fileContent(targetFile, ".module(\"app.admin\")");
			assert.fileContent(targetFile, ".controller(\"SystemCheckController\", SystemCheckController);");
		});
	});
	
	// angular-nmi:factory
	describe("factory", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "factory"))
				.inDir(tmpDir)
				.withArguments("src/app/admin app.admin system")
				.withGenerators([path.join(__dirname, "..", "base3")])
				.on("end", done);
		});
		
		it("creates expected files", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.service.js");
			assert.file(targetFile);
		});
		
		it("creates expected content", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.service.js");
			assert.fileContent(targetFile, ".module(\"app.admin\")");
			assert.fileContent(targetFile, ".factory(\"SystemService\", SystemService);");
		});
	});
	
	// angular-nmi:module
	describe("module", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "module"))
				.inDir(tmpDir)
				.withArguments("src/app/admin app.admin admin")
				.withGenerators([path.join(__dirname, "..", "base3")])
				.on("end", done);
		});
		
		it("creates expected files", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "admin.module.js");
			assert.file(targetFile);
		});
		
		it("creates expectedcontent", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "admin.module.js");
			assert.fileContent(targetFile, ".module(\"app.admin\"");
		});
	});
	
	// angular-nmi:route-ui
	describe("route-ui", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "route-ui"))
				.inDir(tmpDir)
				.withArguments("src/app/admin app.admin system")
				.withGenerators([path.join(__dirname, "..", "base3")])
				.on("end", done);
		});
		
		it("creates expected files", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.route.js");
			assert.file(targetFile);
		});
		
		it("creates expected content", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.route.js");
			assert.fileContent(targetFile, ".module(\"app.admin\"");
		});
	});
	
	// angular-nmi:view
	describe("view", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "view"))
				.inDir(tmpDir)
				.withArguments("src/app/admin system")
				.withGenerators([path.join(__dirname, "..", "base2")])
				.on("end", done);
		});
		
		it("creates expected files", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.html");
			assert.file(targetFile);
		});
		
		it("creates expected content", function () {
			var targetFile = path.join(tmpDir, "src", "app", "admin", "system.html");
			assert.fileContent(targetFile, "system.html");
		});
	});
		
	// angular-nmi:vc
	describe("vc", function () {
		temp.track();
		var tmpDir;
		before(function(done) {
			tmpDir = temp.mkdirSync();
			helpers.run(path.join(__dirname, "..", "vc"))
				.inDir(tmpDir)
				.withArguments("src/app/admin app.admin admin")
				.withGenerators([
					path.join(__dirname, "..", "base2"),
					path.join(__dirname, "..", "base3"),
					path.join(__dirname, "..", "view"),
					path.join(__dirname, "..", "controller")
				])
				.on("end", done);
		});
		
		it("creates expected files", function () {
			assert.file(path.join(tmpDir, "src", "app", "admin", "admin.controller.js"));
			assert.file(path.join(tmpDir, "src", "app", "admin", "admin.html"));
		});
	});
	
});
"use strict";

var temp = require("temp");
var helpers = require("yeoman-generator").test;
var path = require("path");
var mkdirp = require("mkdirp");

module.exports = {
	genRun: genRun
}

function genRun(done, name, params, createAppFolder, deps) {
	temp.track();
	var workspace = context.workspace = temp.mkdirSync();
	console.log("    Using temporary folder: ", workspace);
	console.log("    Using deps: ", deps);
	
	helpers.testDirectory(workspace, function () {
		helpers.run(path.join(__dirname, "../../" + name))
			.withArguments(params)
			.withGenerators(deps)
			.on("ready", function(generator) {
				if (createAppFolder) {
					mkdirp.sync("app");
				}
			})
			.on("end", done);
	});
}

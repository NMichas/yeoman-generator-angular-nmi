"use strict";

var temp = require("temp");
var helpers = require("yeoman-generator").test;

module.exports = {
	genRun: genRun
}

function genRun(done, name, params) {
	temp.track();
	var workspace = context.workspace = temp.mkdirSync();
	console.log("    Using temporary folder: ", workspace);
	
	helpers.testDirectory(workspace, function () {
		helpers.run(path.join(__dirname, "../" + name))
			.withArguments(params)
			.on("ready", function(generator) {
				mkdirp.sync("app");
			})
			.on("end", done);
	});
}

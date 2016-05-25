"use strict"

var fs = require("fs");
var path = require("path");
var i18n = require("i18n");
var osLocale = require('os-locale');

module.exports = {
	appSourceRoot : path.join("src", "app"),
	dirExists : dirExists,
	toPath : toPath,
	resourceNameForJS : resourceNameForJS,
	setupLexicon : setupLexicon
}

function setupLexicon(localesPath) {
	// i18n setup.
	i18n.configure({
		directory : localesPath,
		defaultLocale : "en",
		updateFiles : false,
	});
	i18n.setLocale(osLocale.sync());
}

/**
 * Checks if a given path is a directory.
 * 
 * @param path
 *            The path to check.
 * @returns {Boolean}
 */
function dirExists(path) {
	try {
		var isDir = fs.statSync(path).isDirectory();
		if (!isDir) {
			return false;
		} else {
			return true;
		}
	} catch (err) {
		return false;
	}
}

function toPath(src) {
	return src.replace(/\./g, path.sep);
}

/**
 * Converts a resource name to a format for using it to define the name of the
 * resource inside a .js file.
 * 
 * @param res
 *            The resource to convert.
 * @returns
 */
function resourceNameForJS(res) {
	return capitaliseFirst(res.replace(/([-_][a-z])/g, function($1) {
		return $1.toUpperCase().replace(/[-_]/, '');
	}));
}


/*******************************************************************************
 * Local functions
 ******************************************************************************/

/**
 * Capitalises the first letter of the given word.
 * 
 * @param word
 *            The word to capitalise its first letter.
 * @returns {String}
 */
function capitaliseFirst(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}
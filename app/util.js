"use strict"

var fs = require("fs");
var colog = require("colog");

module.exports = {
	prereqCheck: prereqCheck,
	dirExists: dirExists,
	extractModuleName: extractModuleName,
	startsWithCapital: startsWithCapital,
	endsWith: endsWith,
	extractResourceName: extractResourceName,
	extractModulePath: extractModulePath,
	convertToPath: convertToPath,
	resourceNameForJS: resourceNameForJS,
	isModuleSpecified: isModuleSpecified,
	isModuleFolderPresent: isModuleFolderPresent
}

/**
 * Checks if a given path is a directory.
 * @param path The path to check.
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

/**
 * Checks if all prerequisites for running generators are fulfilled.
 * @returns
 */
function prereqCheck() {
	// Check an 'app' directory exists.
	var appDirCheck = dirExists("app");
	if (!appDirCheck) {
		colog.error("[ERROR] Can't find an 'app' directory on this level. " +
		"Make sure you run this generator on the same path as your 'app' directory.");
	}
	
	return appDirCheck;
}

/**
 * Takes the name of a resource to be generated "foo.bar.FooBar" and extracts 
 * the module name.
 * @param resourceURI The name of the resource to check.
 * @returns {String}
 */
function extractModuleName(resourceURI) {
	if (resourceURI.lastIndexOf(".") == -1) {
		return ".";
	} else {
		return resourceURI.substring(0, resourceURI.lastIndexOf("."));	
	}
}

/**
 * Returns the path to a module's root folder.
 * @param resourceURI The name of the resource to find module's path from.
 * @returns {String}
 */
function extractModulePath(resourceURI) {
	return extractModuleName(resourceURI).replace(/\./g, "/");
}

/**
 * Checks if the given string starts with a capital letter.
 * @param word The word/string to check.
 * @returns {Boolean}
 */
function startsWithCapital(word) {
	return word[0] === word[0].toUpperCase();
}

/**
 * Checks if the given string ends with another string.
 * @param word The source string to check.
 * @param suffix The target suffix to check.
 * @returns {Boolean}
 */
function endsWith(word, suffix) {
	return word.indexOf(suffix, word.length - suffix.length) !== -1;
}

/**
 * Returns the resource name from a resource URI, e.g. foo.bar.FooBar returns
 * FooBar.
 * @param resourceURI The resource URI to scan.
 * @returns
 */
function extractResourceName(resourceURI) {
	if (resourceURI.lastIndexOf(".") == -1) {
		return resourceURI;
	} else {
		return resourceURI.substring(resourceURI.lastIndexOf(".") + 1);	
	}
}

/**
 * Converts a resource URI to a path that can be used to write the output file.
 * Dots are converted to forward slashes.
 * @param resourceURI The resource to convert.
 * @returns {String}
 */
function convertToPath(resourceURI) {
	return resourceURI.replace(/\./g, "/");
}

/**
 * Converts a resource name to a format for using it to define the name of the
 * resource inside a .js file. 
 * @param resourceURI The resource to convert.
 * @returns
 */
function resourceNameForJS(resourceURI) {
	var res = extractResourceName(resourceURI);
	
	return capitaliseFirst(res.replace(/([-_][a-z])/g, 
			function($1){return $1.toUpperCase().replace(/[-_]/,'');}));	
}

/**
 * Capitalises the first letter of the given word.
 * @param word The word to capitalise its first letter.
 * @returns {String}
 */
function capitaliseFirst(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * Checks if the resource URI specifies a module by simply checking for the
 * existence of a ".".
 * @param resourceURI The resource URI to check.
 * @returns {Boolean}
 */
function isModuleSpecified(resourceURI) {
	return resourceURI.indexOf(".") > 1;
}

/**
 * Checks if the folder for the module specified by a resource URI is already
 * present on disk.
 * @param resourceURI The resource URI to check.
 * @returns {Boolean}
 */
function isModuleFolderPresent(resourceURI) {
	var dirToCheck = extractModulePath(resourceURI);
	
	return dirExists(dirToCheck);
}
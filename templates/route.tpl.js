/**
 * @ngdoc object
 * @name <%=resourceURI%>.route.js
 * @description <%=resourceURI%> routes configuration.
 */
(function() {
	"use strict";

	angular
		.module("<%=moduleName%>")
		.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider) {
//		$stateProvider.state("foo", {
//			controller : "FooController",
//			controllerAs :  "foo",
//			templateUrl : "bar.html"
//		});
	}
})();

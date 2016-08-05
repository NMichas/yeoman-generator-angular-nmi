/**
 * @ngdoc object
 * @name <%=resourceName%>.route.js
 * @description <%=resourceName%> <%=route_routes_configuration%>
 */
(function() {
	"use strict";

	angular // eslint-disable-line no-undef
		.module("<%=moduleName%>")
		.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider) { // eslint-disable-line no-unused-vars
		$stateProvider.state("foo", {
//			url : "/foo",
//			controller : "FooController",
//			controllerAs :  "foo",
//			templateUrl : "bar.html"
		});
	}
})();

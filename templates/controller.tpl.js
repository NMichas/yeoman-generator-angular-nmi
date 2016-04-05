/**
 * @ngdoc controller
 * @name <%=resourceName%>.controller.js
 * @description <%=resourceNameJS%> <%=controller_controller%>
 */
(function() {
	"use strict";

	angular // eslint-disable-line no-undef
		.module("<%=moduleName%>")
		.controller("<%=resourceNameJS%>", <%=resourceNameJS%>);

	/** @ngInject */
	function <%=resourceNameJS%>($scope) {
		//var vm = this;

		/***********************************************************************
		 * <%=controller_local_variables%>.
		 **********************************************************************/
		//var bar;

		/***********************************************************************
		 * <%=controller_variables_exports%>.
		 **********************************************************************/
		//vm.fooBar = "fooBar";

		/***********************************************************************
		 * <%=controller_functions_exports%>.
		 **********************************************************************/
		//vm.foo = foo;

		// <%=controller_calling_activation%>.
		activate();

		/***********************************************************************
		 * <%=controller_activation%>.
		 **********************************************************************/
		function activate() {
		}

		/***********************************************************************
		 * $scope destroy.
		 **********************************************************************/
		$scope.$on("$destroy", function() {
		});

		/***********************************************************************
		 * <%=controller_functions%>.
		 **********************************************************************/
		//function foo(bar) {
		//}
	}
})();

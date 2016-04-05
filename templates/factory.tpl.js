/**
 * @ngdoc service
 * @name <%=resourceName%>.factory.js
 * @description <%=resourceNameJS%> <%=factory_factory%>
 */
(function() {
	"use strict";

	angular // eslint-disable-line no-undef
		.module("<%=moduleName%>")
		.factory("<%=resourceNameJS%>", <%=resourceNameJS%>);

	/** @ngInject */
	function <%=resourceNameJS%>() {
		/***********************************************************************
		 * <%=factory_local_variables%>.
		 **********************************************************************/
		//var bar;

		/***********************************************************************
		 * <%=factory_local_functions%>.
		 **********************************************************************/
		//var foo = function() {
		//};

		/***********************************************************************
		 * <%=factory_exported%>.
		 **********************************************************************/
		//return {
		//	fooBar: function () {
		//	},
		//};
	}
})();

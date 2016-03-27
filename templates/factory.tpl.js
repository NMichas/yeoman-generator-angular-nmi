/**
 * @ngdoc service
 * @name <%=resourceURI%>.factory.js
 * @description <%=resourceNameJS%> factory
 */
(function() {
	"use strict";

	angular
		.module("<%=moduleName%>")
		.factory("<%=resourceNameJS%>", <%=resourceNameJS%>);

	/** @ngInject */
	function <%=resourceNameJS%>() {
		/***********************************************************************
		 * Local variables.
		 **********************************************************************/
		var bar;
		
		/***********************************************************************
		 * Local functions.
		 **********************************************************************/
		var foo = function() {
			
		};

		/***********************************************************************
		 * Exported functions.
		 **********************************************************************/
		return {
			fooBar: function () {
				
			},
		};
	}
})();

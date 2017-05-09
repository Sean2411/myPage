/** 
  * declare 'lu-page' module with dependencies
*/
'use strict';
angular.module("lu-page", [
	'ngAnimate',
	'ngCookies',
	'ngStorage',
	'ngSanitize',
	'ui.router',
	'ui.bootstrap',
	'oc.lazyLoad',
	'cfp.loadingBar',
	'ncy-angular-breadcrumb',
	'pascalprecht.translate'
]);
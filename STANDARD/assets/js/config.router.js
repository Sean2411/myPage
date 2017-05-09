'use strict';

/**
 * Config for the router
 */
app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {

    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;

    // LAZY MODULES

    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: jsRequires.modules
    });

    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard
    $urlRouterProvider.otherwise("/app/overview");
    //
    // Set up the states
    $stateProvider.state('app', {
        url: "/app",
        templateUrl: "assets/views/app.html",
        resolve: loadSequence('modernizr', 'moment', 'angularMoment', 'uiSwitch', 'perfect-scrollbar-plugin', 'toaster', 'ngAside', 'vAccordion', 'oitozero.ngSweetAlert', 'truncate', 'htmlToPlaintext', 'angular-notification-icons'),
        abstract: true
    }).state('app.overview', {
        url: '/overview',
        templateUrl: "assets/views/overview.html",
        title: 'Personal Overview',
        ncyBreadcrumb: {
            label: 'Personal Overview'
        },
        resolve: loadSequence('flow', 'overviewCtrl')
    }).state('app.resume', {
        url: '/resume',
        templateUrl: "assets/views/resume.html",
        title: 'Resume',
        ncyBreadcrumb: {
            label: 'Resume'
        }
    }).state('app.projects', {
        url: '/projects',
        templateUrl: "assets/views/projects.html",
        title: 'Projects',
        ncyBreadcrumb: {
            label: 'Projects'
        }
    }).state('app.modules', {
        url: '/modules',
        templateUrl: "assets/views/modules.html",
        title: 'Modules',
        ncyBreadcrumb: {
            label: 'Modules'
        },
        resolve: loadSequence('moduleCtrl')
    }).state('app.lltour', {
        url: '/lltour',
        templateUrl: "assets/views/lltour.html",
        title: 'LLtour',
        ncyBreadcrumb: {
            label: 'LLtour'
        },
        resolve: loadSequence('angularFileUpload', 'uploadCtrlLL')
    }).state('login', {
        url: '/login',
        templateUrl: "assets/views/login_login.html",
        resolve: loadSequence('loginCtrl')
    }).state('login.forgot', {
        url: '/forgot',
        templateUrl: "assets/views/login_forgot.html"
    }).state('login.registration', {
        url: '/registration',
        templateUrl: "assets/views/login_registration.html"
    }).state('login.lockscreen', {
        url: '/lock',
        templateUrl: "assets/views/login_lock_screen.html"
    });

    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    function loadSequence() {
        var _args = arguments;
        return {
            deps: ['$ocLazyLoad', '$q',
			function ($ocLL, $q) {
			    var promise = $q.when(1);
			    for (var i = 0, len = _args.length; i < len; i++) {
			        promise = promiseThen(_args[i]);
			    }
			    return promise;

			    function promiseThen(_arg) {
			        if (typeof _arg == 'function')
			            return promise.then(_arg);
			        else
			            return promise.then(function () {
			                var nowLoad = requiredData(_arg);
			                if (!nowLoad)
			                    return $.error('Route resolve: Bad resource name [' + _arg + ']');
			                return $ocLL.load(nowLoad);
			            });
			    }

			    function requiredData(name) {
			        if (jsRequires.modules)
			            for (var m in jsRequires.modules)
			                if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
			                    return jsRequires.modules[m];
			        return jsRequires.scripts && jsRequires.scripts[name];
			    }
			}]
        };
    }
}]);
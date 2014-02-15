
/* 	Brioche Services
/* ================================== */

(function(w,d,ng,ns,m) {

    'use strict';

    var app = ng.module(ns + '.' + m /* module name */,
                       ['ngResource'] /* module dependencies */);


	app.factory('User', function($resource) {
		return $resource('/users/:userId', {userId: '@id'})
	});

    app.factory('$sanitize', [function() {
        return function(input) {
            return input.replace('\n', '').replace('\t', '').replace('\r', '').replace(/^\s+/g, '');
        };
    }]);

})(window,document,window.angular,'BriocheApp','services');
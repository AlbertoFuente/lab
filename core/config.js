requirejs.config({
    app_name: 'lab',
    paths: {
        // vendor
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'lodash': '../bower_components/lodash/lodash.min',
        // scripts
        'api': 'api',
        'components': 'components',
        'app': 'app'
  },
  shim: {
        'api': {
            exports: 'api',
        },
        'components': {
            exports: 'components'
        },
        'jquery': {
            exports: 'jquery'
        },
        'lodash': {
            exports: 'lodash'
        },
        'app': {
            exports: 'app'
        }
    }
});

require(['jquery', 'lodash', 'components', 'api', 'app'], function($, _, comp, api, app){
    'use strict';
	app.init();
});

requirejs.config({
    app_name: 'lab',
    paths: {
      'api': 'api',
      'components': 'components',
      'app': 'app',
      'events': 'events',
      // vendor
      'jquery': '../bower_components/jquery/dist/jquery.min',
      'lodash': '../bower_components/lodash/lodash.min'
  },
  shim: {
        'api': {
            exports: 'api',
        },
        'components': {
            exports: 'components'
        },
        'events': {
            exports: 'events'
        },
        'jquery': {
            exports: 'jquery'
        },
        'lodash': {
            exports: 'lodash'
        }
    }
});

require(['jquery', 'lodash', 'components', 'api', 'events', 'app'], function($, _, comp, api, events, app){
    'use strict';
	app.init();
});

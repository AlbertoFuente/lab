requirejs.config({
    app_name: 'lab',
    paths: {
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
        }
    }
});

require(['components', 'api', 'app'], function(comp, api, app){
    'use strict';

	app.init(comp, api);
});

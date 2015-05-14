requirejs.config({
    app_name: 'lab',
    paths: {
      'api': 'api'
  },
  shim: {
        'api': {
            exports: 'api',
        }
    }
});

require(['components', 'api'], function(comp, api){
    'use strict';
    
	comp.init(api);
});

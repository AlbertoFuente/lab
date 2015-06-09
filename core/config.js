requirejs.config({
    app_name: 'lab',
    paths: {
        // vendor
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'lodash': '../bower_components/lodash/lodash.min'
    }
});

require(['jquery', 'lodash', 'components', 'api', 'app'], function($, _, comp, api, app) {
    'use strict';
    app.init();
});

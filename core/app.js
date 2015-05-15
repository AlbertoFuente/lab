define(['jquery', 'lodash', 'api', 'components', 'events'], function($, _, _api, _comp, _ev) {
    'use strict';

    return {
        init: function() {
            var dashboard = document.getElementById('dashboard'),
                configPanel = document.getElementById('configPanel'),
                particle = _comp.elementalParticle();

            console.log(configPanel);
        }
    };
});

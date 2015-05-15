define(['jquery', 'lodash', 'api', 'components', 'events'], function($, _, _api, _comp, _ev) {
    'use strict';

    return {
        init: function() {
            var particle = _comp.elementalParticle();

            console.log(particle);
        }
    };
});

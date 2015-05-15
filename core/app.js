define(function() {
    'use strict';

    return {
        init: function($, _, components, api, events) {
            var $comp = components,
                $api = api,
                $ev = events,
                particle = components.elementalParticle(api);

            console.log(particle);
        }
    };
}());

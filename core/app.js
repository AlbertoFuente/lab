define(['jquery', 'lodash', 'api', 'components', 'events'], function($, _, _api, _comp, _ev) {
    'use strict';

    return {
        init: function() {
            'use strict';
            var dashboard = document.getElementById('dashboard'),
                configPanel = document.getElementById('configPanel'),
                // Print Select table size options
                tableSizeOptions = _api.detectDomElement(configPanel, 'tableSize', _api.sizeOptions),
                // table size Select
                tableSize = _api.detectSelect(configPanel,'tableSize'),
                // Print number of particles options
                numberParticleOptions = _api.detectDomElement(configPanel, 'numberOfParticles', _api.particleOptions),
                // number of particle Select
                numberParticles = _api.detectSelect(configPanel, 'numberOfParticles');

                // onChange events
                tableSize.onchange = function (e) {
                    _ev.tableSizeSelected(e);
                };
                numberParticles.onchange = function (e) {
                    _ev.numberOfParticlesSelected(e);
                };
        }
    };
});

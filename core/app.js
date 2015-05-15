define(['jquery', 'lodash', 'api', 'components', 'events'], function($, _, _api, _comp, _ev) {
    'use strict';

    return {
        init: function() {
            var dashboard = document.getElementById('dashboard'),
                configPanel = document.getElementById('configPanel'),
                // Print Select table size options
                sizeOptions = ['600 x 800', '800 x 1200', '1200 x 1400', '1400 x 1600'],
                tableSizeOptions = _api.detectDomElement(configPanel, 'tableSize', sizeOptions),
                // Print number of particles options
                particleOptions = ['Random', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
                numberParticleOptions = _api.detectDomElement(configPanel, 'numberOfParticles', particleOptions);
        }
    };
});

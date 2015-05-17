define(['jquery', 'lodash', 'api', 'components'], function($, _, _api, _comp) {
    'use strict';

    return {
        init: function() {
            var dashboard = document.getElementById('dashboard'),
                configPanel = document.getElementById('configPanel'),
                // Print Select table size options
                tableSizeOptions = _api.detectDomElement(configPanel, 'tableSize', _api.sizeOptions),
                // table size Select
                tableSize = _api.detectSelect(configPanel,'tableSize'),
                // Print number of particles options
                numberParticleOptions = _api.detectDomElement(configPanel, 'numberOfParticles', _api.particleOptions),
                // number of particle Select
                numberParticles = _api.detectSelect(configPanel, 'numberOfParticles'),
                // Elemental particle
                elementalParticle = _comp.elementalParticle(),
                self = this;

                // onChange events
                tableSize.onchange = function (e) {
                    self.tableSizeSelected(e);
                };
                numberParticles.onchange = function (e) {
                    self.numberOfParticlesSelected(e);
                };
        },
        tableSizeSelected: function (ev) {
            var data = ev.srcElement.value;
            _comp.tableSizes(data);
        },
        numberOfParticlesSelected: function (ev) {
            var data = ev.srcElement.value;
            _comp.numberOfParticles(data);
        }
    };
});

define('events', ['jquery', 'lodash', 'api'], function($, _, _api) {
    'use strict';

    return {
        tableSizeSelected: function (ev) {
            var data = ev.srcElement.value;
            _api.tableSize(data);
        },
        numberOfParticlesSelected: function (ev) {
            var data = ev.srcElement.value;
        }
    };
});

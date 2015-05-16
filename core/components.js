define(['jquery', 'lodash', 'api'], function($, _, _api) {
    'use strict';

    return {
        elementalParticle: function() {
            this.size = 1;
            this.isAlive = true;
            this.strength = 1;
            this.existence = 60;
            this.spin = true;
            this.speed = 1;
            this.countDown = _api.deadCowntDown(this);

            return this;
        },
        tableSize: function (size) {
            switch (size) {
                case '600 x 800':
                    break;
                case '800 x 1200':
                    break;
                case '1200 x 1400':
                    break;
                case '1400 x 1600':
                    break;
            }
        },
        createTable: function(obj) {

        }
    };
});

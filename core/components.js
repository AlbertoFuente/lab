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
        tableConfig: function (height, width) {
            return {
                height: height,
                width: width
            };
        },
        tableSizes: function (size) {
            var tableSize = null;
            switch (size) {
                case '600 x 800':
                    tableSize = this.tableConfig('600', '800');
                    this.createTable(tableSize);
                    break;
                case '800 x 1200':
                    tableSize = this.tableConfig('800', '1200');
                    this.createTable(tableSize);
                    break;
                case '1200 x 1400':
                    tableSize = this.tableConfig('1200', '1400');
                    this.createTable(tableSize);
                    break;
                case '1400 x 1600':
                    tableSize = this.tableConfig('1400', '1600');
                    this.createTable(tableSize);
                    break;
            }
        },
        numberOfParticles: function (num) {
            console.log(num);
        },
        createTable: function(obj) {
            if (typeof obj === 'object' && (obj.width !== undefined && obj.height !== undefined)) {

            }
        }
    };
});

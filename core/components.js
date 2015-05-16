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
        tableObject: {},
        tableSizes: function (size) {
            switch (size) {
                case '600 x 800':
                    this.tableObject = this.tableConfig('600', '800');
                    break;
                case '800 x 1200':
                    this.tableObject = this.tableConfig('800', '1200');
                    break;
                case '1200 x 1400':
                    this.tableObject = this.tableConfig('1200', '1400');
                    break;
                case '1400 x 1600':
                    this.tableObject = this.tableConfig('1400', '1600');
                    break;
            }
        },
        numberOfParticles: function (num) {
            if (this.tableObject !== undefined && this.tableObject.width !== undefined) {
                this.tableObject.particles = num;
                this.createTable(this.tableObject);
            }
        },
        createTable: function(obj) {
            console.log(obj);
        }
    };
});

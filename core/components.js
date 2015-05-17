define(['jquery', 'lodash', 'api'], function($, _, _api) {
    'use strict';

    return {
        elementalParticle: function() {
            this.size = 1;
            this.isAlive = true;
            this.strength = 1;
            this.existence = 6;
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
            if (_.isObject(obj) && (!_.isUndefined(obj.width) && !_.isUndefined(obj.height))) {
                var dashboard = document.getElementById('tableDashboard'),
                    table = document.createElement('table'),
                    height = _.parseInt(obj.height),
                    width = _.parseInt(obj.width),
                    tableWidthRange = _.range(0, width, 10),
                    tableHeightRange = _.range(0, height, 10),
                    rowsRange = _.map(tableHeightRange, function (n) {
                        var tds = _.map(tableWidthRange, function (d) {
                            return '<td class="td'+ d +'"></td>';
                        });
                        return '<tr class="tr' + n + '">' + tds + '</tr>';
                    });

                    table.style.width = obj.width + 'px';
                    table.style.height = obj.height + 'px';

                    $(table).append(rowsRange);
                    $(dashboard).append(table);
            }
        }
    };
});

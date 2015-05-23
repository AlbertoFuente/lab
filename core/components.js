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
            this.moves = function () {
                var self = this;
                if (_api.particlesCreated) {
                    var worker = new Worker('core/movesWorker.js');
                        worker.addEventListener('message', function(e) {
                        if (!_.isUndefined(e.data)) {
                            switch(e.data) {
                                case 'top':
                                    _api.moveTop(self);
                                    break;
                                case 'left':
                                    _api.moveLeft(self);
                                    break;
                                case 'bottom':
                                    _api.moveBottom(self);
                                    break;
                                case 'right':
                                    _api.moveRight(self);
                                    break;
                            }
                        }
                    });
                    worker.postMessage('message');
                }
            };

            return this;
        },
        tableConfig: function (height, width) {
            this.height = height;
            this.width = width;

            return this;
        },
        tableSizes: function (size) {
            var tableSize = null;
            switch (size) {
                case '10 x 50':
                    tableSize = this.tableConfig('10', '50');
                    this.createTable(tableSize);
                    break;
                case '50 x 100':
                    tableSize = this.tableConfig('50', '100');
                    this.createTable(tableSize);
                    break;
                case '100 x 300':
                    tableSize = this.tableConfig('100', '300');
                    this.createTable(tableSize);
                    break;
                case '300 x 600':
                    tableSize = this.tableConfig('300', '600');
                    this.createTable(tableSize);
                    break;
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
        numberOfParticles: function (data) {
            var num = null;
            if (data === 'Random') {
                num = _api.randomNumber(0, 1000);
                this.createParticles(num);
            } else {
                num = data;
                this.createParticles(num);
            }
        },
        createParticles: function (particles) {
            var dashboard = document.getElementById('tableDashboard');

            if (dashboard.childNodes[0].tagName === 'TABLE') {
                var self = this,
                    tableChilds = dashboard.childNodes[0].childNodes[0].childNodes,
                    trClasses = _api.returnClasses(tableChilds),
                    tdClasses = _api.returnClasses(tableChilds[0].childNodes),
                    i = 0;

                    for (i; i < particles; i++) {
                        var trRandom = _.sample(trClasses),
                            tdRandom = _.sample(tdClasses);

                            _.map(tableChilds, function (n) {
                                if (n.className === trRandom) {
                                    _.map(n.childNodes, function (d) {
                                        if (d.className === tdRandom) {
                                            d.className += ' elementalParticle';
                                            self.elementalParticle.call(d);
                                            _api.particlesCreated = true;
                                            d.moves();
                                        }
                                    });
                                }
                            });
                    }
            }
        },
        rowsRange: [],
        createTable: function(obj) {
            if (_.isObject(obj) && (!_.isUndefined(obj.width) && !_.isUndefined(obj.height))) {
                var dashboard = document.getElementById('tableDashboard'),
                    table = document.createElement('table'),
                    height = _.parseInt(obj.height),
                    width = _.parseInt(obj.width),
                    tableWidthRange = _.range(0, width, 10),
                    tableHeightRange = _.range(0, height, 10);

                this.rowsRange = _.map(tableHeightRange, function (n) {
                        var tds = _.map(tableWidthRange, function (d) {
                            return '<td name="td' + d + '" class="td'+ d +'" data="' + d + '"></td>';
                        });
                        return '<tr class="tr' + n + '" data="' + n + '">' + tds + '</tr>';
                    });

                    table.style.width = obj.width + 'px';
                    table.style.height = obj.height + 'px';

                    $(table).append(this.rowsRange);

                    if (_.isUndefined(dashboard.childNodes[0])) {
                        $(dashboard).append(table);
                    } else {
                        return;
                    }
            }
        }
    };
});

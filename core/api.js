define(['jquery', 'lodash'], function ($, _) {
    'use strict';

    return {
        killParticle: function (particle) {
            $(particle).removeClass('elementalParticle');
        },
        setExistence: function(newVal, particle) {
            particle.existence = newVal;
            particle.isAlive = false;
            this.killParticle(particle);
        },
        deadCowntDown: function (particle) {
            // web worker
            var worker = new Worker('core/workers.js'),
                that = this;
            worker.addEventListener('message', function(e) {
                if (e.data === 0) {
                    that.setExistence(e.data, particle);
                }
            });
            worker.postMessage({ 'ex': particle.existence });
        },
        upLevel: function (self) {
            self.size = self.size * 2;
            self.strength = self.strength * 2;
            self.existence = self.existence + 30;
            self.speed = self.speed * 2;
            return self;
        },
        detectDomElement: function (node, name, options) {
            _.map(node.childNodes, function(n) {
                if (n.tagName === 'SELECT') {
                    var nodeName = n.getAttribute('name');
                    if (nodeName === name) {
                        _.each(options, function(op, i) {
                            $(n).append('<option class="selectTableSize' + i + '">' + op + '</option>');
                        });
                    }
                }
            });
        },
        randomNumber: function (first, last) {
            return _.random(first, last);
        },
        detectSelect: function (node, name) {
            var newObj = null;
            _.each(node.childNodes, function(n) {
                if (n.tagName === 'SELECT') {
                    var nodeName = n.getAttribute('name');
                    if (nodeName === name) {
                        newObj = n;
                    }
                }
            });
            return newObj;
        },
        returnClasses: function (data) {
            var result = [];
            _.map(data, function(n) {
                if (n.tagName === 'TR' || n.tagName === 'TD') {
                    result.push(n.className);
                }
            });
            return result;
        },
        particlesFight: function(particle1, particle2) {
            console.log('particle fight');
        },
        movements: ['top', 'bottom', 'right', 'left'],
        sizeOptions: ['100 x 300', '300 x 600', '600 x 800', '800 x 1200', '1200 x 1400', '1400 x 1600'],
        particleOptions: ['Random', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
        moveTop: function(particle) {
            if (!_.isUndefined(particle.className)) {
                var self = this,
                    particleName = particle.getAttribute('name'),
                    particleParent = particle.parentNode,
                    particleParentData = particleParent.getAttribute('data'),
                    upTrNum = particleParentData - 10,
                    upTr = document.getElementsByClassName('tr' + upTrNum);

                    if (!_.isUndefined(upTr)) {
                        _.map(upTr[0].childNodes, function(n) {
                            var nName = n.getAttribute('name');
                            if (n.tagName === 'TD' && nName === particleName) {
                                if (n.className === nName + ' elementalParticle') {
                                    self.particlesFight(particle, n);
                                } else {
                                    $(particle).removeClass('elementalParticle');
                                    $(n).addClass('elementalParticle');
                                }
                            }
                        });
                    }
            }
        },
        moveBottom: function(particle) {
            if (!_.isUndefined(particle.className)) {
                var self = this,
                    particleName = particle.getAttribute('name'),
                    particleParent = particle.parentNode,
                    particleParentData = particleParent.getAttribute('data'),
                    upTrNum = particleParentData + 10,
                    upTr = document.getElementsByClassName('tr' + upTrNum);

                    if (!_.isUndefined(upTr)) {
                        _.map(upTr[0].childNodes, function(n) {
                            var nName = n.getAttribute('name');
                            if (n.tagName === 'TD' && nName === particleName) {
                                if (n.className === nName + ' elementalParticle') {
                                    self.particlesFight(particle, n);
                                } else {
                                    $(particle).removeClass('elementalParticle');
                                    $(n).addClass('elementalParticle');
                                }
                            }
                        });
                    }
            }
        },
        moveRight: function(particle) {
            if (!_.isUndefined(particle.className)) {
                var prevTd = $(particle).prev();
                $(particle).removeClass('elementalParticle');
                $(prevTd).addClass('elementalParticle');
            }
        },
        moveLeft: function(particle) {
            if (!_.isUndefined(particle.className)) {
                var nextTd = $(particle).next();
                $(particle).removeClass('elementalParticle');
                $(nextTd).addClass('elementalParticle');
            }
        }
    };
});

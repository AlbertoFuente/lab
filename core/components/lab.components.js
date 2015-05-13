(function() {
    'use strict';
    // IMPORTS
    var kill = require('../api/lab.api.js');
    // Elemental Particle
    function ElementalParticle() {
        var self = this;
        this._className = 'elementalParticle';
        this._size = 1;
        this.isAlive = true;
        this.strength = 1;
        this.existence = 600;
        this.spin = true;
        this.speed = 1;
        this.bornDate = new Date();
        this.deathDate = Date.prototype.getDeathHour(this.bornDate, this.existence);

        if (!ElementalParticle.prototype.isDead || !ElementalParticle.prototype.setExistence) {
            ElementalParticle.prototype.isDead = function (time) {
                if (time === 0) {
                    self.isAlive = false;
                    killParticle(self);
                } else {
                    return;
                }
            };
            ElementalParticle.prototype.setExistence = function (newVal) {
                self.existence = newVal;
            };
        }

        this.countDown = window.setInterval(function() {
            Date.prototype.countDown(self.existence, ElementalParticle.prototype.isDead, ElementalParticle.prototype.setExistence);
        }, 1000);
    }

    function ParticleLevelOne() {
        ElementalParticle.call(this);
    }
    ParticleLevelOne.prototype = new ElementalParticle();
    ParticleLevelOne.prototype.constructor = ParticleLevelOne;
}());

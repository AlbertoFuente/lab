(function() {
    'use strict';

    if (!Date.prototype.getDeathHour || !Date.prototype.countDown) {
        Date.prototype.getDeathHour = function (created, minutes) {
            this.setTime(created.getTime() + minutes*60000);
            return this;
        };

        Date.prototype.countDown = function (time, isDead, setExistence) {
            var limit = time - 1;
                if (isDead !== undefined) {
                    isDead(limit);
                }
                if (setExistence !== undefined) {
                    setExistence(limit);
                }
        };
    }

    function killParticle(particle) {
        particle.remove();
    }

    function ElementalParticle() {
        var self = this;
        this._className = 'elementalParticle';
        this._size = 1;
        this.isAlive = true;
        this.strength = 1;
        this.tentacles = 0;
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

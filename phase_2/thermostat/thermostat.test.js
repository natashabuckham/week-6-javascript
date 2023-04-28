const Thermostat = require('./thermostat');

describe('thermostat class', () => {
    it('has an initial temperature of 20 degrees', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    })

    it('increases the temperature by two and returns the new temperature', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(22);
    })

    it('decrease the temperature by one and returns the new temperature', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(19);
    })

    it('does not allow the temperature to go below 10 degrees', () => {
        const thermostat = new Thermostat();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(10);
    })

    it('does not allow the temperature to go above 25 degrees when PSM is on', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(25);
    })

    it('does not allow the temperature to go above 32 degrees when PSM is off', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(32);
    })

    it('resets the temperature to 20 degrees', () => {
      const thermostat = new Thermostat();
      thermostat.up();
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    })

    it('reports low energy usage', () => {
      const thermostat = new Thermostat();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.report()).toEqual('low');
    })

    it('reports medium energy usage', () => {
      const thermostat = new Thermostat();
      expect(thermostat.report()).toEqual('medium');
    })

    it('reports high energy usage', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      thermostat.up();
      expect(thermostat.report()).toEqual('high');
    })

});

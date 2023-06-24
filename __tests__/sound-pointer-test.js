const SoundPointer = require('../src/sound-pointer.js').SoundPointer;

describe("SoundPointer class tests", function () {
    test("constructor creates SoundPointer object", function () {
        const soundPointer = new SoundPointer();
        expect(soundPointer instanceof SoundPointer).toBe(true);
        expect(soundPointer.minFrequency).toBe(220);
        expect(soundPointer.maxFrequency).toBe(880);
        expect(soundPointer.maxLeftPan).toBe(-1);
        expect(soundPointer.maxRightPan).toBe(1);
        expect(soundPointer.minVolume).toBe(0.1);
        expect(soundPointer.maxVolume).toBe(0.6);
        expect(soundPointer.soundType).toBe("sine");
        expect(soundPointer.isSoundPlaying).toBe(false);
    });

    test("buildSound creates Pizzicato object and panner effect", function () {
        const soundPointer = new SoundPointer();
        const sound = soundPointer.buildSound();
        expect(sound instanceof Pizzicato).toBe(true);
    });

});

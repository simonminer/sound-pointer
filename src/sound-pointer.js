/**
 * Main class to support using sound to track the mouse pointer in a browser window or tab.
 */

"use strict";

// import Pizzicato from "pizzicato";
import Pizzicato from "pizzicato";

export class SoundPointer {
 
    minFrequency = 220;
    maxFrequency = 880;
    frequencyCount = 0;
    //frequencyCount = maxFrequency - minFrequency;

    maxLeftPan = -1;
    maxRightPan = 1;
    panWidth = 0;
    // panWidth = maxRightPan - maxLeftPan;

    minVolume = 0.1;
    maxVolume = 0.6;
    volumeRange = 0;
    // volumeRange = maxVolume - minVolume;

    /**
     * Sound type; may be one of sine (the default), square, sawtooth, or triangle.
     * @tpe {String}
     */
    soundType = "sine";

    /**
     * Pizzicato object used to generate sound.
     * @type {Pizzicato}
     */
    sound;

    /**
     * Is the sound currently playing?
     * @type {boolean}
     */
    isSoundPlaying = false;

    /**
     * Build the sound to be played using the
     * object's sound type and minimum volume.
     * @returns {Pizzicato} the PIzzicato sound object.
     */
    buildSound() {
        console.log(Pizzicato.volume + " is the volume");
        // Create the sound object with the object's
        // sound type and minimum volume.
        new Pizzicato.Sound();
        const sound = new Pizzicato.Sound({
            source: "wave",
            options: {
                type: this.soundType,
                volume: this.minVolume
            }
        });
        // Add in the panner effect
        const panner = new Pizzicato.Effects.StereoPanner({
            pan: 0
        });
        sound.addEffect(panner);

        return sound;
    }
}
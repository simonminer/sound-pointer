"use strict";

require.context('./assets', false, /\.(png|jpe?g|svg)$/);
import { SoundPointer } from './sound-pointer.js';
window.soundPointer = new SoundPointer();
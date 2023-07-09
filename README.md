<img src="src/assets/sound-pointer.png" alt="Sound Pointer Logo" style="float:right;width:100px" />

# Sound Pointer

## Overview

[Sound Pointer is a Chrome extension that uses sound to track your mouse pointer in the browser.

# Installation and Usage

1. Install Sound Pointer in your Chrome browser from the [Chrome Web Store](https://chrome.google.com/webstore/detail/sound-pointer/ainiiiclibekafehinjoffjppjibgock?hl=en).
2. Click the Sound Pointer icon <img src="src/assets/sound-pointer.png" alt="" width="16" /> or press `Control+Shift+P` (Windows) or `Command+Shift+P` (Mac) to activate and deactivate the extension.

3. Use the following controls to operate Sound pointer.

* Click to turn the sound on and off.
* Move the mouse to hear the locater frequency.
  * Moving the mouse up and down raise or lowers the pitch.
  * Moving the mouse left or right pans the sound in that direction. The sound volume also decreases and increases as the mouse moves left or right.

## Development

Run the following commands to download and setup the Sound Pointer git repo.
```
git clone https://github.com/simonminer/sound-pointer.git
cd sound-pointer
npm i
```
The repo is organized into these main folders and files.

* `src/` - Code and assets for the Sound Pointer JavaScript library.
  * `sound-pointer.js` - Main source file for Sound POinter JavaScript library.
* `dist/` - Production build target location.
  * `sound-pointer.min.js` - Minified version of the Sound Pointer JavaScript library.
* `chrome/` - Top level directory for Sound Pointer Chrome extension.
  * `sound-pointer` - Unpacked Chrome extension resources.
  * `sound-pointer.zip` - Packed archive of the latest version of the extension.
* `media/` - Resources used to create Sound Pointer promotional material.
* `package.json`, `package.json.lock`, and `webpack.config.json` - Configuration files for the repo.
* `README` - This file.

Launch a development server with this command.
```
npm run dev
```
Run these commands to build a new version of the Sound Pointer library and bundle it into a new release of the extension.
```
npm run build
cd chrome
cp ../dist/sound-pointer.min.js sound-pointer/sound-pointer.min.js
zip sound-pointer
```
## Resources

* [Chrome Web Store page](https://chrome.google.com/webstore/detail/sound-pointer/ainiiiclibekafehinjoffjppjibgock?hl=en)
* [Sound Pointer overview video](https://www.youtube.com/watch?v=5HRpedSaoek)
* [Demo: Star Trek theme with Sound Pointer](https://www.youtube.com/watch?v=FFAodr7xziI)
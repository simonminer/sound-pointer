var isExtensionLoaded = false;
var isExtensionActive = false;

/**
 * Turn the extension on and off when its icon is pressed,
 * loading it into memory on the first time
 * Inspired by https://stackoverflow.com/questions/16136275.
 */
chrome.action.onClicked.addListener((tab) => {
    isExtensionActive = !isExtensionActive;

    if (isExtensionActive) {
        turnOnExtension(tab);
    }
    else {
        turnOffExtension(tab);
    }
});

/**
 * Make sure the extension is turned off when a new page loads.
*/
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
   if (changeInfo.status == 'complete' && tab.active && isExtensionActive) {
        isExtensionActive = false;
        toggleIcon(tab);
    }
});

/**
 * Activate the extension and change its
 * icon to show it is enabled.
 */
function setupSoundPointer () {
    if (document.soundPointer !== undefined) {
        document.soundPointer.setup();
    }
}
function turnOnExtension(tab) {
    // Load the extension.
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['sound-pointer.min.js']
    },
    // Once loaded, turn the extension on.
    () => {
        isExtensionLoaded = true;
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: setupSoundPointer
        });
    });

    // Switch the icon to show the extension is on.
    isExtensionActive = true;
    toggleIcon(tab);
}

/**
 * Deactivate the extension and change its
 * icon to show it is disabled.
 */
function teardownSoundPointer () {
    if (document.soundPointer !== undefined) {
        document.soundPointer.teardown();
    }
}

function turnOffExtension(tab) {
    // Switch the icon to show the extension is off.
    isExtensionActive = false;
    toggleIcon(tab);

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: teardownSoundPointer
    });
}

function toggleIcon(tab) {
    const icon = isExtensionActive === true ? 'icon16-active.png' : 'icon16.png';
    chrome.action.setIcon({
        path: icon,
        tabId:tab.id
    });
}

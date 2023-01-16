console.log('background running!')

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js'],
        files: ['problem.js'],
        files: ['optpermissions.js'],
        files: ['notifi.js']
    });
});
console.log('background running!')

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    });
});

// chrome.browserAction.onClicked.addListener(buttonClicked)

// function buttonClicked(tab){
//     let msg = {
//         txt : "hello"
//     }
//     chrome.tabs.sendMessage(tab.id, msg)
// }
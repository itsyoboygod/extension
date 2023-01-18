console.log('background running!')

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js'],
        files: ['problem.js'],
        files: ['optpermissions.js'],
        files: ['notifi.js'],
        files: ['list.js'],
        files: ['popup.js']
    });
});

chrome.runtime.onMessage.addListener(reciever)

let word = "word"

function reciever(request, sender, sendResponse){
    console.log(request)
    word = request.text
}
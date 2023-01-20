console.log('background running!')

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js'],
        files: ['problem.js'],
        files: ['optpermissions.js'],
        files: ['notifi.js'],
        files: ['list.js'],
        files: ['wordSelec.js'],
        files: ['popup.js']
    });
});

chrome.runtime.onMessage.addListener(reciever)

let word = "word"

function reciever(request, sender, sendResponse){
    console.log(request)
    word = request.text
    console.log("_______________")
    console.log("word selected(bckg.js): ")
    console.log(word + ' <- bckg.js')
}




// ----------------- COMMUNICATION BETWEEN BACKGROUND & ESPECIFIC PORT DOM File.JS  ---------------

// opens a communication port
chrome.runtime.onConnect.addListener(function(port) {

    // listen for every message passing throw it
    port.onMessage.addListener(function(o) {

        // if the message comes from the popup
        if (o.from && o.from === 'popup' && o.start && o.start === 'Y') {

            // inserts a script into your tab content
            chrome.tabs.executeScript(null, {

                // the script will click the button into the tab content
                code: "document.getElementById('pageBtn').click();"
            });
        }
    });
});
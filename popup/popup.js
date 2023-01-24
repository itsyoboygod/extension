// function popup(){
//     let bgpage = chrome.extension.getBackgroundPage()
//     let word = bgpage.word.trim()
//     createP(word)
// }

// always waits the document to be loaded when shown
document.addEventListener('DOMContentLoaded', function() {

    // opens a communication between scripts
    var port = chrome.runtime.connect();

    // listens to the click of the button into the popup content
    document.getElementById('popupjsBtn').addEventListener('click', function() {
        console.log(`POPUP.js CLICKED !!!`)
        // sends a message throw the communication port
        port.postMessage({
            'from': 'popup',
            'start': 'Y'
        });
    });
});
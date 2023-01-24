// console.log('background running!')

// chrome.action.onClicked.addListener((tab) => {
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         files: ['content.js'],
//         files: ['problem.js'],
//         files: ['optpermissions.js'],
//         files: ['notifi.js'],
//         files: ['list.js'],
//         files: ['wordSelec.js'],
//         files: ['connect.js'],
//         files: ['popup.js']
//     });
// });

// chrome.runtime.onMessage.addListener(reciever)

// let word = "word"

// function reciever(request, sender, sendResponse){
//     word = request.text
//     console.log(`______BACKGROUND.js______ \n
// ${word}
//     `)
// }



var port = chrome.runtime.connect();

window = self

window.addEventListener("message", (event) => {
  // We only accept messages from ourselves
  if (event.source !== window) {
    return;
  }

  if (event.data.type && (event.data.type === "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);


const theButton = window.document.getElementById("theButton");
theButton.addEventListener("click", () => {
  window.postMessage(
      {type : "FROM_PAGE", text : "Hello from the webpage!"}, "*");
}, false);
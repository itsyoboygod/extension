// console.log("popup is ok !!")
var payload = {
  message: "Hello from popup!"
}

chrome.runtime.sendMessage({
  source: "popup.js",
  payload: payload
}, function (response) {
  console.log(`
   ${response.source} , 
   ${response.payload}
  `);
});

function word() {
  let bgpage = chrome.extension.getBackgroundPage();
  let word = bgpage.word;
  createP(word)
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.source === "wordselec.js") {
    console.log(`
           ${request.source} , 
           ${request.payload.message}
           `);
    sendResponse({
      source: "popupResponse",
      payload: "Hello from popup!"
    });
  }
})
chrome.storage.local.get(['payload'], function(result) {
  console.log(`
    GET local storage: 
      ${result.payload.message}
  `);
  var wordsel = document.getElementById("wordsel")
  wordsel.innerText = result.payload.message

  var wordsel2 = document.getElementById("wordsel2")
  wordsel2.innerText = result.payload.message
});
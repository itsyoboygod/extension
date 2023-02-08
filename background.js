// console.log('background running!')

chrome.action?.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['popup.js'],
    files: ['wordSelect.js'],
    files: ['content.js'],
    files: ['rdm_clr.js']
  });
});

 
  chrome.runtime.onMessage.addListener(reciever)
  function reciever(request, sender, sendResponse) {
    if(request?.type === "popupMessage") 
      sendResponse({
        type: "backgroundResponse",
        payload: "Hello from word bckg!",
        bruh: "bruh",
        word: "selectedText" 
        }) 
    if(request?.type === "wordselMessage")
      sendResponse({
        type: "backgroundResponse#2",
        payload: "Hello from word bckg!",
        bruh: "bruh#2",
        word: "selectedText#2"
        })
    console.log(``);
  };
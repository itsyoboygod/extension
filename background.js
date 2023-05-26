//  console.log('background running!')

chrome.action?.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['popup.js'],
    files: ['wordSelect.js'],
    files: ['content.js'],
    files: ['rdm_clr.js'],
    files: ['read_json.js'],
    files: ['api_reddit.js']
  });
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    
  if (request.source === "popup.js") {
      // console.log(`
      //  ${request.source} , 
      //  ${request.payload.message}
      // `);
      sendResponse({ 
      //     source: "backgroundResponse", 
      //     payload: "Hello from background!" 
      });
  }

  let window = self
  window.word = "coding train"
  if (request.source === "wordselec.js") {
      // console.log(`
      //  ${request.source} , 
      //  ${window.word = request.payload.message}
      // `);
      sendResponse({ 
      //     source: "backgroundResponse", 
      //     payload: "Hello from background!" 
      });
  }

  if (request.source === "read_json.js") {
    // console.log(`
    //  ${request.source} , 
    //  ${request.payload.message}
    // `);
    sendResponse({ 
        // source: "backgroundResponse", 
        // payload: "Hello from background!" 
    });
}});
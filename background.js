//  console.log('background running!')

chrome.action?.onClicked.addListener(async(tab) => {
     await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['popup.js',
            'wordSelect.js', 
            'content.js', 
            'rdm_clr.js', 
            'read_json.js', 
            'scambtn.js', 
            'getCrtlyTab.js', 
            'api_reddit.js']
  });
});

// Send the tab ID to popup.js
chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener((message) => {
    if (message.action === 'sendTabId') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { tabId });
      });
    }
  });
});


// Listen for messages from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.action === 'getActiveTabId') {
    const tabId = sender.tab?.id;
    sendResponse({ tabId });
  }

  if (request.source === 'content.js') {
    const activeTab = request.tab;
    console.log(activeTab);
    // Use the active tab information as needed
    
    sendResponse({
      //     source: "backgroundResponse", 
      //     payload: "Hello from background!" 
    });
  }

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

  }
});
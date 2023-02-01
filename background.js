  // console.log('background running!')

  chrome.action?.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['popup.js'],
      files: ['wordSelect.js'],
      files: ['content.js'],
      files: ['rdm_clr.js'],
    });
  });

  chrome.runtime.onMessage.addListener(
     function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  `from popup.js: ` + sender.tab.url : ` from the extension`
                  );
      if (request.greeting === "hello")
        sendResponse({
          farewell: "goodbye",
          url: JSON.stringify(sender),
        });
      }
     );
      // document.getElementById("id__report").innerText = "sender.tab.url"
      
      // chrome.runtime.onMessage.addListener(reciever)
      
      // let word = "word"

  function reciever(request, sender, sendResponse) {
    word = request.text
    console.log(`______BACKGROUND.js______ \n
    ${word}
      `)
    chrome.runtime.sendMessage(word)
    document.getElementById("wrdsel").innerText = word
  }
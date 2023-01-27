  // console.log('background running!')

  chrome.action?.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['popup.js'],
      files: ['wordSelect.js'],
      files: ['content.js'],
    });
  });

  // chrome.runtime.onMessage.addListener(reciever)

  // let word = "word"

  // function reciever(request, sender, sendResponse) {
  //   word = request.text
  //   console.log(`______BACKGROUND.js______ \n
  //   ${word}
  //     `)
  //   chrome.runtime.sendMessage(word)

  // }



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({
        farewell: "goodbye",
        url: sender.tab.url
      });
  }
);

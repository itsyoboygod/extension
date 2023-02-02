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

chrome.runtime?.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      `from popup.js: ` + sender.tab.url : ` from the extension`
    );
    if (request?.greeting === "hello")
      sendResponse({
        farewell: "goodbye",
        url: JSON.stringify(sender),
      });
  }
);

    chrome.runtime?.onMessage.addListener(reciever)

      var window = self
      window.word = "codin train"

    function reciever(request, sender, sendResponse) {
      // let word = request.text
      console.log(`______BACKGROUND.js______ \n
            ${word = request.text}
              `)
      chrome.runtime.sendMessage(word)

      // let wrdsel = document.getElementById("wrdsel")
      //   wrdsel?.addEventListener('mouseup', (event) => {
      //   wrdsel.innerText = selectedText
      // })
    }
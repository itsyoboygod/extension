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

  chrome.runtime?.onMessage.addListener(reciever)

  function reciever(request, sender, sendResponse) {

    console.log(sender.tab ?
      `from popup.js: ` + sender.tab.url : ` from the extension`
    );
    if (request?.greeting === "hello")
        var window = self
        window.word = "codin train"
      sendResponse({
        farewell: "goodbye",
        url: JSON.stringify(sender),
        word: word,
        bruh: "bruh"
      });
    // let word = request.text
    console.log(`______BACKGROUND.js______ \n
              ${word = request.text},
              ${sender.tab?.url},
              sadsadasdsadsadasd
                `)
    //   chrome.runtime.sendMessage(word)

    // window.document.getElementById("wrdsel").innerText = word
    // window.document.getElementById("wrdsel2").innerText = word

    // let wrdsel = window.document.getElementById("wrdsel")
    //   wrdsel?.addEventListener('mouseup', (event) => {
    //   wrdsel.innerText = sender.tab.url
    // })
  }
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
        url: JSON.stringify(sender)
      });
  }
);

chrome.runtime?.onMessage.addListener(reciever)

// let word = "coding train"

function reciever(request, sender, sendResponse) {
  var window = self
  window.word = "codin train"
  // let word = request.text
  console.log(`______BACKGROUND.js______ \n
            ${word = request.text},
            ${sender.tab?.url}
              `)
  //   chrome.runtime.sendMessage(word)

  // window.document.getElementById("wrdsel").innerText = word
  // window.document.getElementById("wrdsel2").innerText = word

  // let wrdsel = window.document.getElementById("wrdsel")
  //   wrdsel?.addEventListener('mouseup', (event) => {
  //   wrdsel.innerText = sender.tab.url
  // })
}
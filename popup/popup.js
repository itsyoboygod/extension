// console.log("popup.js ok!")
// btn?.addEventListener('click', function onClick(event) {
//   document.body.style.backgroundColor = 'salmon'
// });

function popup() {
  let bgpage = chrome.extension.getBackgroundPage()
  let word = bgpage.word.trim()
  createP(word)
}

(async () => {
  try {
    const response = await chrome.runtime.sendMessage({ greeting: "hello" });
    const test = JSON.parse(response.url)
    console.log(`
          Here's your data from background, ${response.farewell}:
            id: ${test.id},
            url: ${test.url},
            tab: ${test.tab?test.tab.id:"undefined"},
        `);

        document.getElementById("info__id").innerText = test.id
        document.getElementById("info__url").innerText = test.url

        // document.getElementById("wrdsel").innerText = word
        // document.getElementById("wrdsel2").innerText = word


        // const info__id = document.getElementById("info__id")
        //   info__id?.addEventListener('mouseup', (event) => {
        //   info__id.innerText = test.url
        // })
        // const info__url = document.getElementById("info__url")
        //   info__url?.addEventListener('mouseup', (event) => {
        //   info__url .innerText = test.url
        // })
  } catch (error) {
    console.error("response error: " + error);
  }
})();

    // var wrdsel2 = document.getElementById("wrdsel2")
    //   wrdsel2?.addEventListener('mouseup', (event) => {
    //   wrdsel2.innerText = selectedText
    // })

      // document.getElementById("wrdsel").innerText = selectedText
      // document.getElementById("wrdsel2").innerText = selectedText


    //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    //       console.log(response.farewell);
    //     });
    //  });
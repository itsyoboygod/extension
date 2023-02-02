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
        ${response.farewell},
        id: ${test.id},
        url: ${test.url}
        `);

        document.getElementById("info__id").innerText = test.id
        document.getElementById("info__url").innerText = test.url

        // const info__id = document.getElementById("info__id")
        //   info__id?.addEventListener('mouseup', (event) => {
        //   info__id.innerText = test.id
        // })
        // const info__url = document.getElementById("info__url")
        //   info__url?.addEventListener('mouseup', (event) => {
        //   info__url .innerText = test.url
        //})
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

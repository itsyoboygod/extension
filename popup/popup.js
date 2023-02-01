// console.log("popup.js ok!")
function popup(){
    let bgpage = chrome.extension.getBackgroundPage()
    let word = bgpage.word.trim()
    createP(word)
  }

  // btn?.addEventListener('click', function onClick(event) {
//   document.body.style.backgroundColor = 'salmon'
// });

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
  } catch (error) {
    console.error("response error: " + error);
  }
})();




window.addEventListener('mouseup', wordSelected)

function wordSelected() {
    let selectedText = window.getSelection().toString().trim()
    console.log(`_______WORDSELEC POPUP.js_______ \n
    ${selectedText}
            `)
    if (selectedText.length > 0) {
        let message = {
            text: selectedText
          }
        }
        document.getElementById('wrdsel2').innerHTML = selectedText

}

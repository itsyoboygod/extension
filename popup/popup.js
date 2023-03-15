// console.log("popup is ok !!")
var payload = {
  message: "Hello from popup!"
}

chrome.runtime.sendMessage({
  source: "popup.js",
  payload: payload
}, function (response) {
  // console.log(`
  //  ${response.source} , 
  //  ${response.payload}
  // `);
});

// function word() {
//   let bgpage = chrome.extension.getBackgroundPage();
//   let word = bgpage.word;
//   // createP(word)

//   let url = `https://api.wordnik.com/v4/word.json/
//   ${word}
//   /definitions?limit=1
//   &includeRelated=false
//   &sourceDictionaries=all
//   &useCanonical=false
//   &includeTags=false
//   &api_key=6f9nbd1ye2vn1e15uu86gpuo2vg9mid0j8cq2ztfoguc3u3tf
//   `
//   url = url.replace(/\s+/g, '')
//   loadJSON(url, gotData)

//   function gotData(data){
//     createP(data[0].text)
//   }
// }
  
  // var wordnik = document.getElementById("id__wordnik")
  // wordnik.innerText = "word()"


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.source === "wordselec.js") {
    console.log(`
           ${request.source} , 
           ${request.payload.message}
           `);
    sendResponse({
      source: "popupResponse",
      payload: "Hello from popup!"
    });
  }
})
chrome.storage.local.get(['payload'], function(result) {
  console.log(`
    GET local storage: 
      ${result.payload.message}
  `);

  var wordsel2 = document.getElementById("wordsel2")
  wordsel2.innerText = result.payload.message
});
// console.log("popup.js ok!")
// function popup(){
//     let bgpage = chrome.extension.getBackgroundPage()
//     let word = bgpage.word.trim()
//     createP(word)
//   }
  
  // btn?.addEventListener('click', function onClick(event) {
  //   document.body.style.backgroundColor = 'salmon'
  // });
  
  (async () => {
    const response = await chrome.runtime.sendMessage({greeting: "hello"});
    console.log(`
    ${response?.farewell},
    url: ${response?.url}
    `);
  })();
  // var bruh = document.getElementById("id__report");


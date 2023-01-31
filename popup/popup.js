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
    try{
      const response = await chrome.runtime.sendMessage({greeting: "hello"});
      const test = JSON.parse(response.url)
      console.log(`
        ${response.farewell},
        url: ${response.url}
        `);
        // document.getElementsByTagName('a').getAttribute('href').innerText = "test.url.toString()";
        document.getElementById("test").innerText = test.url.toString()
      console.log(test);
    } catch (error) {
      console.error("response error: " + error);
    }
      console.log("dentro async: " + response.url)
  })();